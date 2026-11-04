# Solución · Ejercicio 01 · Conversor de temperaturas

[← Volver al enunciado](../../ejercicios/ejercicio_01/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Escribir dos funciones de conversión de temperatura, reutilizarlas con varios valores y comprobar qué devuelve una función sin `return`.

## La solución paso a paso

### 1. Declarar la función

```javascript
function celsiusAFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}
```

Una declaración de función tiene cuatro piezas [1]: la palabra `function`, el **nombre**, los **parámetros** entre paréntesis y el **cuerpo** entre llaves. Tenéis cada pieza señalada en la [infografía de la teoría](../../img/anatomia-funcion.svg).

Fijaos en el nombre: `celsiusAFahrenheit`. Dice exactamente lo que hace. Os recomiendo nombres con verbo o con la forma «de A a B», para que al leer `celsiusAFahrenheit(25)` sepáis qué esperar sin mirar el cuerpo.

### 2. `return`: devolver el resultado

`return` termina la función y devuelve el valor indicado a quien la llamó [2]. Ese valor «sustituye» a la llamada:

```javascript
const fahrenheit = celsiusAFahrenheit(25);   // es como escribir: const fahrenheit = 77;
```

### 3. Llamar muchas veces

Lo bueno de una función es que **la escribo una vez y la uso todas las que quiera**. En la tabla la llamo seis veces con argumentos distintos, y en ningún momento repito la fórmula.

Incluso puedo pasar el resultado de una función como argumento de otra:

```javascript
fahrenheitACelsius(celsiusAFahrenheit(0))   // 0 → 32 → 0
```

Se lee de dentro hacia fuera: primero se ejecuta `celsiusAFahrenheit(0)`, que devuelve `32`, y ese `32` se pasa a `fahrenheitACelsius`.

### 4. Una función sin `return`

```javascript
function mostrarEnConsola(texto) {
    console.log(texto);
}
const devuelto = mostrarEnConsola('Hola');
console.log(devuelto);   // undefined
```

La función hace su trabajo, escribir en la consola, pero no devuelve nada. Si una función no ejecuta ningún `return`, o lo ejecuta sin valor, devuelve `undefined` [2].

| Tipo de función | ¿Devuelve algo? | Ejemplo |
| --- | --- | --- |
| Calcula un resultado | Sí, con `return` | `celsiusAFahrenheit(25)` → `77` |
| Hace una acción | No (`undefined`) | `mostrarEnConsola('Hola')` |

## Qué tenéis que observar

- 0 °C son 32 °F y 100 °C son 212 °F.
- A −40 grados, las dos escalas coinciden. Un dato curioso para la próxima cena.
- La última columna recupera siempre la temperatura de partida.

### Fuentes y Documentación Oficial

1. [function (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/function)
2. [return (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/return)
