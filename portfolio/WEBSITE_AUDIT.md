# Website audit — September 15, 2026

Canonical site: https://azrul.is-a.dev/

The audit covered source code, production builds, desktop/mobile rendering, keyboard interactions, accessibility, contact-form behavior, public links, SEO metadata, image delivery, and dependency advisories. Changes are local; the public site has not been deployed by this audit.

## Verified issues fixed

| Area | Finding and change |
| --- | --- |
| SEO domain | Canonical, Open Graph, structured data, robots sitemap reference, and sitemap used an old GitHub Pages address. They now use the confirmed custom domain. Added `public/CNAME`. The old address returned 404 during the audit. |
| Social metadata | The preview image is actually 1500 × 1500, but metadata claimed 1200 × 630. Corrected the dimensions. |
| Certificate accuracy | Checked all eight original certificate images. Corrected dates, issuer attribution, and misleading course names; synchronized relevant structured data. The networking certificate is Great Learning, March 2024; Cisco Packet Tracer is February 20, 2024; Django training is March 2024; four Udemy certificates are July 2025. Cyber Drill shows 2022 without a documented month. |
| Loading | Restored the branded name splash at the owner's request with a 600 ms display and 180 ms fade, once per session. It no longer waits for page load, dismisses on interaction, and uses a shorter 250 ms display without a fade for reduced motion. The portfolio renders immediately behind it. |
| Images | Created optimized WebP portrait, logo, and certificate thumbnails. Portrait + logo downloads fell from approximately 349 KB to 58 KB. Certificate thumbnails total approximately 170 KB instead of 2.25 MB of original PNGs. Originals remain available in certificate dialogs. Added a repeatable image-generation script. |
| Image behavior | Certificate previews now use lazy-loaded images with `object-fit`; the hero image receives high fetch priority. Added explicit dimensions to portrait and logos. |
| Font loading | Removed external Google Fonts requests and all blocking font imports. Self-hosted a 6.4 KB WOFF2 subset for the branded name, with its license, preload, and `font-display: swap`. |
| Project accessibility | Removed button roles from articles containing other links. Project titles are native buttons; GitHub/demo links remain independent controls. |
| Project browsing | Removed three copies of every carousel item: 66 rendered project cards become 22 unique cards. Removed looping scroll jumps and enabled native touch scrolling. Mouse pointer capture starts after a drag threshold, preserving ordinary clicks. |
| Filters | AI filtering now matches the word “AI” instead of arbitrary words containing the letters “ai.” Filter buttons expose their selected state. |
| Keyboard access | Added a skip link and visible focus styles. Project/certificate dialogs return focus to their trigger. Section search and mobile navigation handle focus cycling and closing. |
| Mobile navigation | Fixed inherited blocked pointer events, header overlap, menu sizing, and scroll locking after resizing to desktop. Added a close control inside the navigation dialog. |
| Section search | Added a close button, no-results message, focus handling, background scroll lock, and scrolling on short screens. Prevented its shortcut from opening it over another modal. |
| Accessibility | Decorative icon SVGs no longer require redundant image labels. Corrected light-mode service-number contrast. |
| Responsive hero | Repaired a later CSS rule overriding the tablet single-column breakpoint. |
| Contact form | Rejects whitespace-only names/messages, adds autocomplete and length limits, announces feedback, and gives visitors an email fallback instead of an internal configuration error. |
| Resilience | Theme switching continues to work when browser storage is blocked. Framer Motion receives the user's reduced-motion preference. |
| Dependencies | Updated compatible dependencies and the lockfile. Final `npm audit` reported zero known vulnerabilities; no forced major-version upgrade was used. |
| Documentation | Corrected the live URL and inaccurate README references to search and unused technology. |

## Validation

- Production build and ESLint pass.
- Tested viewport widths 320, 375, 480, 768, 820, 1024, 1180, 1280, and 1440 pixels, plus 844 × 390 landscape. Checked viewport overflow, tablet columns, mobile navigation, resize scroll unlocking, and short-screen search.
- Axe scans: no detected violations in the inspected dark/light page states, project dialog, certificate dialog, section search, and mobile menu. This is automated coverage, not a complete WCAG conformance certification.
- Browser interaction tests passed for project/certificate opening, Escape, focus restoration, search empty state, mobile menu, and contact validation.
- Contact success and failure were tested with intercepted EmailJS responses. No real email was sent. A successful simulated response resets the form; a failed response displays the email fallback.
- No JavaScript runtime errors were detected in the exercised flows.
- The custom domain, robots.txt, sitemap, social image, 22 project repository URLs, and linked demo responded successfully. LinkedIn returned its automation-blocking status 999, so its availability is unverified by this check.
- An unknown path on the live custom domain correctly returned HTTP 404. HTTPS is active. `.env` is ignored by Git.

Lighthouse 13.4.1, local production preview, simulated mobile, Chromium/Edge:

| Metric | First measured build during audit | After performance fixes |
| --- | ---: | ---: |
| Performance | 60 | 85 |
| Accessibility | 100 | 100 |
| Best practices | 96 | 100 |
| SEO | 100 | 100 |
| First contentful paint | 3.6 s | 2.1 s |
| Largest contentful paint | 6.2 s | 3.5 s |
| Total blocking time | 340 ms | 210 ms |

The first Lighthouse measurement occurred after initial accessibility fixes, so its 100 accessibility score is not the original site's baseline. The earlier axe scan found nested controls, invalid roles, unnamed SVGs, and light-theme contrast failures. Lighthouse generated reports but its CLI encountered a Windows temporary-directory cleanup error afterward. Scores are local lab measurements and can vary; they do not measure indexing, rankings, actual inbox delivery, or real-user Core Web Vitals. Small final metadata/content edits followed the performance measurement.

## Final performance pass

The final production build reached **100 performance, 100 accessibility, 100 best practices, and 100 SEO** in fresh local mobile and desktop Lighthouse runs. The earlier 60 → 85 results above remain historical measurements. Machine-readable results and test settings are saved in [audits/lighthouse-summary.json](audits/lighthouse-summary.json).

| Mobile metric | Final measured build |
| --- | ---: |
| First contentful paint | 1.3 s |
| Largest contentful paint | 1.5 s |
| Speed index | 1.7 s |
| Total blocking time | 70 ms |
| Cumulative layout shift | 0 |

Desktop measured 0.3 s first contentful paint, 0.4 s largest contentful paint, 0.7 s speed index, 0 ms total blocking time, and zero layout shift.

The preceding layout-optimized build scored 99; final responsive image refinements preceded the 100 run. Scores vary with the environment and are not a guarantee of a production score.

Changes in this pass:

- Pre-render the complete portfolio during the production build and hydrate its HTML in the browser. Content and direct email links remain available without JavaScript; the interactive contact form is hidden when scripting is disabled.
- Purge unused production CSS and inline the remaining stylesheet, avoiding a separate blocking stylesheet request.
- Defer hydration of distant sections until they approach the viewport or receive an interaction. Use native `content-visibility` for off-screen layout; keep the project section uncontained because its dialog is rendered inside that section.
- Use the smaller Framer Motion feature bundle, remove the unused router, and load EmailJS and confetti on demand.
- Supply 480/640/800 px AVIF portraits with a WebP fallback, a smaller responsive navbar logo, and properly sized PNG favicons.
- Start the existing branded splash from HTML before React loads. Preserve its session limit, early dismissal, reduced-motion behavior, circular waves, and stationary portrait. Apply the saved theme before the first paint.

Validation: production build and lint pass; production dependency audit reports zero vulnerabilities. Project/certificate dialogs and focus restoration, mocked contact success/failure, navigation across ten viewport sizes, direct contact hash links, and no-JavaScript content checks pass. Splash tests passed with normal/reduced motion, early dismissal, session reload, blocked storage, and failed portrait loading. Full-page axe scans pass at 320, 820, and 1440 px in both themes. For full-page axe scans, off-screen layout skipping was disabled in the test page so axe could measure all backgrounds; an additional visible light-mode section scan also passed. Section-search contrast was checked after its opening transition settled.

Lighthouse saved valid reports before encountering its Windows temporary-directory cleanup permission error. These measurements use the local production preview, not the deployed custom domain.

## Latest UI recheck

Splash timing update: the current sequence is 700 ms with the name fully visible over a static background logo, followed by a 300 ms logo expansion/reveal, on every page load. Removed the diagonal flash and name entrance fade. Reduced motion shows a static 700 ms introduction; interaction can dismiss early. Build/lint and browser checks passed at 320/375/844/1440 px, including reloads, name bounds, matching fonts, loaded logo, static logo styling, absence of the flash, phase timing, and reduced motion. Measured hold/expansion timings were 701-711 / 305-310 ms; browser scheduling adds small timing variation. Earlier splash timings and Lighthouse scores below are historical, not fresh performance measurements for this sequence.

Latest end-to-end recheck, including the opaque project dialog and sticky close control: build/lint pass and `npm audit` reports zero vulnerabilities. All 22 project dialogs, six filters, grid/carousel switching, carousel arrows, mobile navigation, focus restoration, keyboard focus cycling, and mocked contact responses pass. Dialog bounds and closing after scrolling pass in both themes at 320/375/844/1440 px, including short landscape. Splash/session/reduced-motion/blocked-storage checks, direct hash navigation, no-JavaScript rendering, loaded images, canonical metadata, and JSON-LD parsing pass. Responsive navigation passes at ten sizes and full-page axe checks pass in both themes at 320/820/1440 px. Fresh mobile Lighthouse scores are **100/100/100/100**, with FCP 1.3 s, LCP 1.5 s, TBT 0 ms, and CLS 0. Saved in [audits/latest-validation.json](audits/latest-validation.json). Desktop Lighthouse was not rerun in this recheck; earlier desktop figures remain historical. Production deployment, physical devices, indexing, and real inbox delivery remain unverified by these local tests.

Visual polish follow-up: replaced text carousel arrows with centered SVGs inside 44 px circular buttons and aligned the controls with the case-study heading. Corrected education timeline dots to sit on the vertical line and removed the extra mobile indentation. Darkened the collaboration label and Flask/WebSockets icons in light mode. Reviewed section screenshots across desktop and mobile; arrow centering and timeline alignment passed geometry checks, with timeline checks at 320/375/820/1440 px. Build, lint, carousel/dialog interactions, responsive navigation, and final full-page axe scans in both themes passed. This is tested visual coverage, not a guarantee for every browser/device combination.

After the intro and navbar edits, production build and lint passed. Responsive navigation passed at ten viewport sizes, including landscape and desktop resizing. Full-page axe checks passed at 320, 820, and 1440 px in both themes. Project/certificate dialogs, focus restoration, section search, mobile navigation, and mocked form responses passed without runtime errors. Reviewed full-page desktop/mobile screenshots and detailed mobile intro, projects, and contact views; confirmed the portrait stays stationary on hover and direct project navigation lands below the navbar. No additional UI defects were confirmed in these checks. This recheck did not rerun Lighthouse or replace physical-device testing.

## Remaining work, in priority order

1. **Deploy and verify indexing.** The corrected domain and credential metadata need to reach production. Submit `https://azrul.is-a.dev/sitemap.xml` in Google Search Console and inspect the homepage's selected canonical and rendered content. Search Console/account access was not available in this audit.
2. **Confirm real contact delivery.** Check the EmailJS recipient, template, allowed origins, quota, and spam controls in its dashboard, then send an intentional test and verify receipt/reply behavior. Mocked browser tests cannot prove these settings.
3. **Recheck production performance after deployment.** The portfolio now ships as pre-rendered HTML. Confirm compression, cache behavior, asset loading, and Lighthouse scores on the custom domain. Local results do not establish real-user Core Web Vitals.
4. **Strengthen project evidence.** Current project preview panels are illustrative graphics. Actual product screenshots, concise demos, and verifiable outcomes would help visitors evaluate the work. Do not invent usage numbers, client claims, or contributions. Consider placing selected projects before the lengthy credentials/skills sections if client acquisition is the main purpose.
5. **Create a dedicated social card.** The existing square portrait works as an image, but a designed landscape share card with name and role would communicate the portfolio better. Metadata now accurately describes the existing image.
6. **Check real devices and assistive technology.** Test iOS Safari, Android touch scrolling, browser zoom/text enlargement, and a screen reader. Chromium viewport emulation does not cover physical browser chrome, virtual keyboards, or all accessibility behavior. Dialog behavior was reviewed against the [W3C dialog pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/).
7. **Review host-level headers.** The live response had HSTS, but no CSP, `X-Content-Type-Options`, or explicit `Referrer-Policy`. Configure these at the hosting layer if supported; a CSP must account for EmailJS, inline theme/splash scripts, structured data, and inline production CSS. Fonts are now hosted locally. No hosting settings were changed.
8. **Consolidate CSS gradually.** Several files contain repeated overrides from earlier redesigns. The tablet issue was one consequence. Consolidate component rules with visual regression checks rather than deleting large sections indiscriminately.

Remaining content verification: credential corrections are based on the included documents, not independent credential authentication. Education status, project ownership/outcomes, and CV currency should be confirmed by the portfolio owner before publication.

Timing update: The original 60 → 85 table predates splash restoration. The final performance-pass measurements include the restored, optimized splash.


## Recruiter-focused content revision

Moved projects directly after the introduction and aligned navigation order. Fixed replacement characters in the hero, shortened the introduction, restored one purpose sentence per featured project, and removed generic role/outcome/learning blocks from dialogs. Existing project descriptions and feature lists are portfolio-provided information, not an independent repository audit. Concept previews remain explicitly labeled.

Prioritized eight mobile/backend technologies, retained other topics in an expandable list, reduced education to university study, and replaced large certificate cards with eight compact buttons that open the original certificates. Replaced the future-testimonial placeholder with a direct collaboration invitation. Removed confetti from hero/navbar actions and stopped background wave motion. Preserved the requested one-second branded splash and glowing reveal.

Fixed the exposed screen-reader results text and added readable carousel/grid labels with light/dark styling. Production build and lint passed. Browser checks passed at 375 and 1440 px in both themes for section order, hero encoding, project filtering/grid switching, project and certificate dialogs, hidden results text, runtime errors, and horizontal overflow. This is not a new Lighthouse or comprehensive accessibility audit.

Still needed: actual app screenshots or recordings, runnable release links where available, verified technical decisions/contributions and measured outcomes from the project repositories. No testimonials, user counts, benchmarks, or experience claims were invented. Live deployment, CV verification, indexing, and real email delivery remain separate checks.


## Current recruiter audit and bug fixes

Scope: local production site, current source, desktop/mobile rendering, certificate previews, project dialogs, section search, mobile menu, metadata, and mocked contact flows. No deployment, real email, external repository implementation audit, CV-content verification, or new Lighthouse measurement was performed.

Fixed:
- Packages filtering matched generic utility apps. It now uses package/component category and status, returning the four package/component entries in the archive.
- Page title, social titles/descriptions, and Person metadata still used the old Software Developer positioning. Updated them to mobile/backend development.
- Section search forced smooth scrolling even with reduced motion enabled. It now respects the preference; command order also matches the page/navigation.

Validation: build and lint passed. Project/certificate modal focus restoration, section search, mobile menu, and mocked contact validation/success/failure passed without runtime errors. Axe checks passed for dialogs/menu/search and full-page layouts at 320/820/1440 px in both themes; offscreen layout skipping was disabled for full-page contrast measurements. One intermediate certificate contrast result did not reproduce in an isolated check or the full rerun. Canonical URL, JSON-LD parsing, and loaded images passed. Targeted checks passed for the corrected package filter, title, and reduced-motion section navigation.

Recruiter concerns remaining (judgment, not confirmed implementation defects):
1. Concept project artwork does not demonstrate actual app behavior. Add genuine screenshots, recordings, or runnable releases, preserving concept labels until then.
2. Project dialogs describe features/tools but provide limited evidence of personal contribution, engineering decisions, tests, or known limitations. Verify these against each repository before adding claims.
3. All 24 skills remain visible as requested. This shows breadth but may obscure the primary Flutter/backend specialization; back up secondary skills with relevant work.
4. The current contact language emphasizes freelance projects, while the hero describes a student. Clarify the actual opportunities sought and availability without assuming employment preferences.
5. Certificates demonstrate training, not equivalent professional experience. The site needs stronger delivered-work evidence more than additional course badges.
6. The one-second splash and decorative styling are preferences, not functional defects. Keep them subordinate to accessible project evidence.

No invented experience, testimonials, benchmarks, user counts, or hiring claims were added.
