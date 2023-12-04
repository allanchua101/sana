import { printAsciiArt } from "../cli/print-ascii-art.mjs";

export function buildLogger(isSilentMode) {
  return {
    isLoggerEnabled: !isSilentMode,

    log(str) {
      if (!this.isLoggerEnabled) {
        return;
      }

      console.log(str);
    },

    async printHeader() {
      if (!this.isLoggerEnabled) {
        return;
      }

      const logo = await printAsciiArt("sana");

      console.log(logo);
    },
  };
}
