# Solución · Ejercicio 01 · La lista de la compra

[← Volver al enunciado](../../ejercicios/ejercicio_01/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Crear un array y modificarlo por el principio, por el final y por el medio, registrando su estado después de cada cambio.

## La solución paso a paso

### 1. Crear el array y leerlo

```javascript
const compra = ['pan', 'leche', 'huevos'];
compra[0]                    // 'pan'
compra[compra.length - 1]    // 'huevos'
```

Un array es una lista ordenada de valores a la que se accede por su **índice**, que empieza en 0 [1]. `length` indica cuántos elementos tiene [2]. Por eso el último está en `length - 1`: con tres elementos, los índices son 0, 1 y 2. Tenéis el dibujo en la [infografía de la teoría](../../img/array.svg).

¿Y por qué `const`, si el array va a cambiar? Porque `const` impide **reasignar** la variable (`compra = otraCosa`), pero no impide cambiar el **contenido** del array. Lo veréis con más detalle en el ejercicio 08.

### 2. Los cuatro métodos de los extremos

| Método | Dónde | Qué hace | Devuelve |
| --- | --- | --- | --- |
| `push(x)` | Final | Añade | La nueva longitud [3] |
| `pop()` | Final | Quita | El elemento quitado [4] |
| `unshift(x)` | Principio | Añade | La nueva longitud [5] |
| `shift()` | Principio | Quita | El elemento quitado [6] |

Fijaos en que `pop()` y `shift()` **devuelven** lo que quitan. Por eso puedo guardarlo en una constante y decir en el registro qué ha salido.

### 3. Quitar por el medio: `indexOf` + `splice`

```javascript
const posicion = compra.indexOf('leche');
if (posicion !== -1) {
    compra.splice(posicion, 1);
}
```

Para quitar un elemento concreto necesito dos pasos:

1. `indexOf()` busca el elemento y devuelve su posición, o `-1` si no está [7].
2. `splice(posicion, 1)` quita, a partir de esa posición, un elemento [8].

¿Por qué el `if`? Porque `splice(-1, 1)` no daría error: quitaría el **último** elemento, ya que un índice negativo cuenta desde el final [8]. Si «leche» no estuviera, borraríais otra cosa sin daros cuenta.

### 4. ¿Está o no está?

```javascript
compra.includes('pan')   // true o false
```

`includes()` responde directamente sí o no [9]. Si solo necesitáis saber **si** está, usad `includes`; si necesitáis saber **dónde**, `indexOf`.

## Con «fruta»

```
Lista inicial                         → [pan, leche, huevos]
push('fruta')                         → [pan, leche, huevos, fruta]
unshift('café')                       → [café, pan, leche, huevos, fruta]
pop() → ha quitado 'fruta'            → [café, pan, leche, huevos]
shift() → ha quitado 'café'           → [pan, leche, huevos]
splice(1, 1) → ha quitado 'leche'     → [pan, huevos]
```

Si añadís «leche», `indexOf` encuentra **la primera** que aparece y solo quita esa. La otra sigue en la lista.

### Fuentes y Documentación Oficial

1. [Array (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)
2. [Array.prototype.length (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
3. [Array.prototype.push() (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
4. [Array.prototype.pop() (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)
5. [Array.prototype.unshift() (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)
6. [Array.prototype.shift() (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)
7. [Array.prototype.indexOf() (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
8. [Array.prototype.splice() (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
9. [Array.prototype.includes() (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
