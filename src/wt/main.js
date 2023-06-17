import os from 'os'
import {Worker} from 'node:worker_threads'
const performCalculations = async () => {
    const coresLength = os.cpus().length;

    const workerPromises = [...new Array(coresLength)].map((item, i) => {
        return new Promise((resolve, reject) => {
            const worker = new Worker('./src/wt/worker.js', {
                workerData: i+10
            })
            worker.on('message', resolve);
            worker.on('error', reject);
        }).then((data) => {
            return {status: 'resolved', data }
        }).catch((e)=>{
            return {status: 'error', data: null }
        })
    })

    console.log(await Promise.all(workerPromises));
};

await performCalculations();
