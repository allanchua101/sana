export function synthesizeCliDistributionText(
  label,
  entity,
  distribution,
  logger
) {
  if (typeof label !== "string") {
    throw new Error("Label should be string");
  }

  if (!Array.isArray(distribution)) {
    throw new Error("Distribution should be an array.");
  }

  if (typeof logger === "undefined") {
    throw new Error("Please provide a logger");
  }

  logger.logResults(label);

  if (distribution) {
    distribution.forEach((d) => {
      const strPct = d.pct > 0 ? `${(d.pct * 100).toFixed(2)}%` : "0%";

      logger.logResults(`${d.lbl}: ${d.count} ${entity || ""} (${strPct})`);
    });
  }

  if (!distribution || distribution.length === 0) {
    logger.logResults("No data to display");
  }

  logger.logSeparator();
}
