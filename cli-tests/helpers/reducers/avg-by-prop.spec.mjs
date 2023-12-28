import { getAverageByProp } from "#helpers/reducers/avg-by-prop.mjs";
const FUNCTIONS = [
  {
    runtime: "nodejs18.x",
    memorySize: 1024,
    ephemeralStorage: {
      size: 512,
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
  {
    runtime: "nodejs20.x",
    memorySize: 128,
    ephemeralStorage: {
      size: 512,
    },
  },
];

describe("getAverageByProp", () => {
  test.each([
    ["memorySize", 576],
    ["ephemeralStorage.size", 512],
  ])(
    "Should return the average value for the specified dotNotation.",
    (dotNotation, expected) => {
      const result = getAverageByProp(FUNCTIONS, dotNotation);

      expect(result).toEqual(expected);
    }
  );

  test.each([[null], [undefined], [""], [false], [true], [1], [522], [54]])(
    "Should throw an error for bad dot notation entries %#",
    (dotNotation) => {
      expect(() => {
        getAverageByProp(FUNCTIONS, dotNotation);
      }).toThrow("JSON dot notation is required.");
    }
  );

  test.each([[null], [undefined], [""], [false], [true], [1], [522], [54]])(
    "Should throw an invalid array error %#",
    (nonArrayInput) => {
      expect(() => {
        getAverageByProp(nonArrayInput, "memorySize");
      }).toThrow("Invalid array");
    }
  );

  it("Should return 0 for empty arrays", () => {
    const result = getAverageByProp([], "ephemeralStorage.size");

    expect(result).toEqual(0);
  });
});
