import { getNestedProperty } from "../json/get-nested-property.mjs";

export function reduceByItemInArrayProp(array, arrayProp) {
  return (array || [])
    .reduce((agg, item) => {
      const itemArray = getNestedProperty(item, arrayProp) || [];

      for (let i = 0, len = itemArray.length; i < len; i++) {
        const tag = itemArray[i];
        const existingIndex = agg.findIndex((f) => f.lbl === tag);

        if (existingIndex > -1) {
          agg[existingIndex].count = agg[existingIndex].count + 1;
        }

        if (existingIndex === -1) {
          agg.push({
            lbl: tag,
            count: 1,
          });
        }
      }

      return agg;
    }, [])
    .sort((a, b) => {
      return a.lbl > b.lbl ? 1 : -1;
    });
}
