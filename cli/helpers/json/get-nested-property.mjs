/**
 * @function
 * @name getNestedProperty
 * @description Method used for retrieving object properties by JSON notation path
 * @param {object} obj Input object
 * @param {string} path JSON notation path
 * @returns {any} Value of the specified path
 */
export function getNestedProperty(obj, path) {
  if (typeof path !== "string") {
    throw new Error("Path is required.");
  }

  if (path === "") {
    throw new Error("Path is required.");
  }

  if (typeof obj === "undefined" || !obj) {
    throw new Error("Path is required.");
  }

  const keys = path.split(".");

  return keys.reduce(
    (acc, key) => (acc && acc[key] !== "undefined" ? acc[key] : undefined),
    obj
  );
}
