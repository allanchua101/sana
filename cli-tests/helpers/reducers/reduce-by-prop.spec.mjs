import { reduceByProp } from "#helpers/reducers/reduce-by-prop.mjs";
import { getNestedProperty } from "#helpers/json/get-nested-property.mjs";
const FUNCTIONS = [
  {
    runtime: "nodejs18.x",
    memorySize: 1024,
    ephemeralStorage: {
      size: 1024,
    },
  },
  {
    runtime: "nodejs18.x",
    memorySize: 1024,
    ephemeralStorage: {
      size: 512,
    },
  },
  {
    runtime: "nodejs20.x",
    memorySize: 128,
    ephemeralStorage: {
      size: 512,
    },
  },
];

describe("reduceByProp", () => {
  test.each([
    ["runtime", "nodejs18.x", 2],
    ["runtime", "nodejs20.x", 1],
    ["memorySize", 1024, 2],
    ["memorySize", 128, 1],
  ])(
    "Should return the value for the property specified in the JSON notation. %#",
    (dotNotation, label, expected) => {
      const distribution = reduceByProp(FUNCTIONS, dotNotation);
      const category = distribution.find((item) => item.lbl === label);

      expect(category).not.toBeNull();
      expect(category.count).toEqual(expected);
    }
  );

  test.each([[null], [undefined], [""]])(
    "Should throw an error for bad dot notation entries %#",
    (dotNotation) => {
      expect(() => {
        reduceByProp(FUNCTIONS, dotNotation);
      }).toThrow("JSON dot notation is required.");
    }
  );
});
