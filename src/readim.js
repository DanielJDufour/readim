const getByte = require("get-byte");
const readJPG = require("read-jpg");
const readPNG = require("read-png");

async function readim(data, { debug = false } = { debug: false }) {
  if (typeof data === "object" && data.data) data = data.data;
  if (typeof data === "object" && data.debug) debug = data.debug;

  const byte = getByte(data, 0);
  if (debug) console.log("[readim] byte:", byte);

  let height, width, pixels;
  if (byte === 137) {
    ({ height, width, pixels } = await readPNG({ data }));
  } else if (byte === 255) {
    ({ height, width, pixels } = await readJPG({ data }));
  }
  const result = { height, width, data: pixels };

  Object.defineProperty(result, "pixels", {
    get value() {
      return result.data;
    },
    enumerable: false,
  });

  return result;
}

if (typeof define === "function" && define.amd) {
  define(function () {
    return readim;
  });
}

if (typeof module === "object") {
  module.exports = readim;
  module.exports.default = readim;
}

if (typeof window === "object") {
  window.readim = readim;
}

if (typeof self === "object") {
  self.readim = readim;
}
