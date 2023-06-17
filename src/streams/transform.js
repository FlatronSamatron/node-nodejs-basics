import {Transform} from "node:stream";

const transform = async () => {
    const readable = process.stdin
    const writable = process.stdout

    const transforms = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, chunk.toString().split('').reverse().join(''))
        },
    });

    readable.pipe(transforms).pipe(writable)

};

await transform();