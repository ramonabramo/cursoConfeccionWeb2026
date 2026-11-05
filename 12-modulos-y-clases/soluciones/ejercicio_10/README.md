# Solución · Ejercicio 10 · Temporizadores independientes

[← Volver al enunciado](../../ejercicios/ejercicio_10/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Tres temporizadores que funcionan a la vez sin interferir, creados con una sola clase.

## Cada uno, su intervalo

```javascript
#segundos = 0;
#id = null;
```

El tiempo y el identificador del `setInterval` son **privados** de cada instancia [1]. Por eso iniciar la pasta no afecta a los huevos: cada objeto tiene su propio intervalo y su propia cuenta. Con variables globales, como hacíais en el bloque 10, para tres temporizadores habríais necesitado seis variables y mucho cuidado.

## La flecha, dos veces

```javascript
raiz.addEventListener('click', (e) => { … this.alternar(); });
this.#id = setInterval(() => { this.#segundos++; this.pintar(); }, 1000);
```

Las dos funciones que paso son flechas, y no por estética. Una función normal que el navegador llama como escuchador recibe como `this` el elemento del evento [2], y una que llama `setInterval` tampoco recibe el temporizador. La flecha no tiene `this` propio: usa el del método donde se escribió, que es la instancia [3]. Es el error más frecuente al combinar clases con eventos y temporizadores.

## Un dato de la clase: `static`

```javascript
static #activos = 0;
static get activos() { return Temporizador.#activos; }
```

¿Cuántos temporizadores hay en marcha? Esa información no es de ninguno en particular: es de **todos**. Por eso es un campo `static`, que pertenece a la clase y se usa con su nombre [4]. Cada `iniciar` suma uno y cada `pausar` resta uno. Además es privado (`#`), así que solo la clase puede cambiarlo; desde fuera, solo se lee con el getter.

## Protegerse de los dobles clics

`iniciar` sale si ya está en marcha, y `pausar` si ya está parado. Sin esas dos líneas, un doble clic en «Iniciar» crearía dos intervalos (el tiempo iría a doble velocidad) y el contador de activos se descuadraría. Son las reglas de los temporizadores del bloque 10, ahora encerradas dentro de la clase: quien la use no puede olvidarlas.

### Fuentes y Documentación Oficial

1. [Private elements (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_elements)
2. [this (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
3. [Arrow function expressions (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
4. [static (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static)
