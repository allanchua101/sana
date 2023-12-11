import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "@serverless-ninja/sana",
  description:
    "A command-line interface for analyzing an AWS account's serverless resources",
  base: "/sana/",
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
          { text: "Installation", link: "/installation" },
          { text: "Get Started", link: "/get-started" },
          { text: "Global Flags", link: "/global-flags" },
          { text: "Full Service Analysis", link: "/full-service-analysis" },
          {
            text: "Lambda",
            link: "/lambda",
            items: [
              { text: "lambda-count", link: "/lambda/lambda-count" },
              {
                text: "lambda-avg-ephemeral-storage-size",
                link: "/lambda/lambda-avg-ephemeral-storage-size",
              },
            ],
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/allanchua101/sana" },
    ],
  },
});
