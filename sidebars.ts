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
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
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
        'local-node/how-to-run-a-node',
        'local-node/challenges',
        'local-node/monetizing-your-sub'
      ]
    },
    {
      type: 'category',
      label: 'Frontends',
      link: {
        type: 'generated-index',
        title: 'Frontends'
      },
      items: [
        'Frontends/seedit',
        'Frontends/plebones',
        'Frontends/plebchan'
      ]
    },
    {
      type: 'doc',
      id: 'roadmap',
      label: 'Roadmap'
    }
  ]
};

export default sidebars;
