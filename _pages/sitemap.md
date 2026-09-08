---
layout: academic
title: "Sitemap"
permalink: /sitemap/
---
<div class="shell article-page"><header class="page-heading"><p class="eyebrow">Explore</p><h1>Sitemap</h1></header><p><a class="text-link" href="{{ '/' | relative_url }}">About &amp; research →</a></p><p><a class="text-link" href="{{ '/publications/' | relative_url }}">Publications →</a></p><p><a class="text-link" href="{{ '/cv/' | relative_url }}">Academic CV →</a></p><div class="paper-list">{% assign papers = site.publications | sort: 'date' | reverse %}{% for paper in papers %}{% include academic-paper.html paper=paper level=2 %}{% endfor %}</div></div>
