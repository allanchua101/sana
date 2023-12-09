import { buildHBarChart } from "./hbar-chart.mjs";
import { buildBarChart } from "./bar-chart.mjs";
const BAR_CHART_TYPE = "bar";
const HBAR_CHART_TYPE = "hbar";
const CHART_STRATEGIES = [
  { key: HBAR_CHART_TYPE, execute: buildHBarChart },
  { key: BAR_CHART_TYPE, execute: buildBarChart },
];

export function displayDistributionChart(options = {}) {
  const cleansedOpts = {
    distribution: [],
    array: [],
    title: "",
    logger: null,
    chartType: HBAR_CHART_TYPE,
    ...options,
  };
  const { distribution, array, logger, title, chartType } = cleansedOpts;
  const chartData = (distribution || []).map((d) => {
    const strPct = d.pct > 0 ? `${(d.pct * 100).toFixed(2)}%` : "0%";

    return {
      key: `${d.lbl} (${d.count}/${array.length} ${strPct})`,
      value: d.count,
    };
  });

  const strategy = CHART_STRATEGIES.find((cs) => cs.key === chartType);

  if (!strategy) {
    throw new Error("Unsupported charting strategy.");
  }

  logger.logResults("");
  logger.logResults("");
  logger.logResults(title);
  logger.logResults("");
  logger.logResults("");

  if (!chartData || chartData.length <= 0) {
    logger.logResults("No DynamoDB tables found.");
    logger.logResults("");
    return;
  }

  logger.log(strategy.execute(chartData));
}
