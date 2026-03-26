import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'FlowMail',
  tagline: 'Email management that thinks like you do',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://ljchang.github.io',
  baseUrl: '/flowmail-site/',

  organizationName: 'ljchang',
  projectName: 'flowmail-site',

  onBrokenLinks: 'throw',

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'anonymous',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
      },
    },
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/ljchang/flowmail-site/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    announcementBar: {
      id: 'beta',
      content: 'FlowMail is currently in beta. Some features and integrations are still being finalized.',
      backgroundColor: '#1e293b',
      textColor: '#f59e0b',
      isCloseable: true,
    },
    image: 'img/flowmail-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'FlowMail',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/docs/changelog',
          label: 'Changelog',
          position: 'left',
        },
        {
          to: '/docs/getting-started/download',
          label: 'Download',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {label: 'Getting Started', to: '/docs/getting-started/installation'},
            {label: 'Features', to: '/docs/features/email-triage'},
            {label: 'Security & Privacy', to: '/docs/security/overview'},
          ],
        },
        {
          title: 'More',
          items: [
            {label: 'Changelog', to: '/docs/changelog'},
            {label: 'GitHub', href: 'https://github.com/ljchang/flowmail-site'},
          ],
        },
      ],
      copyright: `Copyright \u00a9 ${new Date().getFullYear()} FlowMail`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
