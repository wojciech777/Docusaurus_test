// @ts-check
// Build variant for browsing the output through a static file server that serves
// the project directory, such as the built-in web server in IntelliJ IDEA / WebStorm
// (http://localhost:63342/<project-name>/<path-inside-project>).
//
// Docusaurus resolves assets and routes against an absolute `baseUrl`, so the output
// only works under the URL prefix it was built for. This config builds for the
// `build-local/` directory inside a project named `Docusaurus_test`; `npm run build`
// keeps producing the deployable output with `baseUrl: '/'`.

import baseConfig from './docusaurus.config.js';

/** @type {import('@docusaurus/types').Config} */
const localConfig = {
  ...baseConfig,
  baseUrl: '/Docusaurus_test/build-local/',
  // Directory-style URLs, so a plain file server can resolve every route to an index.html.
  trailingSlash: true,
};

export default localConfig;
