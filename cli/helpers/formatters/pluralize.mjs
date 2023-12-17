/**
 * @function pluralizeNoun
 * @description Method used for pluralizing nouns.
 * @param {string} noun Input noun
 * @returns {string} Pluralize form of the noun.
 */
export function pluralizeNoun(noun) {
  // Nouns ending in 'y' change 'y' to 'ies'
  if (noun.endsWith("y")) {
    return noun.slice(0, -1) + "ies";
  }

  // Nouns ending in 's', 'ss', 'sh', 'ch', 'x', 'z' add 'es'
  if (
    noun.endsWith("s") ||
    noun.endsWith("ss") ||
    noun.endsWith("sh") ||
    noun.endsWith("ch") ||
    noun.endsWith("x") ||
    noun.endsWith("z")
  ) {
    return noun + "es";
  }

  // For most nouns, just add 's'
  return noun + "s";
}
