import {readFile} from "node:fs/promises";
const read = async () => {
    try {
        const file = await readFile('./src/fs/files/fileToRead.txt',  { encoding: 'utf8' } );
        console.log(file)
    } catch (err) {
        throw Error('FS operation failed')
    }
};

await read();