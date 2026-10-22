# Azrul Amaline Portfolio

A responsive personal portfolio for **Azrul Amaline — Flutter & Backend Developer | DevOps / Cloud Enthusiast**. The focus is cross-platform apps, Python APIs, Firebase integrations, and practical application deployment with Docker and Linux. AI, systems, and security practice support that core stack.

The site brings together profile details, education, certificates, skills, featured case studies, a filterable project archive, CV download, GitHub links, and contact options in a polished React experience.

## Preview

![Azrul Amaline portfolio preview](public/assets/brand/azrul-amaline-og.jpeg)

## Links

- Repository: [github.com/Azrul16/portfolio](https://github.com/Azrul16/portfolio)
- Live site: [azrul.is-a.dev](https://azrul.is-a.dev/)
- GitHub profile: [github.com/Azrul16](https://github.com/Azrul16)

## Highlights

- Responsive single-page portfolio built with React and Vite
- Smooth section reveals and interactive UI motion with Framer Motion
- Featured project case studies with challenge, outcome, role, features, and architecture details
- Filterable project archive for apps, packages, backend tools, AI projects, and integrations
- A compact responsive skills grid with the original icon cards and light/dark contrast fixes
- A responsive “From Code to Production” workflow covering development, checks, version control, containers, Linux, Nginx, and maintenance
- Education, certificates, downloadable CV, and contact sections
- SEO, sitemap, robots file, favicon, and social preview image assets
- Keyboard-friendly project cards and reduced-motion-aware styling support

## Tech Stack

- React 19
- Vite 7
- Framer Motion
- React Icons
- Native Intersection Observer for section hydration
- ESLint 9
- CSS organized alongside React components

## Project Structure

```text
portfolio/
  public/
    assets/
      brand/
      certificates/
    robots.txt
    sitemap.xml
  src/
    assets/
      CV.pdf
      images/
    components/
      Availability.jsx
      Certificates.jsx
      Contact.jsx
      Education.jsx
      DeliveryWorkflow.jsx
      Footer.jsx
      Navbar.jsx
      Profile.jsx
      Projects.jsx
      Skills.jsx
    App.jsx
    data/
      projects.jsx
    App.css
    index.css
    main.jsx
  index.html
  package.json
  vite.config.js
```

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Run lint checks:

```bash
npm run lint
```

## EmailJS Setup

The contact form sends messages through EmailJS. Create or update `.env` with:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

In the EmailJS template, use these variables: `from_name`, `from_email`, `reply_to`, `to_name`, and `message`.

## Available Scripts

| Command                   | Description                                                                       |
| ------------------------- | --------------------------------------------------------------------------------- |
| `npm run dev`             | Starts the Vite development server.                                               |
| `npm run build`           | Creates an optimized production build in `dist/`.                                 |
| `npm run preview`         | Serves the production build locally for review.                                   |
| `npm run lint`            | Runs ESLint across the project.                                                   |
| `npm run optimize:images` | Regenerates responsive portraits, logo sizes, favicons, and certificate previews. |

## Deployment

This is a static Vite application, so it can be deployed to Vercel, Netlify, GitHub Pages, Firebase Hosting, or any static hosting provider.

Recommended deployment settings:

- Build command: `npm run build`
- Output directory: `dist`
- Package manager: `npm`

After deploying, update the live site link in this README and the production URL metadata in the app if needed.

## Contact

- Email: [azrul.amaline16@gmail.com](mailto:azrul.amaline16@gmail.com)
- LinkedIn: [linkedin.com/in/azrul-amaline](https://www.linkedin.com/in/azrul-amaline/)
- GitHub: [github.com/Azrul16](https://github.com/Azrul16)
- X: [x.com/AAmaline9489](https://x.com/AAmaline9489)

## License

This portfolio is maintained by Azrul Amaline. Add a `LICENSE` file if you want to make reuse, modification, or distribution terms explicit.

## Audit and image assets

See [the website audit](WEBSITE_AUDIT.md) for verified fixes, test results, and remaining improvements.

Run `npm run optimize:images` after changing the source portrait, logo, or certificate PNGs. Commit the generated AVIF, WebP, and favicon assets. Original certificate PNGs remain available in the full-resolution viewer.

The canonical deployment is `https://azrul.is-a.dev/`; `public/CNAME`, the sitemap, and page metadata use this address. The Vite root base matches this custom domain.

## Production rendering and performance

`npm run build` runs Vite, then `scripts/prerender.mjs` renders the full portfolio into `dist/index.html`. Deploy the complete `dist` folder; no Node server is required. Development still uses ordinary React rendering.

The production page includes its content before JavaScript loads. The build removes unused CSS and inlines the remaining stylesheet. React attaches after the first paint, and below-the-fold sections hydrate as they approach the viewport or receive an interaction. Native `content-visibility` avoids unnecessary off-screen layout work. Keep section IDs stable because navigation and hydration use them. Certificate previews preload on card hover or focus rather than downloading every large preview on section entry.

The name splash starts directly from HTML and lasts 1 second total: the name stays visible over a static background logo for 0.6 seconds, followed by a 0.4-second logo expansion and reveal. It appears on every page load, including reloads, and the name matches the bold intro typography. There is no light sweep or flash. Reduced motion shows a static 0.6-second introduction without animation; interaction dismisses the splash early. The decorative name font is a locally hosted, licensed WOFF2 subset. EmailJS and confetti load when used.

A previous local simulated-mobile Lighthouse run scored 100 for performance, accessibility, best practices, and SEO. These historical lab results are recorded in the original audit; see `audits/expanded-positioning/` for verification of the expanded portfolio. Deployed results depend on hosting and device conditions.
