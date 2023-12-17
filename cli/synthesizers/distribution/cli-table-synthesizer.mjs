import Table from "cli-table";
import { pluralizeNoun } from "#helpers/formatters/pluralize.mjs";

export function synthesizeCliDistributionTable(
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
    const data = distribution.map((d) => {
      const strPct = d.pct > 0 ? `${(d.pct * 100).toFixed(2)}%` : "0%";
      const label = Object.is(d.lbl, null) ? "null" : d.lbl;
      const noun = d.count > 1 ? pluralizeNoun(entity) : entity;

      return [label, `${d.count} ${noun}`, strPct];
    });

    const table = new Table({
      head: ["", entity, "%"],
      rows: data,
    });

    logger.logResults(table.toString());
  }

  if (!distribution || distribution.length === 0) {
    logger.logResults("No data to display");
  }

  logger.logSeparator();
}
