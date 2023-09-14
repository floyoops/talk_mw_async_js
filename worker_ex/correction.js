
const { Worker } = require('worker_threads')

const worker = new Worker('./doubleWorker.js');

let total = 0;
const expected = 10;


function getTotal(expected) {
  return new Promise((resolve) => {
    worker.on('message', (m) => {
      console.log('message', m);
      total = total + m;
      if (total >= expected) {
        resolve(true);
      }
    });
  })
}

async function run() {
  worker.postMessage({value: 1, duration: 500});
  worker.postMessage({value: 2, duration: 1000});
  worker.postMessage({ value: 14, duration: 2000});
  worker.postMessage({ value: 24, duration: 2500});

  await getTotal(10);
  console.log('total', total);
  //worker.terminate();
}

run();



