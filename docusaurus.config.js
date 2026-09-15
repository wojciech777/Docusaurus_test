// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Orion Platform 4.2 LTS',
  tagline: 'Orders, payments, and events for stores and marketplaces',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.orion.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'wojciech777',
  projectName: 'Docusaurus_test',

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang.
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },

  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/wojciech777/Docusaurus_test/edit/master/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Orion Platform',
        logo: {
          alt: 'Orion Platform Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            to: '/docs/changelog',
            label: 'Changelog',
            position: 'left',
          },
          {
            href: 'https://github.com/wojciech777/Docusaurus_test',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting started',
                to: '/docs/getting-started/',
              },
              {
                label: 'Guides',
                to: '/docs/guides/',
              },
              {
                label: 'API',
                to: '/docs/api/',
              },
              {
                label: 'Operations',
                to: '/docs/operations/',
              },
            ],
          },
          {
            title: 'Help',
            items: [
              {
                label: 'FAQ',
                to: '/docs/faq',
              },
              {
                label: 'Changelog',
                to: '/docs/changelog',
              },
              {
                label: 'Support',
                to: '/docs/support',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/wojciech777/Docusaurus_test',
              },
              {
                label: 'Support portal',
                href: 'https://support.nimbus.example.com',
              },
              {
                label: 'Service status',
                href: 'https://status.nimbus.example.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Nimbus Software sp. z o.o. Entirely fictional content. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: [
          'java',
          'kotlin',
          'ini',
          'toml',
          'powershell',
          'http',
          'promql',
        ],
      },
    }),
};

export default config;
