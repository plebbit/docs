import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  learnSidebar: [
    {
      type: 'doc',
      id: 'learn/intro',
      label: 'Welcome to Plebbit'
    },
    {
      type: 'category',
      label: 'Local Node',
      link: {
        type: 'generated-index',
        title: 'Local Node'
      },
      items: [
        'learn/local-node/how-to-run-a-node',
        'learn/local-node/challenges',
        'learn/local-node/monetizing-your-sub'
      ]
    },
    {
      type: 'category',
      label: 'Plebbit Clients',
      link: {
        type: 'generated-index',
        title: 'Plebbit Clients'
      },
      items: [
        {
          type: 'category',
          label: 'Plebbit-cli',
          items: [
            'learn/clients/plebbit-cli/what-is-plebbit-cli',
            'learn/clients/plebbit-cli/create-a-subplebbit'
          ]
        },
        {
          type: 'category',
          label: 'Seedit',
          items: [
            'learn/clients/seedit/what-is-seedit',
            'learn/clients/seedit/create-a-community'
          ]
        },
        {
          type: 'category',
          label: 'Plebchan',
          items: [
            'learn/clients/plebchan/what-is-plebchan',
            'learn/clients/plebchan/create-a-board'
          ]
        },
        {
          type: 'category',
          label: 'Plebones',
          items: [
            'learn/clients/plebones/what-is-plebones',
            'learn/clients/plebones/create-a-subplebbit'
          ]
        }
      ]
    },
    {
      type: 'doc',
      id: 'learn/roadmap',
      label: 'Roadmap'
    }
  ],
  buildSidebar: [
    {
      type: 'doc',
      id: 'build/getting-started',
      label: 'Getting Started'
    }
  ],
  faqSidebar: [
    {
      type: 'doc',
      id: 'faq/general',
      label: 'General FAQ'
    }
  ]
};

export default sidebars;
