const getByte = require("get-byte");
const readJPG = require("read-jpg");
const readPNG = require("read-png");

async function readImage({ data, debug }) {
  const byte = getByte(data, 0);
  if (debug) console.log("[read-image] byte:", byte);

  if (byte === 137) {
    return readPNG({ data });
  } else if (byte === 255) {
    return readJPG({ data });
  }
}

if (typeof module === "object") module.exports = readImage;
if (typeof window === "object") window.readImage = readImage;
if (typeof self === "object") self.readImage = readImage;
