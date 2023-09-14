# Await & Async
Résout le problème de callback .then .catch.

``` js
function wait (duration) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(duration), duration)
    })
}
```

``` js
async function start() {
  const b = await wait(2000);
  console.log('duration' + b);
}

start();
```