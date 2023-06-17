import { writeFile } from 'node:fs/promises';

const create = async () => {
    try {
        return await writeFile('./src/fs/fresh.txt', 'I am fresh and young', { flag: 'wx' });
    } catch (err) {
        throw Error('FS operation failed');
    }
};

await create();