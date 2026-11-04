# Solución · Ejercicio 01 · Contador de clics

[← Volver al enunciado](../../ejercicios/ejercicio_01/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Construir un contador que responde a tres botones y que deja de escuchar uno de ellos al llegar a un límite.

## El cambio de mentalidad

Hasta ahora, vuestros programas se ejecutaban de arriba abajo y **terminaban**. Este no. Al cargar, prepara los botones y se queda esperando. El código de dentro de cada escuchador se ejecuta **cada vez** que el usuario hace clic, y ni una vez más [1]. Lo tenéis dibujado en la [infografía del ciclo de un evento](../../img/ciclo-evento.svg).

## La solución paso a paso

### 1. `addEventListener`

```javascript
btnMas.addEventListener('click', sumar);
```

`addEventListener()` registra una función que se ejecutará cuando ocurra el evento indicado en ese elemento [2]. Dos argumentos: el **nombre del evento**, como texto, y la **función** que se ejecutará, que es un *callback* como los del bloque 04.

> [!WARNING]
> `sumar`, sin paréntesis. Si escribís `sumar()`, la función se ejecuta **una vez al cargar la página** y lo que se registra como escuchador es su resultado, `undefined`. El botón no hará nada. Es el error más típico de este bloque.

### 2. Con nombre o anónima

```javascript
btnMas.addEventListener('click', sumar);   // función con nombre
btnMenos.addEventListener('click', () => { contador--; pintar(); });   // anónima
```

Las dos formas funcionan. ¿Cuándo usar cada una?

- **Con nombre**, cuando la vais a reutilizar o a retirar después.
- **Anónima**, cuando es corta y solo se usa en ese botón.

### 3. El estado

```javascript
let contador = 0;
```

`contador` se declara **fuera** de los escuchadores, en el ámbito global. Si lo declarara dentro, se crearía de nuevo con valor 0 en cada clic y nunca pasaría de 1. Las variables que deben recordar algo entre un evento y el siguiente son el **estado** del programa.

### 4. Una función que pinta

Los tres botones cambian el contador y los tres necesitan mostrarlo. En lugar de repetir el código, todos llaman a `pintar()`. Es el mismo principio que `renderizar()` en el bloque 06: **cambia el estado, después pinta**.

```javascript
salidaContador.classList.toggle('negativo', contador < 0);
```

`toggle` con un segundo argumento deja de ser un interruptor: si es `true`, solo añade la clase; si es `false`, solo la quita [3]. Perfecto para decir «pon esta clase si se cumple esta condición».

### 5. `removeEventListener`

```javascript
btnMas.removeEventListener('click', sumar);
```

`removeEventListener()` retira un escuchador. Hay que indicarle **el mismo evento y la misma función** que se registraron [4]. Por eso `sumar` tiene nombre: una función flecha anónima no se puede retirar, porque no tenéis forma de volver a nombrarla.

Al reiniciar, vuelvo a añadir `sumar`. Y si ya estaba añadido, no pasa nada: si la función ya está en la lista de escuchadores de ese elemento, no se añade una segunda vez [2].

## Qué tenéis que observar

- El número se pone rojo al bajar de 0.
- Al llegar a 10, el botón +1 se desactiva.
- Tras reiniciar, vuelve a funcionar.

### Fuentes y Documentación Oficial

1. [Introduction to events (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events)
2. [EventTarget: addEventListener() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
3. [DOMTokenList: toggle() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle)
4. [EventTarget: removeEventListener() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener)
