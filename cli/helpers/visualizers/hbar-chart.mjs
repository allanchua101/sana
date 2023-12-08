import ervy from "ervy";

export function buildHBarChart(data, options = {}) {
  const newOpts = {
    padding: 1,
    left: 1,
    ...options,
  };
  const asciiChart = ervy.bullet(data, newOpts);

  return asciiChart;
}
