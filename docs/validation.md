# Validation of the September 2026 redesign

- Actual Jekyll 3.10.0 build completed successfully with `--safe`, using the site's configuration and active plugins.
- The local machine has system Ruby 2.6 and Homebrew's portable Ruby 4.0.5. Validation used the latter with an isolated preview Gemfile containing Jekyll and the site's active plugins, not the complete `github-pages` metagem. The production Gemfile was left unchanged. This is local build evidence, not evidence of a deployed GitHub Pages build.
- `scripts/check_site.py`: 18 HTML pages, 5 rendered image elements, zero missing local targets, broken anchors, missing image alternatives or unrendered Liquid tags. Core pages contain the expected publication counts; development directories are excluded.
- HTTP requests through the local preview server: all 27 distinct internal page, asset, PDF and redirect targets returned successfully.
- Browser checks: desktop 1280 px, mobile 390 px and narrow mobile 320 px. No horizontal overflow in the checked layouts. Inspected the actual homepage, publication list, legacy JACS detail page and CV.
- Publication interactions: four research articles, three reviews; combined type/year and journal queries; zero-result state; reset; keyboard clearing back to seven papers.
- Mobile navigation: open, Escape to close, and navigation to the publication page all worked. The menu closes on navigation.
- JACS detail page retained its original URL, shows the original graphical abstract, and links to the preserved PDF. All four existing PDFs were checked by HTTP; the JACS author-contribution statement was also checked in its PDF.
- No JavaScript warning or error was recorded on the publication page during interaction checks. `node --check` passed for the custom script; `git diff --check` passed.

The CV includes print styles and a native print button. A PDF export has not been independently paginated and visually verified. External publisher pages can impose access controls; their DOI links were verified against publication records rather than treated as guaranteed open-access downloads.

No changes have been merged into the website's production branch as part of this validation.
