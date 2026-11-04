# Solución · Ejercicio 03 · Calculadora de operadores

[← Volver al enunciado](../../ejercicios/ejercicio_03/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Aplicar los seis operadores aritméticos a dos números introducidos por el usuario.

## La solución paso a paso

### 1. Convertir al leer

```javascript
const a = Number(prompt('Primer número (a):', '17'));
const b = Number(prompt('Segundo número (b):', '5'));
```

Os acordáis del bloque 01: `prompt()` devuelve texto. Aquí hago la conversión **en la misma línea** en la que leo el dato. Así, a partir de ese momento, `a` y `b` ya son números y me olvido del problema. Es la costumbre que os recomiendo.

### 2. Los seis operadores

| Operador | Nombre | Con 17 y 5 |
| --- | --- | --- |
| `+` | Suma | `22` |
| `-` | Resta | `12` |
| `*` | Multiplicación | `85` |
| `/` | División | `3.4` |
| `%` | Resto | `2` |
| `**` | Potencia | `1419857` |

Los cuatro primeros los conocéis de toda la vida [1]. Los otros dos merecen un momento.

**El resto (`%`)** devuelve lo que sobra al dividir [2]. 17 entre 5 cabe 3 veces (15) y sobran 2. No es un porcentaje, aunque use el mismo símbolo. Os aseguro que lo vais a usar mucho: para saber si un número es par (`n % 2` da `0`), para repartir cosas en grupos o para hacer que algo «dé la vuelta».

**La potencia (`**`)** eleva el primer número al segundo [3]. `2 ** 3` es 2 × 2 × 2 = 8.

### 3. Escribir números con `textContent`

```javascript
celdaSuma.textContent = suma;
```

`textContent` espera un texto, pero si le dais un número lo convierte solo. No hace falta hacer nada más.

## La pregunta del final: dividir entre cero

| Operación | Resultado |
| --- | --- |
| `10 / 0` | `Infinity` |
| `10 % 0` | `NaN` |

En matemáticas dividir entre cero no está definido, pero JavaScript no da error: devuelve el valor especial `Infinity`. Y el resto entre cero da `NaN`. Para impedir que el usuario divida entre cero necesitaréis una condición, y eso llega en el bloque 03.

### Fuentes y Documentación Oficial

1. [Expresiones y operadores (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators)
2. [Resto (%) (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Remainder)
3. [Exponenciación (**) (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Exponentiation)
