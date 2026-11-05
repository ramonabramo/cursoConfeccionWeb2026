# Solución · Ejercicio 01 · Un aviso con retraso: setTimeout

[← Volver al enunciado](../../ejercicios/ejercicio_01/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Programar un aviso para dentro de unos segundos, poder cancelarlo y observar en qué orden se ejecuta el código.

## `setTimeout`: «hazlo dentro de un rato»

```javascript
idAviso = setTimeout(() => {
    anotar('3. ¡Aviso!');
}, segundos * 1000);
```

`setTimeout(función, retraso)` programa la función para que se ejecute cuando pase el tiempo indicado, en **milisegundos** [1]. Por eso multiplico por 1000: 3 segundos son 3000 ms.

## Lo que veis en el registro

```
[+0 ms]    1. Programo el aviso para dentro de 3 s
[+1 ms]    2. El programa sigue: no espera
[+3002 ms] 3. ¡Aviso! Han pasado 3 s
```

¡La línea 2 sale **antes** que la 3, aunque esté escrita después en el código! Esta es la idea central de todo el bloque. `setTimeout` no detiene el programa: entrega la función al navegador, que se encarga de contar el tiempo, y **el programa sigue inmediatamente** con la siguiente línea [2]. Cuando pasa el tiempo, el navegador llama a la función.

Fijaos también en que el aviso llega a los 3002 ms, no a los 3000 exactos. El retraso indicado es un mínimo: el tiempo real puede ser algo mayor [1].

## Cancelar: `clearTimeout`

```javascript
clearTimeout(idAviso);
```

`setTimeout` devuelve un número que identifica ese temporizador [1]. Si lo guardáis, podéis cancelarlo antes de que se cumpla con `clearTimeout` [3]. Es como el número del ticket de un pedido: sin él, no podéis anularlo.

### Nunca dos a la vez

```javascript
if (idAviso !== null) {
    clearTimeout(idAviso);
}
```

Si el usuario pulsa «Programar» tres veces seguidas, sin esta comprobación tendríais **tres** avisos en marcha, y solo podríais cancelar el último, porque los otros ids se habrían perdido. Por eso cancelo el anterior antes de crear uno nuevo, y pongo `idAviso` a `null` cuando el aviso se cumple o se cancela. Así siempre sé si hay uno pendiente.

## `Date.now()`

Devuelve los milisegundos transcurridos desde el 1 de enero de 1970 [4]. Por sí solo no es muy útil, pero **restando dos** obtenéis el tiempo que ha pasado entre ellos. Lo usaréis en los cronómetros del ejercicio 02 y en el juego del 08.

### Fuentes y Documentación Oficial

1. [Window: setTimeout() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout)
2. [Introducing asynchronous JavaScript (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Async_JS/Introducing)
3. [Window: clearTimeout() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Window/clearTimeout)
4. [Date.now() (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now)
