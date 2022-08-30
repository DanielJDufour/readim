import { readFileSync } from "fs";
import test from "flug";
import readim from ".";

["jpg", "png"].forEach(format => {
  test("reading " + format, async ({ eq }) => {
    const buffer = readFileSync("./test/flower." + format);
    const result = await readim(buffer, { debug: false });
    eq(result.height, 10);
    eq(result.width, 10);
    eq(result.data.length, 400);
    eq(Array.from(result.data).reduce((sum, n) => sum + n, 0) > 5e4, true);
  });
});
