import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "@serverless-ninja/sana",
  description:
    "A command-line interface for analyzing an AWS account's serverless resources",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Get Started", link: "/get-started" },
    ],

    sidebar: [
      {
        text: "Intro to sana",
        items: [
          { text: "Get Started", link: "/get-started" },
          { text: "Global Flags", link: "/global-flags" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/allanchua101/sana" },
    ],
  },
});
