# Orion Platform documentation (Docusaurus example)

An example, **entirely fictional** documentation set for the product "Orion
Platform 4.2 LTS", built as a static site with
[Docusaurus](https://docusaurus.io/) and its classic theme.

The set contains 56 pages across four navigation levels and uses the MDX
features typical for this kind of documentation: admonitions, collapsible
`<details>` blocks, synchronized content tabs, tables, task lists, footnotes,
code line highlighting, and Mermaid diagrams.

## Structure

```text
.
├── docusaurus.config.js    # site, theme, and plugin configuration
├── sidebars.js             # the navigation tree (4 levels)
├── package.json            # dependencies and scripts
├── .github/workflows/
│   └── docs.yml            # builds and publishes to GitHub Pages
├── src/
│   ├── components/         # landing page sections
│   ├── css/custom.css      # Infima theme variables
│   └── pages/index.js      # landing page at /
├── static/img/             # favicon, logo, social card, illustrations
└── docs/                   # documentation sources in MDX, served under /docs
    ├── index.mdx
    ├── faq.mdx
    ├── changelog.mdx
    ├── support.mdx
    ├── introduction/
    ├── getting-started/
    │   ├── installation/
    │   │   └── kubernetes/
    │   └── configuration/
    ├── guides/
    │   ├── authentication/
    │   ├── events/
    │   └── migrations/
    ├── api/
    │   ├── rest/
    │   │   └── resources/
    │   ├── webhooks/
    │   └── sdk/
    └── operations/
        ├── monitoring/
        └── runbooks/
```

## Requirements

- Node.js 20 or newer (verified on 22 LTS)
- `npm` (ships with Node.js)

No other toolchain is needed. Docusaurus is a Node.js application, so the same
commands work on Linux, macOS, and Windows.

## Installing dependencies

```bash
npm ci
```

Use `npm install` instead when you intentionally want to update
`package-lock.json`.

## Local development

```bash
npm start
```

The documentation is served at <http://localhost:3000> with hot reload after
every file save. Useful variants:

```bash
npm start -- --port 8000 --host 0.0.0.0   # different address and port
npm start -- --open                       # open the browser right away
```

## Building the static site

```bash
npm run build
```

The output lands in the `build/` directory, ready to be served by any static
file server. The build fails on a broken internal link or a broken Markdown
link, because `onBrokenLinks` and `markdown.hooks.onBrokenMarkdownLinks` are
both set to `throw` in `docusaurus.config.js`.

To preview the production build locally:

```bash
npm run serve
```

`npm start` is a development server and is not meant for production.

## Publishing

`.github/workflows/docs.yml` builds the site and publishes it to GitHub Pages on
every push to `master`. GitHub Pages for the repository has to be configured to
publish using GitHub Actions.

For any other host, run `npm run build` and serve the resulting `build/`
directory as static files.

## Theme: what is configured

`docusaurus.config.js` uses the `classic` preset with its default appearance.
This project additionally configures:

- an English interface (`i18n.defaultLocale = "en"`) and English search,
- automatic light/dark mode that follows the system setting
  (`colorMode.respectPrefersColorScheme`),
- the documentation under `/docs` with a landing page at `/`, and no blog
  (`blog: false`),
- an explicit navigation tree in `sidebars.js`, collapsed to the first level,
  where every section has its own overview page,
- Mermaid diagram rendering (`@docusaurus/theme-mermaid`),
- Prism syntax highlighting extended with Java, Kotlin, INI, TOML, PowerShell,
  HTTP, and PromQL,
- "Edit this page" links pointing at the `master` branch on GitHub.

## See also

- Docusaurus documentation: <https://docusaurus.io/docs>
- MDX and Markdown features: <https://docusaurus.io/docs/markdown-features>
