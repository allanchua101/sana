import { bytesToHumanReadableMetric } from "#helpers/formatters/bytes-to-human-readable-metric.mjs";

describe("bytesToHumanReadableMetric", () => {
  it("Should handle 0 gracefully.", () => {
    const result = bytesToHumanReadableMetric(0);

    expect(result).toEqual("0 Bytes");
  });

  test.each([
    [500, "500 Bytes"], // Testing the lower range in bytes
    [1024, "1 KB"], // Testing the exact conversion point from bytes to kilobytes
    [1500, "1.46 KB"], // Testing a non-integer number of kilobytes
    [1048576, "1 MB"], // Testing the conversion point from kilobytes to megabytes
    [1234567, "1.18 MB"], // Testing a non-integer number of megabytes
    [1073741824, "1 GB"], // Testing the conversion point from megabytes to gigabytes
    [2345678901, "2.18 GB"], // Testing a non-integer number of gigabytes
    [1099511627776, "1 TB"], // Testing the conversion point from gigabytes to terabytes
    [1234567890123, "1.12 TB"], // Testing a non-integer number of terabytes
    [1023, "1023 Bytes"], // Testing just below the conversion threshold
    [1048575, "1024 KB"], // Testing just below the megabyte conversion threshold
  ])('Should convert accurately %#: "%s", "%s"', (input, expected) => {
    const result = bytesToHumanReadableMetric(input);

    expect(result).toEqual(expected);
  });
});
