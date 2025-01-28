// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");

/** @type {import('@docusaurus/types').Config} */
const config = {
  // Change to Site title
  title: "Green Software Patterns",
  // Change to site description
  tagline:
    "An online open-source database of green software patterns reviewed and curated by the Green Software Foundation",
  // Change to site url
  url: "https://patterns.greensoftware.foundation/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Green-Software-Foundation",
  // Change to GitHub repo name.
  projectName: "green-software-patterns",
  deploymentBranch: "gh-pages",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          // Change this to your repo.
          editUrl:
            "https://github.com/Green-Software-Foundation/patterns/edit/main/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-G3P4S2WSTC",
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        // Change to project name
        title: "Green Software Patterns",
        logo: {
          alt: "Green Software Patterns Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            href: "https://patterns.greensoftware.foundation/guide/#how-to-propose-a-new-pattern-or-a-change-to-a-pattern",
            position: "right",
            label: "Add/Edit a pattern",
          },
          {
            href: "https://greensoftware.foundation/",
            position: "right",
            label: "a Green Software Foundation project",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Links",
            items: [
              {
                label: "Github",
                href: "https://github.com/Green-Software-Foundation/green-software-patterns/",
              },
              {
                label: "Website",
                href: "https://patterns.greensoftware.foundation",
              },
            ],
          },
          {
            title: "LEGAL",
            items: [
              {
                label: "Trademark Policy",
                href: "https://greensoftware.foundation/policy/trademark",
              },
              {
                label: "Terms and Privacy Policy",
                href: "https://greensoftware.foundation/policy/terms",
              },
            ],
          },
          {
            title: "GSF Info",
            items: [
              {
                label: "Green Software Foundation",
                href: "https://greensoftware.foundation",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/gsfcommunity",
              },
              {
                label: "Linkedin",
                href: "https://www.linkedin.com/company/green-software-foundation/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Joint Development Foundation Projects, LLC, Green Software Foundation Series`,
      },
      prism: {
        theme: lightCodeTheme,
      },
      colorMode: {
        disableSwitch: true,
        defaultMode: "light",
      },
      metadata: [{
        name: "twitter:card",
        content: "summary",
      },
      {
        name: "twitter:site",
        content: "@gsfcommunity",
      },
      {
        name: "twitter:title",
        content: "Green Software Patterns",
      },
      {
        name: "twitter:description",
        content: "An online open-source database of green software patterns reviewed and curated by the Green Software Foundation",
      },
      {
        name: "twitter:image",
        content: "https://patterns.greensoftware.foundation/img/og-image.png",
      },
      {
        name: "twitter:creator",
        content: "@gsfcommunity",
      },
      {
        name: "og:title",
        content: "Green Software Patterns",
      },
      {
        name: "og:description",
        content: "An online open-source database of green software patterns reviewed and curated by the Green Software Foundation",
      },
      {
        name: "og:image",
        content: "https://patterns.greensoftware.foundation/img/og-image.png",
      },
      {
        name: "og:url",
        content: "https://patterns.greensoftware.foundation/",
      },
      {
        name: "og:site_name",
        content: "Green Software Patterns",
      },
      {
        name: "og:type",
        content: "website",
      },

      ]
    }),

  plugins: [
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 90,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
  ],
};

module.exports = config;
