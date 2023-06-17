import {pipeline} from "node:stream/promises";
import fs from "node:fs";
import zlib from "node:zlib";
const compress = async () => {
    await pipeline(
        fs.createReadStream('./src/zip/files/fileToCompress.txt'),
        zlib.createGzip(),
        fs.createWriteStream('./src/zip/files/archive.gz'),
    );
};

await compress();