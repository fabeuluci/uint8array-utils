uint8array-utils
====

Utility functions for Uint8Array

Example
---

```typescript
import {Uint8ArrayUtils} from "../main/index";

let a = new Uint8Array([1, 2, 3]);
let b = new Uint8Array([4, 5, 6]);

//Check equality returns boolean
Uint8ArrayUtils.equals(a, b);
//Concat given Uint8Arrays
Uint8ArrayUtils.concat([a, b]);
//Compare two arrays returns -1, 0, 1
Uint8ArrayUtils.compare(a, b);

//Cast ArrayBuffer|ArrayBufferView to Uint8Array without coping
Uint8ArrayUtils.cast(a);
Uint8ArrayUtils.cast(new ArrayBuffer(10));
Uint8ArrayUtils.cast(new Uint32Array([7, 6, 5]));

//Cast ArrayBuffer|ArrayBufferView|number[] to Uint8Array|number[] without coping
Uint8ArrayUtils.arrayLike(a);
Uint8ArrayUtils.arrayLike(new ArrayBuffer(10));
Uint8ArrayUtils.arrayLike(new Uint32Array([7, 6, 5]));
Uint8ArrayUtils.arrayLike([7, 6, 5]);
```

License
---

The MIT License (MIT)
