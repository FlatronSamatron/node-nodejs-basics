import {cp} from "node:fs/promises";

const copy = async () => {
    try {
        await cp('./src/fs/files', './src/fs/files_copy', {recursive: true, force: false, errorOnExist: true})
    } catch (err) {
        throw Error('FS operation failed');
    }
};

await copy();
