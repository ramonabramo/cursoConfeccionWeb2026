# Solución · Ejercicio 09 · Pestañas reutilizables

[← Volver al enunciado](../../ejercicios/ejercicio_09/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Escribir las pestañas una sola vez, como clase, y usarlas en dos grupos de la misma página.

## Un molde para cada grupo

```javascript
const componentes = Array.from(raices).map((raiz) => new Pestanas(raiz));
```

Cada `[data-pestanas]` de la página recibe su propia instancia [1]. Si mañana añadís un tercer grupo al HTML, funciona sin tocar el JavaScript.

## Buscar dentro de la raíz

```javascript
this.#pestanas = raiz.querySelectorAll('[role="tab"]');
```

Esta es la regla que hace posible tener dos instancias. Si buscara con `document.querySelectorAll`, cada grupo encontraría las cinco pestañas de la página y, al pulsar una, apagaría también las del otro. Con `raiz.querySelectorAll`, cada instancia solo ve **su** trozo de página.

## El estado, privado

`#pestanas`, `#paneles` e `#indice` son privados [2]: cada instancia tiene los suyos y nadie de fuera puede cambiarlos. Desde fuera solo se usa `activar(i)` y el getter `activa`.

## `this` en los escuchadores

```javascript
pestana.addEventListener('click', () => this.activar(i));
```

Esta línea tiene truco. Si escribiera `function () { this.activar(i); }`, dentro de esa función `this` sería **el botón pulsado**: una función normal usada como escuchador recibe como `this` el elemento del evento [3]. Y los botones no tienen método `activar`, así que daría un `TypeError`. La función flecha no tiene `this` propio: usa el del sitio donde se escribió, que es el constructor, es decir, la instancia [4].

## Del bloque 07 a aquí

El código de `activar` es el mismo patrón de exclusión mutua del ejercicio 11 del bloque 07. Lo nuevo es el envoltorio: ahora ese patrón es una pieza que se puede **reutilizar**.

### Fuentes y Documentación Oficial

1. [Classes (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
2. [Private elements (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_elements)
3. [this (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
4. [Arrow function expressions (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
