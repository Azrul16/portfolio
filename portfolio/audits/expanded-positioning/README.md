# Portfolio expansion review — October 22, 2026

The existing React 19 / Vite 7 portfolio was extended, preserving its purple
palette, circular portrait, floating navigation, project carousels, theme switch,
and motion language. No branches, history, remote files, or deployments changed.
Earlier working-tree changes were retained.

## Positioning and UI

- Hero: **Flutter & Backend Developer**, with **DevOps / Cloud Enthusiast** on a
  secondary line. The description now explains building apps/APIs and taking
  them through deployment instead of leading with job availability.
- Skills: six data-driven categories — Mobile, Backend, DevOps & Cloud, AI/ML,
  Databases, Systems/IoT. Security/networking practice is in a smaller native
  disclosure. AWS is explicitly labeled **AWS Basics**. Theme-specific icon
  colors remain in place.
- What I Build: Flutter Applications, Backend APIs, Firebase & Real-Time Systems,
  Deployment & DevOps, Application Integration, Maintenance & Optimization.
- Delivery: an eight-step **From Code to Production** section, horizontal on wide
  screens, four columns on tablets, and a vertical flow on phones. It describes
  an approach, not a claim that every project uses every tool.
- Job CTA: concise product-lifecycle copy; remote, onsite, hybrid, and relocation
  preferences appear as secondary chips.
- Education: **B.Sc. in Computer Science and Engineering (CSE)**, PSTU,
  **August 2026**. No CGPA added.
- Projects: retained all **23 projects**, including **six featured projects** and
  **17 archived projects**. ResearchLens now displays FastAPI, Docker, and GitHub
  Actions / CI alongside its existing labels.

## Evidence and metadata

The ResearchLens Docker Compose file and GitHub Actions workflow were read
through the GitHub connector. They support container services, health checks,
backend tests, frontend checks/builds, and Compose smoke checks. They do **not**
establish automatic production delivery. No Docker/CI/cloud tags were added to
unrelated projects. See [project-evidence.json](project-evidence.json).

Updated the title, description, Open Graph, Twitter, Person, and WebSite metadata.
ResearchLens was added to the existing selected-project structured list. The
canonical `https://azrul.is-a.dev/`, CNAME, robots, sitemap, and favicon remain
consistent. Added a web manifest with generated 192px and 512px logo icons;
the image-generation script can regenerate these sizes.

All 23 project repository links resolved. The food-site live demo and GitHub and
Facebook profile URLs returned HTTP 200. LinkedIn returned 999 and X returned
403; automated access could not establish their validity. These links were
retained for manual checking. See [external-links.json](external-links.json).

## Bugs and accessibility fixes

| Finding                                                                   | Fix                                                                                      |
| ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| Archive “Details” looked actionable but was only a span.                  | Replaced it with a labeled button that opens the dialog from keyboard or pointer.        |
| Project carousels lacked a direct keyboard focus target.                  | Added labeled regions, keyboard focus, and a visible focus outline.                      |
| Project icon links and email copy control were below a 44px touch target. | Increased their target dimensions.                                                       |
| Email-copy feedback appeared in the distant contact-form status.          | Added an adjacent live status beside the email; form status remains independent.         |
| Certificate section entry downloaded every large preview.                 | Preload only the hovered/focused certificate; thumbnails remain lazy-loaded.             |
| Flat skills obscured core mobile/backend skills.                          | Added semantic category headings and lists; supporting security tools are de-emphasized. |

Earlier light/dark contrast fixes were preserved, including project feature
lists, certificate tags/cross, contact controls, and menu surfaces. The workflow
uses existing reduced-motion-aware reveals; its connectors do not animate
continuously. Skills use CSS hover motion rather than a motion component per icon.

## Performance

The performance audit found that deferred hydration still eagerly imported all
section code. Sections now use `React.lazy` inside the existing Suspense gates,
with a 200px approach margin. Static prerendering still outputs the full content
and styling before JavaScript; the hero, navbar, footer, and search remain in the
initial application.

- Main application chunk: approximately **166.11 kB → 50.52 kB** raw. Some icons
  remain in shared chunks, so this is not the total initial JavaScript saving.
- The eight large certificate previews total **307,630 bytes**. Browser checks
  recorded zero preview requests on section entry and one on focus.
- Existing AVIF portraits, WebP thumbnails, explicit image sizes, lazy EmailJS
  and confetti imports, CSS purging, and vendor splitting were retained.
- No runtime dependencies were added. React/ReactDOM resolve to one deduplicated
  version. Legacy unused helpers/packages were not removed in this change.

Local simulated-mobile Lighthouse results:

| Category / metric        | Before section splitting | After section splitting |
| ------------------------ | ------------------------ | ----------------------- |
| Performance              | 46                       | 82                      |
| Accessibility            | 100                      | 100                     |
| Best practices           | 100                      | 100                     |
| SEO                      | 100                      | 100                     |
| Largest contentful paint | 3.8 s                    | 2.5 s                   |
| Total blocking time      | 2,610 ms                 | 570 ms                  |
| Layout shift             | 0                        | 0                       |

These are lab measurements, not deployed guarantees. See
[lighthouse-summary.json](lighthouse-summary.json). The first Lighthouse CLI run
saved its report but exited with a Windows temporary-profile cleanup `EPERM`;
the final programmatic run completed and closed its browser cleanly.

## Verification

- Prettier 3.9.10 formatted the edited code; formatting checks passed. The project
  did not have an existing formatter script, so the formatter was run from a
  temporary tools directory without changing package dependencies.
- `npm.cmd run lint`, `npm.cmd run build`, and `git diff --check` passed.
- `npm.cmd ls --depth=0` and `npm.cmd ls react react-dom framer-motion` checked the
  dependency tree. This is JavaScript; no type-check or unit-test script exists.
- Playwright checked light/dark themes at 320, 390, 768, and 1440px: sections,
  grouped skills, workflow, project filtering, grid/carousel switching, dialogs,
  internal navigation, section search, clipboard feedback, and PDF downloads.
- EmailJS requests were intercepted locally to verify payloads, success/reset,
  and failure/mailto fallback without sending any email.
- Automated WCAG A/AA checks found no violations in the checked states.
  Screenshots were also inspected; gradient contrast needs visual checks.
- Additional smoke checks cover ordinary motion on desktop/mobile/landscape,
  persisted theme toggling, prerendered content without JavaScript, intent-based
  certificate loading, JSON-LD parsing, and manifest/icon/robots/sitemap responses.

See [validation.json](validation.json) and [final-smoke.json](final-smoke.json).

## Files changed for this request

- Content/layout: `Profile.jsx/.css`, `Skills.jsx/.css`, `Availability.jsx/.css`,
  `Collaboration.jsx/.css`, `Education.jsx`, new `DeliveryWorkflow.jsx/.css`.
- Data: new `src/data/skills.js` and `src/data/projects.jsx`; all project records
  were moved intact before supported labels were added to ResearchLens.
- Interactions: `Projects.jsx/.css`, `Contact.jsx/.css`, `Certificates.jsx`,
  `CommandPalette.jsx`.
- Loading/wiring: `App.jsx`, `bootstrap.js`, `DeferredSection.jsx`.
- SEO/assets/docs: `index.html`, `public/site.webmanifest`, two new manifest
  icons, `scripts/optimize-images.mjs`, `README.md`, and this audit directory.
- Removed unused default React imports encountered in the edited code, plus
  `SiteProviders.jsx`, `Footer.jsx`, `Navbar.jsx`, and `entry-server.jsx`.

## Remaining checks

Verify LinkedIn/X manually, make one real contact-delivery check when authorized,
and check the deployed site in Safari/Firefox and on a physical phone. Remaining
React/motion startup work is visible in mobile total blocking time; measure the
deployed site before further architectural changes. Hosting configuration and
deployment were deliberately left unchanged.
