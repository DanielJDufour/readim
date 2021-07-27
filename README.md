# readim
Universal Image File Reader.  In the Browser, uses read-pixels.  In NodeJS, uses jpeg-js or pngjs.

# install
```bash
npm install readim
```

# usage in the browser / frontend
```js
import readim from 'readim';

const result = readim({ data: arrayBuffer });
// result is { height: 200, width: 100, pixels: [r1, g1, b1, a1, r2, ...] }
```

# usage in NodeJS / backend
```js
const readim = require("readim");

const result = readim({ data: buffer });
// result is { height: 200, width: 100, pixels: [r1, g1, b1, a1, r2, ...] }
```
