# Solución · Ejercicio 09 · Laboratorio de texto

[← Volver al enunciado](../../ejercicios/ejercicio_09/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Aplicar a una frase los métodos de texto más habituales y ver el resultado de cada uno.

## Con la frase de ejemplo

| Operación | Resultado |
| --- | --- |
| `texto.length` | `38` |
| `texto.trim()` | `«Aprendo JavaScript en el cliente»` |
| `limpio.length` | `32` |
| `limpio.toUpperCase()` | `APRENDO JAVASCRIPT EN EL CLIENTE` |
| `¿contiene «javascript»?` | `true` |
| `limpio.at(0)` y `limpio.at(-1)` | `A … e` |
| `limpio.slice(0, 10)` | `Aprendo Ja` |
| `limpio.replaceAll(' ', '_')` | `Aprendo_JavaScript_en_el_cliente` |

## `length` cuenta todo

La frase original mide 38 caracteres, y la limpia, 32: los seis espacios de los lados también son caracteres [1]. Por eso `trim()` es lo primero que hay que hacer con lo que escribe el usuario: quita los espacios del principio y del final y devuelve **un texto nuevo** [2]. El original sigue intacto; por eso guardo el resultado en `limpio`.

## Buscar sin distinguir mayúsculas

```javascript
limpio.toLowerCase().includes('javascript')
```

`includes()` distingue mayúsculas y minúsculas [3]: `'JavaScript'.includes('javascript')` es `false`. La solución es convertir el texto a minúsculas antes de buscar [4] y buscar también en minúsculas. Es un encadenamiento: cada método trabaja sobre el resultado del anterior.

## Posiciones: `at()` y `slice()`

- `at(0)` es el primer carácter y `at(-1)`, el último: con números negativos, cuenta desde el final [5].
- `slice(0, 10)` copia desde la posición 0 hasta **antes** de la 10 [6]: diez caracteres, incluido el espacio.

## `replaceAll()`

Cambia **todas** las apariciones de un texto por otro [7]. Lo usaréis mucho para limpiar datos: quitar los puntos de los miles, cambiar comas por puntos en los decimales…

### Fuentes y Documentación Oficial

1. [String: length (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length)
2. [String.prototype.trim() (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim)
3. [String.prototype.includes() (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)
4. [String.prototype.toLowerCase() (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
5. [String.prototype.at() (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/at)
6. [String.prototype.slice() (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)
7. [String.prototype.replaceAll() (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll)
