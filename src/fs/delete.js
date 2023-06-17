import {unlink} from "node:fs/promises";

const remove = async () => {
    try {
        await unlink('./src/fs/files/fileToRemove.txt')
    } catch (err) {
        throw Error('FS operation failed')
    }
};

await remove();