/**
 * @function
 * @name getNestedProperty
 * @description Method used for retrieving object properties by JSON notation path
 * @param {object} obj Input object
 * @param {string} path JSON notation path
 * @returns {any} Value of the specified path
 */
export function getNestedProperty(obj, path) {
  const keys = path.split(".");

  return keys.reduce(
    (acc, key) => (acc && acc[key] !== "undefined" ? acc[key] : undefined),
    obj
  );
}
