Une promesse se construit avec une fonction qui recevra 2 callbacks que l'on pourra appeler en cas de succès ou d'échec de la logique

``` js
function wait (duration) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(duration), duration)
    })
}
```

Une Promise peut être dans un de ces 3 états :

* pending (en attente) : état initial, la promesse n'est ni remplie, ni rompue ;
* fulfilled (tenue) : l'opération a réussi ;
* rejected (rompue) : l'opération a échoué.

On pourra utiliser 3 méthodes pour suivre la résolution de la promesse.

* .then(callback), si la promesse a été résolue
* .catch(callback), si la promesse a échoué
* .finally(callback), si la promesse a échoué ou a été tenue

``` js
wait(2000)
    .then(() => {
        // Ce code sera appelé si la promesse est tenue
    })
    .catch(() => {
        // Ce code sera appelé si la promesse est rompue
    })
    .finally(() => {
        // Ce code sera appelé quoi qu'il arrive
    })
```

Exemple
``` js
wait(2000)
    .then(() => 'hello')
    .then((v) => console.log(v)) // 'hello'
```

