import { mbToHumanReadableMetric } from "#helpers/formatters/mb-to-human-readable-metric.mjs";

describe("bytesToHumanReadableMetric", () => {
  it("Should handle 0 gracefully.", () => {
    const result = mbToHumanReadableMetric(0);

    expect(result).toEqual("0 MB");
  });

  test.each([
    [1, "1 MB"], // Testing the lower range in megabytes
    [500, "500 MB"], // Testing a standard value in megabytes
    [1023, "1023 MB"], // Testing just below the conversion threshold to gigabytes
    [1024, "1 GB"], // Testing the exact conversion point from megabytes to gigabytes
    [1500, "1.46 GB"], // Testing a non-integer number of gigabytes
    [1048576, "1 TB"], // Testing the conversion point from gigabytes to terabytes
    [1234567, "1.18 TB"], // Testing a non-integer number of terabytes
    [999, "999 MB"], // Testing just below the gigabyte threshold
    [2048, "2 GB"], // Testing double the conversion point to gigabytes
    [2097152, "2 TB"], // Testing double the conversion point to terabytes
  ])('Should convert accurately %#: "%s", "%s"', (input, expected) => {
    const result = mbToHumanReadableMetric(input);

    expect(result).toEqual(expected);
  });
});
