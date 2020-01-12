export class Uint8ArrayUtils {
    
    static equals(a: Uint8Array, b: Uint8Array): boolean {
        if (a.length != b.length) {
            return false;
        }
        for (let i = 0; i < a.length; i++) {
            if (a[i] != b[i]) {
                return false;
            }
        }
        return true;
    }
    
    static concat(arrays: Uint8Array[]): Uint8Array {
        let length = 0;
        for (let x of arrays) {
            length += x.byteLength;
        }
        let res = new Uint8Array(length);
        let offset = 0;
        for (let x of arrays) {
            res.set(x, offset);
            offset += x.byteLength;
        }
        return res;
    }
    
    static compare(a: Uint8Array, b: Uint8Array): number {
        for (let i = 0; i < a.length && i < b.length; i++) {
            let res = a[i] - b[i];
            if (res != 0) {
                return res < 0 ? -1 : 1;
            }
        }
        return a.length == b.length ? 0 : (a.length < b.length ? -1 : 1);
    }
    
    static cast(buffer: ArrayBuffer|ArrayBufferView): Uint8Array {
        if (buffer instanceof Uint8Array) {
            return buffer;
        }
        if (buffer instanceof ArrayBuffer) {
            return new Uint8Array(buffer);
        }
        if (ArrayBuffer.isView(buffer)) {
            return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
        }
        throw new Error("Invalid buffer");
    }
    
    static arrayLike(data: ArrayBuffer|ArrayBufferView|number[]): Uint8Array|number[] {
        return Array.isArray(data) ? data : Uint8ArrayUtils.cast(data);
    }
}