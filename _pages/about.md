---
layout: academic
kind: home
permalink: /
title: "Hao Xiang"
description: "Hao Xiang is a PhD student at UCAS and SyM Lab, SIAT, working on genome mining and microbial natural-product discovery."
redirect_from:
  - /about/
  - /about.html
---
<div class="shell personal-home">
  <aside class="profile-column" aria-label="Profile and contact">
    <div class="profile-identity">
      <img class="profile-photo" src="{{ '/images/profile.png' | relative_url }}" alt="Hao Xiang" width="1334" height="1292" fetchpriority="high">
      <div class="profile-name"><h1>Hao Xiang <span lang="zh">向浩</span></h1><p class="profile-role">PhD student</p><p class="profile-location">Shenzhen, China</p></div>
    </div>
    <p class="profile-affiliation">University of Chinese<br class="profile-break"> Academy of Sciences<br><a href="{{ site.data.profile.lab_url }}">SyM Lab</a> · SIAT, CAS</p>
    <div class="profile-contact"><span class="profile-email">{{ site.data.profile.email_display }}</span><div class="profile-links"><a href="{{ site.data.profile.orcid }}">ORCID <span aria-hidden="true">↗</span></a><a href="{{ site.data.profile.github }}">GitHub <span aria-hidden="true">↗</span></a><a href="{{ '/cv/' | relative_url }}">CV <span aria-hidden="true">↗</span></a></div></div>
  </aside>

  <div class="home-content">
    <section class="personal-intro" aria-labelledby="about-title">
      <h2 id="about-title">About me</h2>
      <p>I’m Hao, a PhD student at the <a href="https://www.ucas.ac.cn/">University of Chinese Academy of Sciences</a>, working in <a href="{{ site.data.profile.lab_url }}">SyM Lab</a> at <abbr title="Shenzhen Institutes of Advanced Technology, Chinese Academy of Sciences">SIAT</abbr>, Shenzhen.</p>
      <p>I study <strong>genome mining for natural-product discovery</strong>, using comparative genomics and sequence analysis to connect microbial gene clusters with their small-molecule products. My interests also include protein language models and biosynthetic mechanisms.</p>
    </section>

    <section id="research" class="home-section selected-research" aria-labelledby="selected-title">
      <div class="home-section-heading"><h2 id="selected-title">Selected research</h2><a href="{{ '/publications/' | relative_url }}">All {{ site.publications.size }} publications <span aria-hidden="true">↗</span></a></div>
      {% assign selected = site.publications | where: 'selected', true | sort: 'date' | reverse %}
      {% for paper in selected %}{% include research-highlight.html paper=paper %}{% endfor %}
    </section>

    <section class="home-section recent-writing" aria-labelledby="writing-title">
      <div class="home-section-heading"><h2 id="writing-title">Reviews &amp; perspectives</h2></div>
      {% assign reviews = site.publications | where: 'paper_type', 'Review' | sort: 'date' | reverse %}
      {% for paper in reviews limit:2 %}<article class="writing-row"><time datetime="{{ paper.date | date: '%Y-%m-%d' }}">{{ paper.date | date: '%Y' }}</time><div><h3><a href="{{ paper.url | relative_url }}">{{ paper.title }}</a></h3><p>{{ paper.venue }}{% if paper.equal_contributors contains site.data.profile.name %}<span class="writing-role"> · Co-first author</span>{% endif %}</p></div></article>{% endfor %}
    </section>

    <section id="software" class="home-section research-code" aria-labelledby="software-title">
      <div class="home-section-heading"><h2 id="software-title">Research code</h2><a href="{{ site.data.profile.github }}">GitHub <span aria-hidden="true">↗</span></a></div>
      <div class="code-entry"><div><h3><a href="https://github.com/SIAT-SyM-Group/2025-dxpBGC-mining">2025-dxpBGC-mining</a></h3><p>The shared genome-mining workflow accompanying our dioxanopeptin paper. Retrieve genomic neighborhoods, annotate BGCs and prioritize candidates with antiSMASH and cblaster.</p></div><a class="colab-link" href="https://colab.research.google.com/github/SIAT-SyM-Group/2025-dxpBGC-mining/blob/main/workflow.ipynb">Open in Colab <span aria-hidden="true">↗</span></a></div>
    </section>

    <section class="home-section education-summary" aria-labelledby="education-title">
      <div class="home-section-heading"><h2 id="education-title">Education</h2><a href="{{ '/cv/' | relative_url }}">Full CV <span aria-hidden="true">↗</span></a></div>
      <dl>{% for item in site.data.profile.education %}<div><dt>{{ item.period }}</dt><dd><strong>{{ item.degree }}</strong><span>{{ item.institution }}</span></dd></div>{% endfor %}</dl>
    </section>
  </div>
</div>
