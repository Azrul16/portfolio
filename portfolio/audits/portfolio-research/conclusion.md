# Portfolio organization research for Azrul Amaline

Reviewed 13 October 2026.

**Recommendation: use five main sections: Introduction → Selected Projects → Technical Skills → About & Background → Contact.** Keep open-source packages inside the work section, education and training inside background, and CV as a persistent action. This recommendation fits the mobile/backend developer role stated in the existing portfolio.

## What was actually reviewed

The [100-site review ledger](ledger.md) contains a link and an individual organizational observation for every counted portfolio. [The structured evidence](reviewed-100.json) records the sample, exclusions and limited browser observations.

- Source pool: [Emma Bostian's public developer-portfolio directory](https://github.com/emmabostian/developer-portfolios).
- Attempted 138 distinct directory entries in Chromium. 120 returned enough homepage content for inspection; 18 did not.
- Excluded 14 of those 120 after inspecting their content: unrelated current professions, nonportfolio redirects, product/studio pages, mismatched identities, or obstructive interfaces. Selected 100 of the remaining 106 for the ledger.
- The candidate order was deterministic, using a URL hash and a fixed study seed. This avoids choosing only famous examples, but is still a convenience sample of directory-listed sites.
- Inspected rendered homepage text, headings, navigation, section IDs and evidence/contact links. Images, fonts and media were blocked in this scan. This is a **content-structure review**, not 100 complete visual, mobile, accessibility or performance audits.
- Supplemented the sample with direct reading of established portfolios, including Brittany Chiang, Tania Rascia, Cassidy Williams, Lee Robinson, Josh Comeau and Matt Farley. Those additional readings are not needed to reach the 100-site count.

No hiring results were measured. A common pattern does not establish that it produces more interviews.

## Findings that matter for this portfolio

### Different professional goals produce different structures

There is no universal section order. [Alan Khalili](https://www.alan-khalili.com/) foregrounds professional experience. [Davide Santangelo](https://www.davidesantangelo.com/) foregrounds selected engineering work. [Kevin Nguyen](https://kevinbkdev.vercel.app/) and [Ahmad Awais](https://ahmadawais.com/) organize their personal sites around writing. [Chambrin Alexandre](https://www.chambrin.dev/) presents services, delivery process and FAQs for freelance clients.

For Azrul, the stated goal is a mobile/backend developer position and the current site contains substantial independent projects without a dedicated professional employment history. That makes project evidence the most useful main destination after the introduction. A substantial verified internship or employment record could justify adding Experience before Projects later.

### Make technical evidence easy to inspect

In this sample, **95 of 100 inspected homepages contained a GitHub link**, and **78 contained a direct mailto link**. These are literal DOM link counts, not measures of credibility or contact availability; a contact form or plain-text email is not counted as a mailto link.

[Noel Young](https://noeljyoung.github.io/portfolio/) connects backend positioning to identifiable systems and integrations. [Gabriel Tekombo](https://gabrielthecode.com/) explains mobile work with product case studies and architecture-oriented detail. [Nishmika Ekanayaka](https://www.nishmika.me/) connects a junior developer profile to application examples, demos and source links. These illustrate why specific implementation evidence is useful for presenting engineering work.

For each selected project, show the user problem, personal contribution, implemented features, one technical decision, verification or limitations, and links to the code and demonstration. Use measured results only when they have actually been measured.

### Skills need relationships and priorities

[Noel Young](https://noeljyoung.github.io/portfolio/) groups backend, frontend, tools and architectural patterns. [Vishvaas Kumar](https://vishvaas.dev/) groups technologies by engineering layer. [Deepu Kunjumon](https://deepukunjumon.vercel.app/) separates backend, frontend, data and workflow. [Ditom Baroi Antu](https://ditom.me/) distinguishes tools in use from tools being explored.

The current portfolio presents 24 skills in one grid, spanning Flutter, backend frameworks, operating systems, security tools and embedded hardware. My recommendation is to prioritize the demonstrated mobile/backend stack, group it by purpose and link relevant capabilities to projects. Put security, IoT and other exploratory interests in a smaller supporting group. Add technologies from ResearchLens only where the developer can discuss their actual implementation and contribution confidently.

### Background can support the work without occupying many destinations

[Renan Silva](https://devrenansilva.netlify.app/) combines education and certificates. [Deepu Kunjumon](https://deepukunjumon.vercel.app/) combines education and certifications after selected work and experience. [Krupal Sanchaniya](https://krupal-portfolio.vercel.app/) distinguishes company experience from learning projects.

Azrul currently has one university education entry and eight training/certificate items. Grouping these under About & Background keeps them accessible while giving the main navigation fewer destinations. Course completion, training, participation and professional certification should be labeled accurately; they are different kinds of evidence.

## What is currently weakening the organization

These findings come from the local source, not from assumptions about other portfolios.

| Current element | Issue | Proposed treatment |
|---|---|---|
| Introduction | Long paragraph combines degree, specialization, job search, availability, workplace preferences and relocation. | Name, role, two short sentences, compact availability note and actions. Keep the greeting if desired. |
| Projects | 23 entries, including six featured entries and a second archive carousel, compete for attention. | Start with four substantial visible case studies in a static responsive layout. Offer additional projects and packages beneath them or through an archive link. |
| Skills | 24 equally weighted items span several career directions. | Group core mobile, backend/data and relevant AI skills; make other interests secondary. |
| About | Navbar label points to a section titled What I Build, consisting mainly of service/capability rows. | Create a genuine brief biography/background section; integrate demonstrated capabilities with skills and project evidence. |
| Education | A separate large section for one university entry. | Include as a compact background subsection. |
| Certificates & Training | Eight items receive a standalone top-level navigation destination. | Show the most relevant training first inside background, with remaining items expandable. |
| Collaboration | Repeats developer-role availability and contact calls already present elsewhere. | Merge useful availability details into Contact. |
| Contact | Already provides multiple useful contact paths. | Keep one clear section for email, form, LinkedIn, GitHub and role availability. |

The existing decision to put Projects near the top is appropriate for this goal. The larger problem is overlapping content, inconsistent section labels and insufficient priority within the work and skills sections.

## Proposed page structure

| Order | Section | Content |
|---|---|---|
| 1 | Introduction | Azrul Amaline; Flutter & Python Backend Developer, with AI research-tool work mentioned in the description; short positioning; View Projects and Download CV; contact/social links. |
| 2 | Selected Projects | ResearchLens AI, DevDroid, Lecturer App and one strong backend/integration project, subject to verifying implementation depth. Include real screenshots or clearly labeled concept previews and evidence links. |
| 3 | Technical Skills | Purpose-based groups for mobile, backend/data and demonstrated AI/retrieval work. Keep secondary security/IoT interests smaller. |
| 4 | About & Background | Short personal/engineering biography, PSTU degree, relevant training and any verified professional experience. |
| 5 | Contact | One invitation to discuss a developer role, direct email, optional form, GitHub/LinkedIn, availability and work-location preferences. |

Suggested main navigation: **Projects · Skills · About · Contact**, plus a **Download CV** action. The logo can return home. Education and training remain reachable through About rather than taking separate top-level navigation slots.

Within Projects, add a compact Open Source & Packages subsection for BanglaSpeech2Text and the reusable Flutter packages if there is enough documentation and implementation evidence. Keep the rest available through an archive or GitHub. Do not turn every repository into a featured case study.

For each featured project, distinguish implemented applications, prototypes, integration examples and concepts. The existing status labels such as Featured Repo and Public Repo mostly describe repository visibility or selection; more useful labels would describe the actual deliverable and its current state, after verification.

Do not add a blog, testimonials, employment claims, user counts or impact metrics merely because another portfolio has them. Include them when genuine material supports them.

This turn produced research and a proposed structure. It did not rearrange the portfolio components or overwrite the earlier ResearchLens and UI fixes.
