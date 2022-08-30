# readim
> Universal Image File Reader

# install
```bash
npm install readim
```

# usage in the browser / frontend
```js
import readim from 'readim';

readim(arrayBuffer);
{ height: 200, width: 100, data: Uint8ClampedArray [ 112, 221, 31, 255, ... ] }
```

# usage in NodeJS / backend
```js
const readim = require("readim");

readim(buffer);
{ height: 200, width: 100, data: Uint8ClampedArray [ 112, 221, 31, 255, ... ] }
```
