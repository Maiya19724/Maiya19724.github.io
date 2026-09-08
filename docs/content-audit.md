# Homepage content audit

Checked 8 September 2026. The redesign starts from commit `222b4384ea64ac405ec6d87d612354f2a6a39e75` on `master`.

## Profile and research

| Content | Evidence | Treatment |
| --- | --- | --- |
| Name: Hao Xiang / 向浩; current PhD student | [SyM Lab members](https://sym-lab.net/members/) and existing site | Retained PhD student; no candidacy examination or graduation date inferred. |
| UCAS / SIAT affiliation | [2026 paper, PubMed](https://pubmed.ncbi.nlm.nih.gov/42066660/), original site | Updated institutional wording; no new academic appointment inferred. |
| SIAT visiting student, 2023–2024 | [SyM Lab members](https://sym-lab.net/members/) | Replaced the stale “2023–Present” visiting entry. No month inferred for the end date. |
| MSc, BSc, CityU research experience and awards | User's existing public CV in this repository | Retained as existing self-reported information. These have not been independently corroborated. |
| Genome mining, protein language models, docking and simulation | Existing public introduction and CV; published work | Rephrased as research interests and methods, without claiming unpublished performance or discoveries. |
| Contact and ORCID | Existing site configuration; author ORCID matched in Crossref | Kept existing professional links. |

The current PhD start date is not available from the checked sources, so the CV says “Current”. No private repository contents, unpublished results, private files or inferred achievements were added. Research on protein language models remains an interest, not a claimed published result.

## Publications

The [public ORCID record](https://orcid.org/0000-0002-0299-1069) contains eight entries representing seven distinct papers; the English and German Angewandte records of the thielavin paper are counted once. Crossref records were queried by DOI to cross-check titles, author order and bibliographic details. The four original records retain their existing permalinks and PDF files.

| Paper | Primary / bibliographic source | Change |
| --- | --- | --- |
| Ketoreductase-mediated chain release, 2023 | [DOI](https://doi.org/10.1021/jacs.3c02011); [CityU manuscript](https://scholars.cityu.edu.hk/files/161877166/CHEM_MATSUDA_Yudai_148340041.pdf) | Author order, DOI and equal-contribution markers; original PDF and date retained. |
| Thielavin A, 2024 | [Wiley](https://onlinelibrary.wiley.com/doi/10.1002/anie.202402663) | Author list and DOI; CV outcome changed from submitted to published. No equal-contribution marker added. |
| Noncanonical aromatization, 2024 | [DOI / Crossref](https://doi.org/10.1021/acscatal.4c01043) | Full author list and DOI; correct journal in CV is ACS Catalysis. |
| Organismic interactions, 2024 | [PubMed](https://pubmed.ncbi.nlm.nih.gov/39316448/); [RSC](https://doi.org/10.1039/d4np00018h) | Replaced “Advance Article” with volume 41, pages 1630–1651. |
| Membrane-embedded secondary metabolites, 2024 | [Wiley](https://chemistry-europe.onlinelibrary.wiley.com/doi/10.1002/cmdc.202400469) | Added missing review; Zhao Xia and Hao Xiang marked as equal contributors. |
| Dioxanopeptins, 2026 | [Published paper in PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC12964715/); [RSC PDF](https://pubs.rsc.org/en/content/articlepdf/2026/sc/d6sc00003g) | Added article, co-first authorship, volume 17, pages 8229–8241, open full text and code. |
| Synthetic biology and antimicrobial discovery, 2026 | [PubMed](https://pubmed.ncbi.nlm.nih.gov/42066660/); [publisher](https://www.sciencedirect.com/science/article/pii/S1369527426000536) | Added review, volume 91, article 102759. |

Sorting uses the original dates for existing records. New dioxanopeptin and synthetic-biology records use verified online dates (27 February and 30 April 2026). The membrane review uses its print issue date (16 December 2024); the publisher web page and Crossref disagree on its online date. Public pages display the year, not an ambiguous online date. Author order is preserved; Hao Xiang is highlighted.

## Public code

The dioxanopeptin paper points to [SIAT-SyM-Group/2025-dxpBGC-mining](https://github.com/SIAT-SyM-Group/2025-dxpBGC-mining). The user's public fork and repository README corroborate the antiSMASH/cblaster notebook workflow and Colab URL. The site links to the paper's canonical group repository and calls it accompanying research code. It does not claim sole ownership of group software or list unrelated forks as original projects.

## Editorial decisions

- English remains the main language; the established Chinese name is shown alongside it.
- The existing personal note is preserved in a native, collapsible footer disclosure. Its animated third-party image was replaced with the same text.
- The empty blog was removed from the primary navigation; its old URL still gives access to research materials.
- Unused AcademicPages demo pages are excluded from the generated site, while their source files remain in the repository.
- New layouts load local CSS and JavaScript only. They do not need the old theme's third-party typography, icon, math or animation scripts.
- The publication collection is the single source for the homepage selections, publication list, detail pages and CV bibliography.

This file is excluded from Jekyll's published output.
