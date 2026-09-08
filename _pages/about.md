---
layout: academic
kind: home
permalink: /
title: "Hao Xiang"
description: "Hao Xiang is a PhD student at UCAS and SyM Lab, SIAT, working on genome mining, biosynthesis and computational approaches to natural-product discovery."
redirect_from:
  - /about/
  - /about.html
---
<section class="hero shell" aria-labelledby="intro-title">
  <div class="hero-copy">
    <p class="eyebrow"><span class="small-rule" aria-hidden="true"></span>Computational biology &amp; natural products</p>
    <h1 id="intro-title">Hao Xiang <span lang="zh">向浩</span></h1>
    <p class="hero-statement">From microbial genomes<br>to bioactive molecules.</p>
    <p class="hero-bio">I study how microbial genomes encode natural products. My work combines genome mining, protein-sequence analysis and computational tools to investigate biosynthetic pathways and guide molecular discovery.</p>
    <p class="hero-affiliation">PhD student at the <strong>University of Chinese Academy of Sciences</strong>,<br class="desktop-break"> working with <a href="https://sym-lab.net/">SyM Lab</a> at SIAT, Shenzhen.</p>
    <div class="hero-actions"><a class="button button-primary" href="{{ '/publications/' | relative_url }}">Explore my research <span aria-hidden="true">↗</span></a><a class="text-link" href="{{ '/cv/' | relative_url }}">Curriculum vitae <span aria-hidden="true">→</span></a></div>
  </div>
  <figure class="portrait">
    <div class="portrait-frame"><img src="{{ '/images/profile.png' | relative_url }}" alt="Hao Xiang" width="1334" height="1292" fetchpriority="high"></div>
    <figcaption><span>HAO XIANG <span lang="zh">/ 向浩</span></span><span>SyM Lab · Shenzhen, China</span></figcaption>
    <div class="portrait-links"><a href="{{ site.data.profile.orcid }}">ORCID ↗</a><a href="{{ site.data.profile.github }}">GitHub ↗</a><a href="mailto:{{ site.data.profile.email }}">Email ↗</a></div>
  </figure>
</section>

<section id="research" class="research-section" aria-labelledby="research-title">
  <div class="shell">
    <div class="section-heading"><div><p class="eyebrow">Research interests</p><h2 id="research-title">Reading the chemistry<br>encoded in genomes.</h2></div><p class="research-intro">Connecting sequence, biosynthetic mechanism<br class="desktop-break"> and molecular function.</p></div>
    <div class="research-grid">{% for area in site.data.profile.research %}<article class="research-area"><span class="research-number">0{{ forloop.index }}</span><h3>{{ area.title }}</h3><p>{{ area.description }}</p><span class="research-keywords">{{ area.keywords }}</span></article>{% endfor %}</div>
  </div>
</section>

<section class="publications-section shell" aria-labelledby="selected-title">
  <div class="section-heading"><div><p class="eyebrow">Selected work</p><h2 id="selected-title">Publications</h2></div><a class="text-link" href="{{ '/publications/' | relative_url }}">View all {{ site.publications.size }} papers <span aria-hidden="true">↗</span></a></div>
  {% assign selected = site.publications | where: 'selected', true | sort: 'date' | reverse %}
  <div class="paper-list">{% for paper in selected %}{% include academic-paper.html paper=paper %}{% endfor %}</div>
  <p class="contribution-note">† Equal contribution. My name is highlighted in each author list.</p>
</section>

<section id="software" class="software-section" aria-labelledby="software-title">
  <div class="shell software-grid">
    <div class="software-intro"><p class="eyebrow">Code &amp; resources</p><h2 id="software-title">From a protein query<br>to a gene cluster.</h2><p>Public analysis code accompanying our work on lipid-donor-anchored discovery of dioxanopeptins.</p><a class="text-link" href="{{ site.data.profile.github }}">More on GitHub <span aria-hidden="true">↗</span></a></div>
    <article class="software-card"><div class="software-card-top"><span class="code-symbol" aria-hidden="true">&lt;/&gt;</span><span>RESEARCH WORKFLOW</span></div><h3>2025-dxpBGC-mining</h3><p>A notebook workflow for retrieving genomic neighborhoods, annotating biosynthetic gene clusters and filtering candidates with antiSMASH and cblaster.</p><ol class="workflow" aria-label="Workflow steps"><li>Protein query</li><li>Genome mining</li><li>BGC analysis</li></ol><div class="software-links"><a href="https://github.com/SIAT-SyM-Group/2025-dxpBGC-mining">View code <span aria-hidden="true">↗</span></a><a href="https://colab.research.google.com/github/SIAT-SyM-Group/2025-dxpBGC-mining/blob/main/workflow.ipynb">Open in Colab <span aria-hidden="true">↗</span></a></div></article>
  </div>
</section>

<section class="background-section shell" aria-labelledby="background-title"><div><p class="eyebrow">Background</p><h2 id="background-title">Biology, chemistry<br>and computation.</h2><a class="text-link" href="{{ '/cv/' | relative_url }}">Full academic CV <span aria-hidden="true">→</span></a></div><div class="timeline">{% for item in site.data.profile.education %}<article class="timeline-item"><p class="timeline-period">{{ item.period }}</p><div><h3>{{ item.degree }}</h3><p>{{ item.institution }}</p></div></article>{% endfor %}</div></section>
