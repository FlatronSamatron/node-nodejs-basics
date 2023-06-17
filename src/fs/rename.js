import {promises} from "node:fs";
const rename = async () => {
    try {
        await promises.rename('./src/fs/files/wrongFilename.txt', './src/fs/files/wrongFilename.md')
    } catch (err) {
        throw Error('FS operation failed')
    }
};

await rename();