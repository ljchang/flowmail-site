import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/download',
        'getting-started/installation',
        'getting-started/connecting-accounts',
        'getting-started/quick-tour',
      ],
    },
    {
      type: 'category',
      label: 'Features',
      items: [
        'features/email-triage',
        'features/cards',
        'features/focus-queue',
        'features/plans',
        'features/ai-drafting',
        'features/memory',
        'features/people',
        'features/learning',
        'features/keyboard-shortcuts',
      ],
    },
    {
      type: 'category',
      label: 'Security & Privacy',
      items: [
        'security/overview',
        'security/technical-details',
      ],
    },
    'changelog',
  ],
};

export default sidebars;
