import {Uint8ArrayUtils} from "../main/index";

let a = new Uint8Array([1, 2, 3]);
let b = new Uint8Array([1, 2, 3]);
let c = new Uint8Array([1, 2, 3, 4]);
let d = new Uint8Array([1, 5, 6]);

console.log("Equals, expected true:", Uint8ArrayUtils.equals(a, b));
console.log("Equals, expected false:", Uint8ArrayUtils.equals(a, c));
console.log("Equals, expected false:", Uint8ArrayUtils.equals(a, d));

console.log("Concat:", Uint8ArrayUtils.concat([a, d, c]));

console.log("Compare, expected 0:", Uint8ArrayUtils.compare(a, b));
console.log("Compare, expected 0:", Uint8ArrayUtils.compare(b, a));
console.log("Compare, expected -1:", Uint8ArrayUtils.compare(a, c));
console.log("Compare, expected 1:", Uint8ArrayUtils.compare(c, a));
console.log("Compare, expected -1:", Uint8ArrayUtils.compare(a, d));
console.log("Compare, expected 1:", Uint8ArrayUtils.compare(d, a));

console.log("Cast Uint8Array:", Uint8ArrayUtils.cast(a));
console.log("Cast ArrayBuffer:", Uint8ArrayUtils.cast(new ArrayBuffer(10)));
console.log("Cast Uint32Array:", Uint8ArrayUtils.cast(new Uint32Array([7, 6, 5])));

console.log("ArrayLike Uint8Array:", Uint8ArrayUtils.arrayLike(a));
console.log("ArrayLike ArrayBuffer:", Uint8ArrayUtils.arrayLike(new ArrayBuffer(10)));
console.log("ArrayLike Uint32Array:", Uint8ArrayUtils.arrayLike(new Uint32Array([7, 6, 5])));
console.log("ArrayLike Uint32Array:", Uint8ArrayUtils.arrayLike([7, 6, 5]));
