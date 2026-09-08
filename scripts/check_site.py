#!/usr/bin/env python3
"""Check generated pages, local links, anchors, images and the publication list."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote
import json
import sys

root = Path(sys.argv[1] if len(sys.argv) > 1 else '_site').resolve()
errors = []

class Page(HTMLParser):
    def __init__(self, path):
        super().__init__(convert_charrefs=True)
        self.path, self.links, self.ids = path, [], set()
        self.h1, self.papers, self.image_count = 0, 0, 0
        self.feed(path.read_text())

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == 'h1':
            self.h1 += 1
        if 'data-paper' in a:
            self.papers += 1
        if 'id' in a:
            if a['id'] in self.ids:
                errors.append(f'{self.path}: duplicate ID {a["id"]}')
            self.ids.add(a['id'])
        if tag == 'img':
            self.image_count += 1
            if not a.get('alt'):
                errors.append(f'{self.path}: image missing alt')
        if tag in ('a', 'link', 'script', 'img'):
            link = a.get('href') or a.get('src')
            if link:
                self.links.append(link)

pages = {p: Page(p) for p in root.rglob('*.html')}
for path, page in pages.items():
    source = path.read_text()
    if 'academic-site' in source and page.h1 != 1:
        errors.append(f'{path}: expected one h1, got {page.h1}')
    if '{%' in source or '{{' in source:
        errors.append(f'{path}: unrendered Liquid')
    for link in page.links:
        u = urlsplit(link)
        if u.scheme or u.netloc:
            if u.scheme == 'http' and 'maiya19724.github.io' in u.netloc.lower():
                errors.append(f'{path}: insecure internal URL {link}')
            continue
        target = (root / unquote(u.path).lstrip('/')) if u.path.startswith('/') else (path.parent / unquote(u.path))
        if not u.path:
            target = path
        if target.is_dir():
            target /= 'index.html'
        if not target.exists() and target.suffix == '':
            target = Path(str(target) + '.html')
        target = target.resolve()
        if not target.exists():
            errors.append(f'{path.relative_to(root)}: missing {link}')
        elif u.fragment and target in pages and unquote(u.fragment) not in pages[target].ids:
            errors.append(f'{path.relative_to(root)}: missing anchor {link}')

expected = {'index.html': 2, 'publications/index.html': 7, 'cv/index.html': 0}
for p, count in expected.items():
    page = pages.get(root / p)
    if page is None:
        errors.append(f'Missing core page: {p}')
    elif page.papers != count:
        errors.append(f'{p}: expected {count} paper rows, got {page.papers}')

for alias in ['about/index.html', 'about.html', 'resume.html']:
    if not (root / alias).exists():
        errors.append(f'Missing legacy redirect: {alias}')

if (root / 'docs').exists() or (root / 'local').exists():
    errors.append('Development files leaked into generated site')

print(json.dumps({'html_pages': len(pages), 'images': sum(p.image_count for p in pages.values()),
                  'errors': errors}, indent=2))
sys.exit(bool(errors))
