# read-image
Universal Image File Reader.  In the Browser, uses read-pixels.  In NodeJS, uses jpeg-js or pngjs.

# install
```bash
npm install read-image
```

# usage in the browser / frontend
```js
import readImage from 'read-image';

const result = readImage({ data: arrayBuffer });
// result is { height: 200, width: 100, pixels: [[[]]] }
```

# usage in NodeJS / backend
```js
const readImage = require("read-image");

const result = readImage({ data: buffer });
// result is { height: 200, width: 100, pixels: [[[]]] }
```