import { getNestedProperty } from "../json/get-nested-property.mjs";

/**
 * @function
 * @description Method used for generating distribution by the provided property
 * @param {object[]} array List of input objects
 * @param {string} property JSON notation path of property that will be used for grouping the aggregated results.
 */
export function reduceByProp(array, property) {
  return (array || [])
    .reduce((agg, item) => {
      const itemPropVal = getNestedProperty(item, property);
      const existingIndex = agg.findIndex((f) => f.lbl === itemPropVal);

      if (existingIndex > -1) {
        agg[existingIndex].count = agg[existingIndex].count + 1;
      }

      if (existingIndex === -1) {
        agg.push({
          lbl: itemPropVal,
          count: 1,
        });
      }

      return agg;
    }, [])
    .sort((a, b) => {
      return a.lbl > b.lbl ? 1 : -1;
    });
}
