const getByte = require("get-byte");
const readJPG = require("read-jpg");
const readPNG = require("read-png");

async function readim({ data, debug }) {
  const byte = getByte(data, 0);
  if (debug) console.log("[readim] byte:", byte);

  if (byte === 137) {
    return readPNG({ data });
  } else if (byte === 255) {
    return readJPG({ data });
  }
}

if (typeof module === "object") module.exports = readim;
if (typeof window === "object") window.readim = readim;
if (typeof self === "object") self.readim = readim;
