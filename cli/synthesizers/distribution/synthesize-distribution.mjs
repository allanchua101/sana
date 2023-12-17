import { displayDistributionChart } from "#helpers/visualizers/chart.mjs";
import { synthesizeCliDistributionText } from "#synthesizers/distribution/cli-text-synthesizer.mjs";
import { synthesizeCliDistributionTable } from "#synthesizers/distribution/cli-table-synthesizer.mjs";

export function synthesizeDistribution(params) {
  const cleanInput = {
    entity: "",
    ...params,
  };
  const {
    title,
    distribution,
    array,
    logger,
    entity,
    output = "text",
  } = cleanInput;

  if (output === "chart") {
    displayDistributionChart({
      title,
      distribution,
      array,
      logger,
    });

    return;
  }

  if (output === "cli-table") {
    synthesizeCliDistributionTable(title, entity, distribution, logger);

    return;
  }

  if (output === "text") {
    synthesizeCliDistributionText(title, entity, distribution, logger);
  }

  return;
}
