import { bar } from "ervy";

export function displayBarChart(data, options = {}) {
  const asciiChart = bar(data, options);

  return asciiChart;
}
