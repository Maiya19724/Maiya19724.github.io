# Hao Xiang · Academic homepage

Personal academic website: [maiya19724.github.io](https://maiya19724.github.io/).

The site uses Jekyll and remains compatible with the existing GitHub Pages repository. The redesigned pages use local CSS and a small JavaScript file; there is no frontend build step or external runtime API.

## Content

- `_data/profile.yml`: biography, research interests, education and awards.
- `_publications/`: one record per paper. Author lists, DOI links, PDF paths, type and selected status are shared by the homepage, publication list, individual pages and CV.
- `_pages/about.md`: homepage.
- `_pages/publications.html`: searchable publication list, with all papers visible when JavaScript is unavailable.
- `_pages/cv.md`: CV and print styling.
- `docs/content-audit.md`: public sources, corrections and remaining limits of verification.

The four existing publication URLs and PDF files are preserved. The original `/about/`, `/about.html`, `/resume` and blog routes remain available. Unused template pages are excluded from output without deleting their source.

## Local preview

With Ruby and Bundler installed:

```sh
bundle install
bundle exec jekyll build --safe
python3 scripts/check_site.py
python3 scripts/serve_preview.py --port 8768
```

Open [the local preview](http://127.0.0.1:8768/). The preview server supports extensionless `.html` routes, matching GitHub Pages URL behavior. Rebuild after source changes and reload the browser.

`local/`, `.bundle/`, `_site/` and development caches are ignored by Git. `docs/` and `scripts/` are excluded from the generated website.

## Validation

The September 2026 redesign was built with Jekyll 3.10.0 in safe mode and checked in a real browser. See `docs/validation.md` for the exact checks and environment scope. Publication filters are progressive enhancements; CSS includes keyboard-focus states, reduced-motion behavior, responsive layouts and print rules.

## Credits

The repository originated from [AcademicPages](https://github.com/academicpages/academicpages.github.io), based on Michael Rose’s [Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes) theme. Original theme code and its license remain in the repository. The new academic layout is maintained separately in `_layouts/academic.html` and `assets/css/academic.css`.
