Utilisation d'une promesse:

fetch retourne une promise.
Si tout se passe bien, le code s'exécute dans .then.
Sinon dans le .catch.

``` js
fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
  .then(r => console.log('la réponse', r.status))
  .catch((e) => console.log('erreur', e))
;
```

Le but ensuite est de voir comment nos promises.