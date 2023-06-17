import { spawn } from 'node:child_process';

const spawnChildProcess = async (args) => {
    const child = spawn('node', ['src/cp/files/script.js', ...args]);

    process.stdin.pipe(child.stdin);

    child.stdout.on('data', (data) => {
        process.stdout.write(data);
    });
};

// Put your arguments in function call to test this functionality
await spawnChildProcess( ['arg1', 'arg2', 'arg3']);
