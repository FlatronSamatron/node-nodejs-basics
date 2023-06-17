import {createWriteStream} from "node:fs";

const write = async () => {
    const rs = createWriteStream('./src/streams/files/fileToWrite.txt');
    process.stdin.pipe(rs)
};

await write();