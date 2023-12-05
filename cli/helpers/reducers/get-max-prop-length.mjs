export function getMaxPropLength(arr, prop) {
  return arr.reduce((maxLength, obj) => {
    const currentLength = obj[prop].length;

    return Math.max(maxLength, currentLength);
  }, 0);
}
