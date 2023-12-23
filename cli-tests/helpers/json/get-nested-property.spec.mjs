import { getNestedProperty } from "#helpers/json/get-nested-property.mjs";
const testObj = {
  rootProp: "A",
  rootPropB: "A1",
  rootPropC: {
    name: "B1",
  },
  rootPropD: {
    name: "B2",
    children: [
      {
        name: "C1",
      },
    ],
  },
  rootPropE: {
    name: "B3",
    firstChild: {
      name: "C3",
    },
  },
};

describe("getNestedProperty", () => {
  test.each([
    [testObj, "rootProp", "A"],
    [testObj, "rootPropB", "A1"],
    [testObj, "rootPropC.name", "B1"],
    [testObj, "rootPropD.name", "B2"],
    [testObj, "rootPropD.children.0.name", "C1"],
    [testObj, "rootPropE.name", "B3"],
    [testObj, "rootPropE.firstChild.name", "C3"],
  ])(
    "Should retrieve nested property by their paths %#",
    (obj, path, expected) => {
      const result = getNestedProperty(obj, path);

      expect(result).toEqual(expected);
    }
  );

  test.each([
    [testObj, null],
    [testObj, undefined],
    [testObj, ""],
    [testObj, true],
    [testObj, false],
    [testObj, 0],
    [testObj, {}],
  ])("Should throw an exception for non-string paths %#", (obj, path) => {
    expect(() => {
      getNestedProperty(obj, path);
    }).toThrow("Path is required.");
  });

  test.each([[null], [undefined], [""]])(
    "Should throw an exception for empty objects %#",
    (obj) => {
      expect(() => {
        getNestedProperty(obj);
      }).toThrow("Path is required.");
    }
  );
});
