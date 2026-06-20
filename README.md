# Azrul Amaline Portfolio

A responsive personal portfolio for **Azrul Amaline**, a software developer from Bangladesh focused on Flutter mobile apps, reusable Dart packages, backend utilities, AI experiments, cybersecurity practice, and practical product-oriented software.

The site brings together profile details, education, certificates, skills, featured case studies, a searchable project archive, CV download, GitHub links, and contact options in a polished React experience.

## Preview

![Azrul Amaline portfolio preview](public/assets/brand/azrul-amaline-og.jpeg)

## Links

- Repository: [github.com/Azrul16/portfolio](https://github.com/Azrul16/portfolio)
- Live site: Add your deployment URL here after publishing.
- GitHub profile: [github.com/Azrul16](https://github.com/Azrul16)

## Highlights

- Responsive single-page portfolio built with React and Vite
- Smooth section reveals and interactive UI motion with Framer Motion
- Featured project case studies with challenge, outcome, role, features, and architecture details
- Searchable and filterable project archive for apps, packages, backend tools, AI projects, and integrations
- Skills section covering Flutter, Python, Firebase, backend frameworks, networking, cybersecurity tools, AI/ML, and IoT
- Education, certificates, downloadable CV, and contact sections
- SEO, sitemap, robots file, favicon, and social preview image assets
- Keyboard-friendly project cards and reduced-motion-aware styling support

## Tech Stack

- React 19
- Vite 7
- React Router 7
- Framer Motion
- React Icons
- React Intersection Observer
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
      About.jsx
      Certificates.jsx
      Contact.jsx
      Education.jsx
      Footer.jsx
      Navbar.jsx
      Profile.jsx
      Projects.jsx
      Skills.jsx
    App.jsx
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

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server. |
| `npm run build` | Creates an optimized production build in `dist/`. |
| `npm run preview` | Serves the production build locally for review. |
| `npm run lint` | Runs ESLint across the project. |

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
