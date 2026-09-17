# Ricardo Camacho Mireles — portfolio

React and Vite portfolio website featuring five projects and Guildway's public
support and policy pages.

## Development

Use Node 24 (`nvm use`), then:

```sh
npm install
npm run dev
```

Run `npm run build` to produce the static site in `dist/`, and `npm run lint`
to check the React source.

Project content lives in `src/data/projects.json`. The Guildway pages and their
existing URLs live in `public/apps/` and `public/guildway/`; Vite copies them to
`dist/` during the build. Original copies and a URL map are in `carryover/`.
The Vite config serves those same paths during local development and preview.
