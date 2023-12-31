import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "@serverless-ninja/sana",
  description:
    "A command-line interface for analyzing an AWS account's serverless resources",
  base: "/sana/",
  themeConfig: {
    search: {
      provider: "local",
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Installation", link: "/installation" },
      { text: "Get Started", link: "/get-started" },
    ],

    sidebar: [
      { text: "Home", link: "/" },
      {
        text: "Intro to sana",
        items: [
          { text: "Installation", link: "/installation" },
          { text: "Get Started", link: "/get-started" },
          { text: "Global Flags", link: "/global-flags" },
          { text: "Full Service Analysis", link: "/full-service-analysis" },
        ],
      },
      {
        text: "CLI Reference",
        items: [
          {
            text: "sana lambda",
            link: "/lambda",
            collapsed: true,
            items: [
              // Aliases
              {
                text: "Aliases",
                collapsed: true,
                items: [
                  {
                    text: "lambda-logging-kpis",
                    link: "/lambda/aliases/logging-kpis",
                  },
                  {
                    text: "lambda-vpc-kpis",
                    link: "/lambda/aliases/vpc-kpis",
                  },
                ],
              },
              // Aggregation
              {
                text: "Aggregation",
                collapsed: true,
                items: [
                  {
                    text: "lambda-avg-ephemeral-storage-size",
                    link: "/lambda/aggregation/lambda-avg-ephemeral-storage-size",
                  },
                  {
                    text: "lambda-avg-memory-size",
                    link: "/lambda/aggregation/lambda-avg-memory-size",
                  },
                  {
                    text: "lambda-avg-package-size",
                    link: "/lambda/aggregation/lambda-avg-package-size",
                  },
                  {
                    text: "lambda-avg-timeout",
                    link: "/lambda/aggregation/lambda-avg-timeout",
                  },
                  {
                    text: "lambda-count",
                    link: "/lambda/aggregation/lambda-count",
                  },
                  {
                    text: "lambda-max-package-size",
                    link: "/lambda/aggregation/lambda-max-package-size",
                  },
                ],
              },
              // Distribution Analysis
              {
                text: "Distribution Analysis",
                collapsed: true,
                items: [
                  {
                    text: "lambda-app-log-lvl-distribution",
                    link: "/lambda/distribution/lambda-app-log-lvl-distribution",
                  },
                  {
                    text: "lambda-architecture-distribution",
                    link: "/lambda/distribution/lambda-architecture-distribution",
                  },
                  {
                    text: "lambda-attached-layer-count-distribution",
                    link: "/lambda/distribution/lambda-attached-layer-count-distribution",
                  },
                  {
                    text: "lambda-dlq-distribution",
                    link: "/lambda/distribution/lambda-dlq-distribution",
                  },
                  {
                    text: "lambda-ephemeral-storage-distribution",
                    link: "/lambda/distribution/lambda-ephemeral-storage-distribution",
                  },
                  {
                    text: "lambda-log-format-distribution",
                    link: "/lambda/distribution/lambda-log-format-distribution",
                  },
                  {
                    text: "lambda-memory-distribution",
                    link: "/lambda/distribution/lambda-memory-distribution",
                  },
                  {
                    text: "lambda-package-type-distribution",
                    link: "/lambda/distribution/lambda-package-type-distribution",
                  },
                  {
                    text: "lambda-region-distribution",
                    link: "/lambda/distribution/lambda-region-distribution",
                  },
                  {
                    text: "lambda-runtime-distribution",
                    link: "/lambda/distribution/lambda-runtime-distribution",
                  },
                  {
                    text: "lambda-security-group-distribution",
                    link: "/lambda/distribution/lambda-security-group-distribution",
                  },
                  {
                    text: "lambda-sys-log-lvl-distribution",
                    link: "/lambda/distribution/lambda-sys-log-lvl-distribution",
                  },
                  {
                    text: "lambda-snapstart-status-distribution",
                    link: "/lambda/distribution/lambda-snapstart-status-distribution",
                  },
                  {
                    text: "lambda-tracing-mode-distribution",
                    link: "/lambda/distribution/lambda-tracing-mode-distribution",
                  },
                  {
                    text: "lambda-vpc-distribution",
                    link: "/lambda/distribution/lambda-vpc-distribution",
                  },
                ],
              },
            ],
          },
          {
            text: "sana ddb",
            link: "/dynamodb",
            collapsed: true,
            items: [
              {
                text: "Aggregation",
                collapsed: true,
                items: [
                  {
                    text: "ddb-count",
                    link: "/dynamodb/aggregation/ddb-count",
                  },
                ],
              },
              {
                text: "Distribution Analysis",
                collapsed: true,
                items: [
                  {
                    text: "ddb-billing-mode-distribution",
                    link: "/dynamodb/distribution/ddb-billing-mode-distribution",
                  },
                  {
                    text: "ddb-region-distribution",
                    link: "/dynamodb/distribution/ddb-region-distribution",
                  },
                  {
                    text: "ddb-delete-protection-distribution",
                    link: "/dynamodb/distribution/ddb-delete-protection-distribution",
                  },
                  {
                    text: "ddb-stream-status-distribution",
                    link: "/dynamodb/distribution/ddb-stream-status-distribution",
                  },
                  {
                    text: "ddb-table-status-distribution",
                    link: "/dynamodb/distribution/ddb-table-status-distribution",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/allanchua101/sana" },
    ],

    lastUpdated: {
      text: "Updated at",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },

    footer: {
      message: "Released under the Apache 2.0 License.",
      copyright: "Copyright © 2023-present Allan Chua",
    },
  },
});
