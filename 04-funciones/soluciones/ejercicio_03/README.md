# Solución · Ejercicio 03 · Saludos con valores por defecto

[← Volver al enunciado](../../ejercicios/ejercicio_03/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Escribir una función con parámetros por defecto y averiguar en qué casos se usan esos valores.

## Los parámetros por defecto

```javascript
function saludar(nombre = 'invitado', idioma = 'es') {
```

Si al llamar a la función falta un argumento, el parámetro vale `undefined`. Con `= valor` le dais un valor alternativo, que se usa cuando no llega ningún valor o llega `undefined` [1].

## Los resultados

| Llamada | Resultado | Qué ha pasado |
| --- | --- | --- |
| `saludar('Lucía', 'en')` | Hello, Lucía | Llegan los dos argumentos |
| `saludar('Lucía')` | Hola, Lucía | Falta el idioma → `'es'` |
| `saludar()` | Hola, invitado | Faltan los dos |
| `saludar(undefined, 'fr')` | Bonjour, invitado | `undefined` activa el valor por defecto |
| `saludar(null, 'it')` | Ciao, null | ⚠ `null` **no** lo activa |
| `saludar('Lucía', 'de')` | Hola, Lucía | Idioma desconocido → `default` del `switch` |

## La sorpresa: `null`

MDN lo especifica con precisión: el valor por defecto se aplica con `undefined`, pero **no** con `null` ni con otros valores *falsy* [1]. La idea es que `undefined` significa «no me han dado nada», mientras que `null` es un valor que alguien ha pasado a propósito, y la función lo respeta.

¿Y si quisierais que `null` también diese «invitado»? Entonces no os sirve el valor por defecto: tendríais que comprobarlo dentro de la función con un `if`, como hicisteis en el bloque 03.

## Dos detalles de diseño

**Los parámetros con valor por defecto, al final.** Si `nombre` tuviera valor por defecto pero `idioma` no, para usar el nombre por defecto tendríais que escribir `saludar(undefined, 'fr')`, que es feo. Por eso el orden habitual es: primero los obligatorios, después los opcionales.

**El `default` del `switch`** se encarga de los idiomas que no conocemos [2]. Así la función nunca devuelve algo como `undefined, Lucía`.

### Fuentes y Documentación Oficial

1. [Default parameters (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
2. [switch (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/switch)
