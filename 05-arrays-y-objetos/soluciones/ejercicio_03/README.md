# Solución · Ejercicio 03 · Una semana de temperaturas

[← Volver al enunciado](../../ejercicios/ejercicio_03/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Recorrer el mismo array de tres formas y elegir cada una según lo que hace falta.

## 1. `for` clásico: cuando necesitáis el índice

```javascript
for (let i = 0; i < temperaturas.length; i++) {
    parte += `${dias[i]}: ${temperaturas[i]} °C\n`;
}
```

Es el `for` del bloque 03, ahora con `i` como índice del array. Empieza en `0` y la condición es `i < temperaturas.length`, con `<` y no con `<=`: el último índice válido es `length - 1` [1].

Aquí necesito el índice porque leo **dos** arrays a la vez, `dias[i]` y `temperaturas[i]`.

> [!WARNING]
> Si ponéis `i <= temperaturas.length`, la última vuelta lee `temperaturas[7]`, que no existe, y obtenéis `undefined`. Es el error clásico de «uno de más».

## 2. `for...of`: cuando solo necesitáis el valor

```javascript
for (const temperatura of temperaturas) {
    suma += temperatura;
}
```

`for...of` recorre directamente los **valores** del array [2]. No hay índice, ni condición, ni `i++` que vigilar: menos sitios donde equivocarse. Fijaos en que puedo usar `const`, porque en cada vuelta se crea una constante nueva.

## 3. `forEach`: un *callback* por cada elemento

```javascript
temperaturas.forEach((temperatura, indice) => {
    …
});
```

`forEach()` ejecuta la función que le pasáis una vez por cada elemento, y le entrega el valor y el índice [3]. Es un *callback*, igual que en el bloque 04: vosotros escribís qué hacer con cada elemento y `forEach` se encarga de recorrer.

Dos detalles:

- `forEach` devuelve `undefined` [3]. Sirve para **hacer** algo con cada elemento, no para obtener un resultado. Para eso están `map`, `filter` y `reduce`, que veréis en el ejercicio 04.
- Dentro de `forEach` no podéis usar `break`. Si necesitáis parar a mitad, usad `for` o `for...of`.

## ¿Cuál uso?

| Necesito… | Uso |
| --- | --- |
| Solo los valores | `for...of` |
| Valor e índice, de forma cómoda | `forEach((valor, indice) => …)` |
| Control total: saltos, recorrer al revés, parar con `break` | `for` clásico |

## Los resultados

- Media: 20.3 °C.
- Máxima: 25 °C el miércoles.
- Días de más de 22 °C: 2 (miércoles y jueves).

### Fuentes y Documentación Oficial

1. [Array.prototype.length (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
2. [for...of (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for...of)
3. [Array.prototype.forEach() (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
