import { getNestedProperty } from "../json/get-nested-property.mjs";

/**
 * @function getMaxByProp
 * @description Method used for retrieving the max value for the specified property
 * @param {object[]} array List of input objects
 * @param {string} property JSON notation path of property that will be used for average calculation.
 * @returns {number}
 */
export function getMaxByProp(array, propertyKey) {
  if (!Array.isArray(array)) {
    throw new Error("Invalid array");
  }

  if (typeof propertyKey !== "string") {
    throw new Error("propertyKey key should be a string.");
  }

  if (array && array.length <= 0) {
    return 0;
  }

  const maxValue = (array || []).reduce((max, item) => {
    const itemVal = getNestedProperty(item, propertyKey);

    if (itemVal > max) {
      return itemVal;
    }

    return max;
  }, 0);

  return maxValue;
}
