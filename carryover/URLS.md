# Carryover content and existing URLs

The new portfolio should continue serving these pages at the same paths on
`https://ricardo-camacho.dev`:

| URL | Source file |
| --- | --- |
| https://ricardo-camacho.dev/apps | `public/apps/index.html` |
| https://ricardo-camacho.dev/guildway | `public/guildway/index.html` |
| https://ricardo-camacho.dev/guildway/privacy | `public/guildway/privacy/index.html` |
| https://ricardo-camacho.dev/guildway/support | `public/guildway/support/index.html` |
| https://ricardo-camacho.dev/guildway/content-policy | `public/guildway/content-policy/index.html` |

These pages use `public/guildway/legal.css` and `public/logo.svg`. The custom
domain is recorded in `public/CNAME`. Project information is in
`src/assets/projects.json`; its image URLs point to externally hosted media.

Paths in this document are relative to this `carryover/` directory. Move the
files into the new site's static public directory, or reproduce these routes
in its framework, when bootstrapping the new portfolio.
