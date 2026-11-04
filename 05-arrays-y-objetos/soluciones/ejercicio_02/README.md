# Solución · Ejercicio 02 · Buscador de alumnos

[← Volver al enunciado](../../ejercicios/ejercicio_02/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Buscar información en dos arrays paralelos usando los métodos de búsqueda.

## Buscar un valor concreto

```javascript
alumnos.includes(nombre)   // ¿está? → true / false
alumnos.indexOf(nombre)    // ¿dónde? → posición o -1
```

`includes()` responde sí o no [1]; `indexOf()` devuelve la posición del primer elemento igual al que buscáis, o `-1` si no está [2]. Los dos comparan con igualdad estricta, como `===`.

Por eso **«marta» no encuentra a «Marta»**: para JavaScript son textos distintos. Si quisierais una búsqueda que ignore mayúsculas, tendríais que convertir los dos lados a minúsculas antes de comparar. Lo dejo como reto.

### Arrays paralelos

```javascript
const posicion = alumnos.indexOf(nombre);
const nota = notas[posicion];
```

Como Marta está en la posición 2 de `alumnos`, su nota está en la posición 2 de `notas`. Funciona… pero es frágil: si alguien añade un alumno y se olvida de añadir su nota, todo se descuadra. En el ejercicio 06 lo resolveréis de la forma buena, con un **array de objetos**.

## Buscar por condición

```javascript
notas.find((n) => n < 5)        // 4
notas.findIndex((n) => n < 5)   // 1
```

Aquí ya no buscáis un valor exacto, sino **el primero que cumpla algo**. Por eso reciben un *callback*, como los del bloque 04: una función que se ejecuta con cada elemento y devuelve `true` o `false`.

| Método | Devuelve | Si nadie cumple |
| --- | --- | --- |
| `find(callback)` | El **valor** del primer elemento que cumple [3] | `undefined` [3] |
| `findIndex(callback)` | La **posición** del primer elemento que cumple [4] | `-1` [4] |

Las dos se detienen en cuanto encuentran uno. Pablo también suspende, pero `find` ni lo mira: ya había encontrado a Luis.

## Preguntar por todos

```javascript
notas.every((n) => n >= 0 && n <= 10)
```

`every()` devuelve `true` si **todos** los elementos cumplen la condición [5]. Muy útil para validar una lista entera de una vez.

## Resumen de búsquedas

| Quiero saber… | Método |
| --- | --- |
| Si un valor está | `includes(valor)` |
| Dónde está un valor | `indexOf(valor)` |
| El primero que cumple algo | `find(callback)` |
| Dónde está el primero que cumple algo | `findIndex(callback)` |
| Si todos cumplen algo | `every(callback)` |

### Fuentes y Documentación Oficial

1. [Array.prototype.includes() (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
2. [Array.prototype.indexOf() (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
3. [Array.prototype.find() (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
4. [Array.prototype.findIndex() (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
5. [Array.prototype.every() (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
