# Solución · Ejercicio 08 · Fizz Buzz

[← Volver al enunciado](../../ejercicios/ejercicio_08/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Contar del 1 al límite sustituyendo los múltiplos de 3 por «Fizz», los de 5 por «Buzz» y los de ambos por «FizzBuzz», y contar cuántas veces aparece cada palabra. Es un clásico de las entrevistas de programación, y junta todo lo del bloque en pocas líneas.

## La solución paso a paso

### 1. Detectar múltiplos con `%`

Un número es múltiplo de otro si al dividirlos **no sobra nada**. El operador resto, que conocéis del bloque 02, devuelve justo lo que sobra [1]:

```javascript
9 % 3 === 0    // true:  9 es múltiplo de 3
10 % 3 === 0   // false: sobra 1
```

### 2. El orden de las condiciones

```javascript
if (i % 3 === 0 && i % 5 === 0) {
    resultado += 'FizzBuzz';
} else if (i % 3 === 0) {
    resultado += 'Fizz';
} else if (i % 5 === 0) {
    resultado += 'Buzz';
} else {
    resultado += i;
}
```

Aquí está la trampa del ejercicio. ¿Qué pasa con el 15 si empiezo por `i % 3 === 0`? Se cumple, entra, escribe «Fizz»… y como en una escalera de `else if` solo se ejecuta el primer bloque que encaja [2], nunca llega a comprobar el caso «FizzBuzz».

La regla general: **en una escalera, el caso más específico va primero**. «Múltiplo de 3 y de 5» es más específico que «múltiplo de 3», así que va antes. Es lo mismo que pasaba con las notas del ejercicio 01.

### 3. Los separadores

```javascript
if (i < limite) {
    resultado += ', ';
}
```

Si añado `', '` en todas las vueltas, el texto termina en una coma colgando: `…14, FizzBuzz, `. Solo añado el separador si **no** es el último número.

### 4. Los contadores

Cada rama del `if` actualiza su propio contador. Como solo se ejecuta una rama por vuelta, cada número se cuenta una sola vez, y la suma de los cuatro contadores coincide siempre con el límite.

## Con límite 30

| Palabra | Veces | Cuáles |
| --- | --- | --- |
| Fizz | 8 | 3, 6, 9, 12, 18, 21, 24, 27 |
| Buzz | 4 | 5, 10, 20, 25 |
| FizzBuzz | 2 | 15, 30 |
| Números | 16 | El resto |

8 + 4 + 2 + 16 = 30. Cuadra.

### Fuentes y Documentación Oficial

1. [Resto (%) (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Remainder)
2. [if...else (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/if...else)
3. [for (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for)
