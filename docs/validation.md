# Validation of the September 2026 redesign

## Personal-homepage refinement

- Rebuilt successfully with the same Jekyll 3.10.0 safe-mode environment.
- `scripts/check_site.py`: 18 HTML pages, 8 image elements, zero errors. The homepage has two selected research highlights; the bibliography still contains all seven papers.
- All 23 distinct root-relative links and assets found in the generated HTML returned HTTP 200 through the local preview server, including the preserved PDFs and new graphical abstract.
- Inspected the revised homepage in a real browser at 1280 × 720 and 390 × 844. DOM measurements found zero horizontal overflow at both widths, and all three homepage images loaded. At 1280 × 720, the first research highlight ends at approximately 586 px and is fully visible in the first screen.
- Inspected the compact footer, research-code section and education list in the browser. The profile remains alongside the content on desktop.
- The mobile menu opens and presents the navigation in two columns. The existing navigation script and publication filtering logic were not changed in this refinement. The broader interaction checks below were completed for the initial redesign; they are not presented as a fresh complete interaction run.
- New figure metadata is rendered correctly with source and CC BY 3.0 attribution. `git diff --check` passes.

## Initial redesign checks

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
