import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Plebbit docs",
  tagline: "A decentralized P2P social media protocol",
  favicon:
    "https://raw.githubusercontent.com/plebbit/assets/master/logo-square.svg",

  // Set the production url of your site here
  url: "https://plebbit.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/plebbit-docs/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "plebbit", // Usually your GitHub org/user name.
  projectName: "plebbit-docs", // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: (arg) => {
            return `https://github.com/plebbit/plebbit-docs/blob/master/docs/${arg.docPath}`;
          },
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Plebbit",
      logo: {
        alt: "Plebbit Logo",
        src: "https://raw.githubusercontent.com/plebbit/assets/master/logo-square.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        {
          href: "https://github.com/plebbit",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Landing page",
              href: "https://plebbit.com",
            },
            {
              label: "Discord",
              href: "https://discord.gg/E7ejphwzGW",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/getplebbit",
            },
            {
              label: "Telegram",
              href: "https://t.me/plebbit",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/plebbit",
            },
          ],
        },
      ],
      copyright: `All of Plebbit repos are under GPL V2 license`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
