const { WorkerData, parentPort } = require('worker_threads')

parentPort.on('message', (message) => {
  setTimeout(() => {
    parentPort.postMessage(message.value * 2);
  }, message.duration);
});
