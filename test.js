const { readFileSync } = require("fs");
const test = require("flug");
const readim = require(process.env.READIM_PATH);

["jpg", "png"].forEach(format => {
  test("reading " + format, async ({ eq }) => {
    const buffer = readFileSync("./test/flower." + format);

    // reading old way
    const result1 = await readim({
      data: buffer,
      debug: false,
    });

    // reading new way
    const result2 = await readim(buffer);
    eq(result1, result2);

    eq(result2.height, 10);
    eq(result2.width, 10);
    eq(result2.data.length, 400);
    eq(result2.data.reduce((sum, n) => sum + n, 0) > 5e4, true);

    // check old pixels property
    eq(result2.pixels.length, 400);
    eq(result2.pixels.reduce((sum, n) => sum + n, 0) > 5e4, true);
  });
});
