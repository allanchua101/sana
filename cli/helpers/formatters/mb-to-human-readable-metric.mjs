/**
 * @function mbToHumanReadableMetric
 * @description Function used for formatting megabytes to human-readable metric.
 * @param {number} megabytes Number of megabytes
 * @returns {string} Human readable metric in string format.
 */
export function mbToHumanReadableMetric(megabytes) {
  if (megabytes === 0) return "0 MB";

  const sizes = ["MB", "GB", "TB"];
  const i = Math.floor(Math.log(megabytes) / Math.log(1024));
  const formattedSize = parseFloat((megabytes / Math.pow(1024, i)).toFixed(2));

  return `${formattedSize} ${sizes[i]}`;
}
