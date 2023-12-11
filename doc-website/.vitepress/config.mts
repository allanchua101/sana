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
            text: "sana lambda",
            link: "/lambda",
            items: [
              { text: "lambda-count", link: "/lambda/lambda-count" },
              {
                text: "Averaging",
                items: [
                  {
                    text: "lambda-avg-ephemeral-storage-size",
                    link: "/lambda/averaging/lambda-avg-ephemeral-storage-size",
                  },
                  {
                    text: "lambda-avg-memory-size",
                    link: "/lambda/averaging/lambda-avg-memory-size",
                  },
                  {
                    text: "lambda-avg-package-size",
                    link: "/lambda/averaging/lambda-avg-package-size",
                  },
                  {
                    text: "lambda-avg-timeout",
                    link: "/lambda/averaging/lambda-avg-timeout",
                  },
                ],
              },
              {
                text: "Distribution Analysis",
                items: [],
              },
              // { text: "", link: "/lambda/" },
              // { text: "", link: "/lambda/" },
              // { text: "", link: "/lambda/" },
              // { text: "", link: "/lambda/" },
              // { text: "", link: "/lambda/" },
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
