// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Thomas Millar',
  tagline: 'Data Analyst building end-to-end data products.',
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
      {
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Thomas Millar',
      items: [
        {label: 'Projects', to: '/#projects', position: 'left'},
        {label: 'About', to: '/#about', position: 'left'},
        {label: 'CV', href: 'pathname:///CV.pdf', position: 'right'},
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
      copyright: `© ${new Date().getFullYear()} Thomas Millar`,
    },

    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },

    prism: {
      theme: prismThemes.dracula,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['powershell', 'sql'],
    },
  },
};

export default config;
