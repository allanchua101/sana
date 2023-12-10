import { printAsciiArt } from "../cli/print-ascii-art.mjs";
import chalk from "chalk";
const AWS_ORANGE = "#FF9900";
const AWS_NAV_BLUE = "#252F3E";

const awsOrange = chalk.hex(AWS_ORANGE);
const awsNavBlue = chalk.hex(AWS_NAV_BLUE);

export function buildLogger(isSilentMode) {
  return {
    isLoggerEnabled: !isSilentMode,

    log(str) {
      if (!this.isLoggerEnabled) {
        return;
      }

      console.log(str);
    },

    error(str) {
      console.error(chalk.redBright(str));
    },

    logResults(str) {
      console.log(chalk.greenBright(str));
    },

    logSeparator() {
      console.log(awsNavBlue("--------------------------------------------"));
    },

    async printHeader() {
      if (!this.isLoggerEnabled) {
        return;
      }

      const logo = await printAsciiArt("sana");

      console.log(awsOrange(logo));
      console.log("");
    },
  };
}
