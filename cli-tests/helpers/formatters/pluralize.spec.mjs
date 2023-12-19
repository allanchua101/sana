import { pluralizeNoun } from "#helpers/formatters/pluralize.mjs";

const TEST_CASES = [
  ["Identity", "Identities"],
  ["Registry", "Registries"],
  ["Policy", "Policies"],
  ["Gateway", "Gateways"],
  ["Key", "Keys"],
  ["Dependency", "Dependencies"],
  ["Function", "Functions"],
  ["Table", "Tables"],
  ["Trace", "Traces"],
  ["Queue", "Queues"],
  ["Bucket", "Buckets"],
  ["Secret", "Secrets"],
];

describe("pluralizeNoun", () => {
  test.each(TEST_CASES)(
    'Pluralize nouns properly %#: "%s"',
    (input, expected) => {
      const result = pluralizeNoun(input);

      expect(result).toEqual(expected);
    }
  );
});
