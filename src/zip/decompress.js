import {pipeline} from "node:stream/promises";
import fs from "node:fs";
import zlib from "node:zlib";

const decompress = async () => {
    await pipeline(
        fs.createReadStream('./src/zip/files/archive.gz'),
        zlib.createUnzip(),
        fs.createWriteStream('./src/zip/files/fileToCompress.txt'),
    );
};

await decompress();