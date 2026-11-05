# Solución · Ejercicio 10 · Ficha técnica con for...in

[← Volver al enunciado](../../ejercicios/ejercicio_10/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Generar la ficha técnica de un producto recorriendo sus propiedades, sin escribir una línea por cada fila.

## `for...in`: los nombres de las propiedades

```javascript
for (const clave in movil) {
    celdaClave.textContent = clave;
    celdaValor.textContent = movil[clave];
}
```

`for...in` recorre las propiedades de un objeto y, en cada vuelta, os da su **nombre** [1]: `'modelo'`, `'marca'`, `'pantalla'`… Para leer el valor uso los corchetes, `movil[clave]`, porque el nombre de la propiedad está guardado en una variable. Con el punto (`movil.clave`) buscaría una propiedad que se llama literalmente «clave».

La gracia: si añadís `color: 'azul'` al objeto, la tabla tiene una fila más **sin tocar el bucle**. El programa se adapta a los datos.

## Por qué no con arrays

```
for...in con un array da: "0" (string), "1" (string)
```

Con un array, `for...in` os da las posiciones, y **como textos** [1]. Si hicierais cuentas con ellas (`posicion + 1`), obtendríais `'01'` en lugar de `1`. Para arrays, usad `for...of`, que da directamente los valores [2], o `forEach`.

| Recorrer… | Usad |
| --- | --- |
| Las propiedades de un objeto | `for...in` |
| Los valores de un array | `for...of` o `forEach` |

## Una alternativa que ya conocéis

`Object.keys(movil)` devuelve un array con los nombres de las propiedades, y `Object.entries(movil)`, un array de parejas `[clave, valor]`. Con ellas podéis usar `forEach`, `map` y compañía. `for...in` es la forma más directa cuando solo queréis recorrer.

### Fuentes y Documentación Oficial

1. [for...in (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
2. [for...of (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
