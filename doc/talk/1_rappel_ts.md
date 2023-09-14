Typer l'arg et le retour.
``` js
function doubleLaValeur(value) {
  return value * 2;
}
```

Typer l'arg et le retour.
``` js
function doubleLaValeur(value) {
  return value * 2;
}
```

Typer l'arg et le retour.
``` js
function doubleLaValeur2(value) {
  return Promise.resolve(value * 2);
}
```

Réparer la fonction pour que le retour double la valeur.
``` js
function doubleLaValeur3(value) {
  let result = 0;
  setTimeout(() => result = value * 2, 1000);
  return result;
}
```
