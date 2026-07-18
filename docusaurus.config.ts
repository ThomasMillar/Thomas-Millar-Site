// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Thomas Millar',
  tagline:
    'Data Analyst specialising in analytics, reporting and data solutions. Building towards Data Engineering through Python, SQL and data platforms.',

  favicon: 'img/favicon.ico',

  url: 'https://thomasmillar.co.uk',
  baseUrl: '/',

  organizationName: 'ThomasMillar',
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
          blogTitle: 'Data & Analytics Blog',
          blogDescription:
            'Projects, tutorials and insights covering data analytics, Python, SQL and my journey towards data engineering.',
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
            label: 'Portfolio',
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
            href: 'https://github.com/ThomasMillar',
            position: 'right',
          },

          {
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/in/thomas-millar-00a896234/',
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