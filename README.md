# Neeraj Saini Portfolio

Personal portfolio built with React, Vite, Tailwind CSS, Framer Motion and Lucide icons.

## Run locally

```sh
npm install
npm run dev
```

## Personalize before publishing

Your email, phone, GitHub and LinkedIn details are set from the supplied resume. Your resume is included at `public/resume.pdf`. Add demo and repository URLs for projects where they are not yet known in `src/data/site.js`; until then, those project cards show a clear “link to be added” note.

The contact form validates its fields and opens a prefilled email using the configured address. It does not store or submit data to a server. To use Formspree, EmailJS or a backend later, replace the submit handler in `src/components/Contact.jsx`.
