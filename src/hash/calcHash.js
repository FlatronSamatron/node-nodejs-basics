import {readFile} from "node:fs/promises";
const { createHash } = await import('node:crypto');
const calculateHash = async () => {
    try {
        const text = await readFile('./src/hash/files/fileToCalculateHashFor.txt', { encoding: 'utf8' })
        const hash = createHash('sha256').update(text).digest('hex')
        console.log(hash)
    } catch (err) {
        throw Error('FS operation failed');
    }
};

await calculateHash();