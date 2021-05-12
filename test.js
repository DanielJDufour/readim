const { readFileSync } = require("fs");
const test = require("flug");
const readim = require(process.env.READIM_PATH);

["jpg", "png"].forEach(format => {
  test("reading " + format, async ({ eq }) => {
    const buffer = readFileSync("./test/flower." + format);
    const result = await readim({
      data: buffer,
      debug: false,
    });
    eq(result.height, 10);
    eq(result.width, 10);
    eq(result.pixels.length, 400);
    eq(result.pixels.reduce((sum, n) => sum + n, 0) > 5e4, true);
  });
});
