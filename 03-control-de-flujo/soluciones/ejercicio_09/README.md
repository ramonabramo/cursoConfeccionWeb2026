# Solución · Ejercicio 09 · El mayor de tres números

[← Volver al enunciado](../../ejercicios/ejercicio_09/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Encontrar el mayor de tres números de dos maneras distintas.

## Versión 1: `if` anidados

```javascript
if (a >= b) {
    if (a >= c) { mayorAnidado = a; } else { mayorAnidado = c; }
} else {
    if (b >= c) { mayorAnidado = b; } else { mayorAnidado = c; }
}
```

La idea es un torneo: primero se enfrentan `a` y `b`; el ganador se enfrenta con `c` [1]. Funciona, pero hay que seguir las llaves con el dedo para entenderlo.

## Versión 2: condiciones combinadas

```javascript
if (a >= b && a >= c) {
    mayorCombinado = a;
} else if (b >= c) {
    mayorCombinado = b;
} else {
    mayorCombinado = c;
}
```

«`a` es el mayor si es mayor o igual que los otros dos»: se lee casi como en castellano [2]. Y fijaos en el `else if`: si llegamos ahí, ya sabemos que `a` **no** es el mayor, así que basta con comparar `b` y `c`. Es la regla de los tramos: cada condición aprovecha que las de arriba han fallado.

## Los empates: `>=`, no `>`

Con `9, 9, 2` y `>` en lugar de `>=`, la primera condición (`9 > 9`) sería falsa en las dos versiones y el resultado dependería del orden de las comparaciones. Con `>=`, un empate cuenta como victoria y el mayor sale correcto.

Y cuando los tres son iguales, el «mayor» existe (es 4), pero el mensaje más útil es decirlo: por eso lo compruebo aparte con `a === b && b === c`.

### Fuentes y Documentación Oficial

1. [if...else (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
2. [Logical AND (&&) (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND)
