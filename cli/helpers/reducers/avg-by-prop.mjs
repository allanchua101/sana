import { getNestedProperty } from "../json/get-nested-property.mjs";

/**
 * @function getAverageByProp
 * @description Method used for retrieving the average value for the specified property
 * @param {object[]} array List of input objects
 * @param {string} dotNotation JSON notation path of property that will be used for average calculation.
 * @returns {number}
 */
export function getAverageByProp(array, dotNotation) {
  if (!Array.isArray(array)) {
    throw new Error("Invalid array");
  }

  if (typeof dotNotation !== "string") {
    throw new Error("JSON dot notation is required.");
  }

  if (!dotNotation) {
    throw new Error("JSON dot notation is required.");
  }

  if (array && array.length <= 0) {
    return 0;
  }

  const total = (array || []).reduce(
    (total, item) => total + (getNestedProperty(item, dotNotation) || 0),
    0
  );

  return total / array.length;
}
