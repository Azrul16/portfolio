# Portfolio UI review — October 22, 2026

Reviewed the hero, navigation, featured projects, project archive, skills, services,
education, certificates, collaboration, contact form, footer, and command palette.
Checks ran against the production preview in Chromium, in light and dark themes,
at viewport widths of 320, 390, 768, and 1440 pixels. Mobile checks included touch
emulation. Existing unrelated working-tree changes were preserved.

## Fixed

| Area | Bug | Change |
| --- | --- | --- |
| Project details | Feature and tool lists retained pale dark-theme text on light panels. | Added a light-theme text color to the lists. |
| Skills | Yellow, pale blue, gray, and mint icons faded into light cards; dark blue icons faded into dark cards. | Added separate light/dark icon colors while retaining the original glow colors. |
| Mobile navigation | Text and cards behind the translucent menu competed with its links. | Made the light menu surface opaque. |
| Navbar | Small white CV text had insufficient contrast against the pale purple gradient. | Darkened the gradient beneath the white text and download icon. |
| Services | White numbers on the light-theme active row had marginal contrast. | Darkened the active-row gradient. |
| Certificate dialog | The close button could scroll out of view and overlap the preview. | Kept it at the upper right with sticky positioning and reserved space before the preview. |

The earlier fixes also cover certificate tags, issuer details and close-cross
colors; command-palette empty results, icons and placeholder; contact icons,
placeholders and focus/hover states; and navbar highlight text.

## Validation

- ESLint, production build, and `git diff --check` passed.
- All sections rendered at all four widths in both themes without page overflow
  or broken images.
- Project category filters and grid/carousel switching passed in both themes.
- Project dialogs and all eight certificate previews opened and closed. Dialog
  content fit a 320px viewport; certificate close controls remained visible after
  scrolling. The final close-control alignment was also checked in production.
- Mobile-menu keyboard focus wrapping, Escape dismissal and focus restoration
  passed. Section search displayed its empty-result state correctly.
- Whitespace-only contact submissions displayed validation feedback without
  sending a message.
- Browser runs reported no page errors. Automated WCAG A/AA scans reported no
  detected violations in their checked states. Screenshots and rendered-style
  checks supplemented these scans because gradient contrast is not reliably
  covered by automated checks.

See [validation.json](validation.json) for the browser check results. Saved
screenshots show the corrected [project details](light-project-details-mobile.png),
[certificate details](light-certificate-details-mobile.png),
[mobile menu](light-menu-mobile.png), [desktop projects](light-projects-desktop.png),
and skills in [light](light-skills-mobile.png) and [dark](dark-skills-mobile.png) mode.

This review used Chromium; Safari and Firefox were not tested. External contact
delivery and external destination websites were outside the UI checks.
