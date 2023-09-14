
const { Worker } = require('worker_threads')

const worker = new Worker('./doubleWorker.js');

let total = 0;
const expected = 10;

worker.on('message', (m) => {
  console.log('message recu', m);
  total = total + m;
});

worker.postMessage({value: 1, duration: 500});
worker.postMessage({value: 2, duration: 1000});
worker.postMessage({ value: 14, duration: 2000});
worker.postMessage({ value: 24, duration: 2500});

// Aficher le total quand ca dépasse 10.
console.log('total', total);

