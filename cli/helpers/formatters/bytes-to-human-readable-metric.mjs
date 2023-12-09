/**
 * @function bytesToHumanReadableMetric
 * @description Function used for formatting bytes to human-readable metric.
 * @param {number} bytes Number of bytes
 * @returns {string} Human readable metric in string format.
 */
export function bytesToHumanReadableMetric(bytes) {
  if (bytes === 0) return "0 Bytes";

  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  const formattedSize = parseFloat((bytes / Math.pow(1024, i)).toFixed(2));

  return `${formattedSize} ${sizes[i]}`;
}
