# Solución · Ejercicio 05 · Del callback hell a las promesas

[← Volver al enunciado](../../ejercicios/ejercicio_05/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Ejecutar cuatro tareas que tardan, una detrás de otra, primero con callbacks anidados y después con promesas.

## Versión 1: callbacks anidados

```javascript
pasoConCallback('Preparar la masa', 800, () => {
    pasoConCallback('Añadir ingredientes', 500, () => {
        pasoConCallback('Hornear', 1000, () => {
            pasoConCallback('Servir', 300, () => {
                anotar('🍕 ¡Lista!');
            });
        });
    });
});
```

Para que el paso 2 empiece cuando termine el 1, tiene que ir **dentro** del callback del 1. Y el 3, dentro del 2. Con cuatro pasos ya tenéis una pirámide. MDN lo describe así: al llamar callbacks dentro de callbacks se obtiene un código profundamente anidado, mucho más difícil de leer y de depurar, y en el que gestionar los errores se complica en cada nivel de la pirámide [1]. A esto se le llama, con cariño, *callback hell*.

## Versión 2: promesas

```javascript
function paso(nombre, ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            anotar(nombre);
            resolve();
        }, ms);
    });
}
```

Una **promesa** es un objeto que representa el resultado futuro de una operación asíncrona [2]. Es como el ticket que os dan al pedir en una cafetería: todavía no tenéis el café, pero tenéis algo que os lo garantiza.

`new Promise(…)` recibe una función con un parámetro `resolve`. Cuando la tarea termina, llamáis a `resolve()` y la promesa pasa de **pendiente** a **cumplida** [3].

### Encadenar con `then`

```javascript
paso('Preparar la masa', 800)
    .then(() => paso('Añadir ingredientes', 500))
    .then(() => paso('Hornear', 1000))
    .then(() => paso('Servir', 300))
    .then(() => anotar('🍕 ¡Lista!'))
    .finally(() => bloquearBotones(false));
```

`then` recibe la función que se ejecutará cuando la promesa se cumpla, y **devuelve una promesa nueva** [4]. Y si esa función devuelve otra promesa, como `paso(…)`, el siguiente `then` espera a que se cumpla. Por eso la cadena va paso a paso, y es **plana**: se lee de arriba abajo, como una receta.

`finally` se ejecuta cuando la cadena termina, vaya bien o mal [5]. Es el sitio ideal para reactivar los botones.

## Comparad las dos

| | Callbacks | Promesas |
| --- | --- | --- |
| Forma | Pirámide hacia la derecha | Lista hacia abajo |
| Añadir un paso en medio | Reindentar todo lo de dentro | Añadir una línea `.then` |
| Gestionar errores | En cada nivel | Un solo `.catch` al final (ejercicio 06) |

El registro sale idéntico en las dos: los pasos terminan a los 800, 1300, 2300 y 2600 ms. Las promesas no hacen el código más rápido: lo hacen **más legible**. Y en el ejercicio 07 veréis una forma aún más clara de escribir esta misma cadena.

### Fuentes y Documentación Oficial

1. [Introducing asynchronous JavaScript (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Async_JS/Introducing)
2. [Promise (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
3. [Promise() constructor (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)
4. [Promise.prototype.then() (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)
5. [Promise.prototype.finally() (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally)
