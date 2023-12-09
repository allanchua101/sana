import { getNestedProperty } from "../json/get-nested-property.mjs";

/**
 * @function getAverageByProp
 * @description Method used for retrieving the average value for the specified property
 * @param {object[]} array List of input objects
 * @param {string} property JSON notation path of property that will be used for average calculation.
 * @returns {number}
 */
export function getAverageByProp(array, property) {
  if (!Array.isArray(array)) {
    throw new Error("Invalid array");
  }

  if (typeof property !== "string") {
    throw new Error("Property input should be a string.");
  }

  if (array && array.length <= 0) {
    return 0;
  }

  const total = (array || [])
    .map((i) => getNestedProperty(i, property))
    .reduce((total, item) => total + item, 0);

  return total / array.length;
}
