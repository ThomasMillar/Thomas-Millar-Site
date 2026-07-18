// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Thomas Millar',
  tagline: 'Data Analyst transitioning into Data Engineering. Building data platforms, ETL pipelines and analytics solutions.',
  favicon: 'img/favicon.ico',

  url: 'https://thomasmillar.co.uk',
  baseUrl: '/',

  organizationName: 'YOUR_GITHUB_USERNAME',
  projectName: 'Thomas-Millar-Site',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.ts',
        },

        blog: {
          showReadingTime: true,
          blogTitle: 'Engineering Blog',
          blogDescription:
            'Data engineering, Python, SQL and analytics projects.',
        },

        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Thomas Millar',
        items: [
          {
            label: 'Projects',
            to: '/docs/projects',
            position: 'left',
          },
          {
            label: 'Blog',
            to: '/blog',
            position: 'left',
          },
          {
            label: 'CV',
            href: '/CV.pdf',
            position: 'right',
          },
          {
            label: 'GitHub',
            href: 'https://github.com/YOUR_USERNAME',
            position: 'right',
          },
          {
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/in/YOUR_PROFILE',
            position: 'right',
          },
        ],
      },

      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Thomas Millar`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['powershell', 'sql'],
      },

      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
    }),

  markdown: {
    mermaid: true,
  },

  themes: [
    '@docusaurus/theme-mermaid',
  ],
};

export default config;