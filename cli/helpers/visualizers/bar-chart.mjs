import { bar } from "ervy";

export function buildBarChart(data, options = {}) {
  const asciiChart = bar(data, options);

  return asciiChart;
}
