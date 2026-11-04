# Solución · Ejercicio 02 · Detective de tipos

[← Volver al enunciado](../../ejercicios/ejercicio_02/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Preguntar a `typeof` por el tipo de ocho valores distintos y detectar los resultados que no son lo que parecen.

## Los resultados

| Variable | Valor | `typeof` | Comentario |
| --- | --- | --- | --- |
| `texto` | `'Hola'` | `"string"` | |
| `numero` | `42` | `"number"` | |
| `decimal` | `3.14` | `"number"` | Enteros y decimales comparten tipo |
| `numeroEnTexto` | `'42'` | `"string"` | Las comillas mandan |
| `verdadero` | `true` | `"boolean"` | |
| `sinValor` | (nada) | `"undefined"` | Declarada sin valor |
| `vacio` | `null` | `"object"` | ⚠ Sorpresa 1 |
| `noEsNumero` | `NaN` | `"number"` | ⚠ Sorpresa 2 |

`typeof` devuelve un texto con el nombre del tipo del valor que le pasáis [1].

## Lo que os tenéis que llevar

### Enteros y decimales: el mismo tipo

En otros lenguajes hay tipos distintos para enteros y decimales. En JavaScript, `42` y `3.14` son los dos `number` [2]. Uno menos que recordar.

### Las comillas convierten cualquier cosa en texto

`42` es un número. `'42'` es un texto que contiene los caracteres «4» y «2». Esto ya os mordió en el bloque 01 con `prompt()`, y os va a seguir mordiendo hasta que lo tengáis tatuado.

### `undefined` frente a `null`

Parecen lo mismo, pero no lo son:

- `undefined` es el valor que tiene una variable que **todavía no ha recibido** valor [2].
- `null` es un valor que **vosotros ponéis** a propósito para decir «aquí no hay nada» [2].

Una analogía: `undefined` es un cajón que nadie ha abierto todavía. `null` es un cajón que alguien ha vaciado y ha dejado así a propósito.

### Sorpresa 1: `typeof null` es `"object"`

MDN lo recoge tal cual: `typeof null === "object"` [1]. Es una rareza que el lenguaje arrastra desde sus inicios y que no se puede corregir sin romper páginas antiguas. `null` **no** es un objeto. Simplemente, `typeof` no os sirve para detectarlo.

### Sorpresa 2: `typeof NaN` es `"number"`

`NaN` significa *Not a Number*, y sin embargo es del tipo `number`. Tiene su lógica: es el valor que devuelve una operación numérica que no ha podido dar un número válido, como `Number('hola')` [3]. Es un número «roto», pero número al fin.

### Fuentes y Documentación Oficial

1. [typeof (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/typeof)
2. [Gramática y tipos (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Grammar_and_types)
3. [NaN (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/NaN)
