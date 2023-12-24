import { getNestedProperty } from "../json/get-nested-property.mjs";

/**
 * @function
 * @description Method used for generating distribution by the target property.
 * @param {object[]} array List of input objects
 * @param {string} dotNotation JSON notation of property that will be used for grouping the aggregated results.
 */
export function reduceByProp(array, dotNotation) {
  if (typeof dotNotation !== "string") {
    throw new Error("JSON dot notation is required.");
  }

  if (!dotNotation) {
    throw new Error("JSON dot notation is required.");
  }

  return (array || [])
    .reduce((agg, item) => {
      const itemPropVal = getNestedProperty(item, dotNotation);
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
    .map((i) => {
      return {
        ...i,
        pct: i.count > 0 && array.length > 0 ? i.count / array.length : 0,
      };
    })
    .sort((a, b) => {
      return a.lbl > b.lbl ? 1 : -1;
    });
}
