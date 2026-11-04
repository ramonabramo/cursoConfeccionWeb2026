# Solución · Ejercicio 06 · Catálogo de una tienda

[← Volver al enunciado](../../ejercicios/ejercicio_06/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Consultar un catálogo guardado como array de objetos: filtrar, buscar, transformar, totalizar y ordenar.

## El array de objetos

```javascript
const productos = [
    { nombre: 'Teclado mecánico', categoria: 'periféricos', precio: 59.9, stock: 12 },
    …
];
```

Cada elemento del array es un objeto con las mismas propiedades. Es como una tabla: cada objeto es una **fila** y cada propiedad, una **columna**. Esta estructura es la que os devolverán casi todas las API del bloque 11, así que conviene que os resulte familiar.

¿Os acordáis de los arrays paralelos del ejercicio 02? Aquí ese problema desaparece: el nombre, el precio y el stock de cada producto viajan juntos en el mismo objeto. No se pueden descuadrar.

## Los métodos de siempre, con objetos

La única diferencia con el ejercicio 04 es que, dentro del *callback*, cada elemento es un objeto, así que accedéis a sus propiedades con el punto: `p.categoria`, `p.precio`…

| Necesito | Código | Devuelve |
| --- | --- | --- |
| Los de una categoría | `filter((p) => p.categoria === categoria)` | Array de objetos [1] |
| Uno concreto | `find((p) => p.nombre === nombre)` | Un objeto o `undefined` [2] |
| Solo los nombres | `map((p) => p.nombre)` | Array de textos [3] |
| Valor del inventario | `reduce((acc, p) => acc + p.precio * p.stock, 0)` | Un número [4] |
| Ordenar por precio | `sort((a, b) => a.precio - b.precio)` | El mismo array, ordenado [5] |

### Ordenar por una propiedad

```javascript
[...productos].sort((a, b) => a.precio - b.precio)
```

El comparador recibe dos **objetos** y compara la propiedad que os interesa. Como en el ejercicio 04, ordeno una copia para no alterar el catálogo original.

### `slice`: quedarse con un trozo

```javascript
.slice(0, 3)
```

`slice(inicio, fin)` devuelve una **copia** de una parte del array, desde `inicio` hasta `fin` sin incluirlo [6]. No confundir con `splice`, que **modifica** el original.

## Dos atajos con `||`

```javascript
listado || 'No hay productos en esa categoría.'
agotados.join(', ') || 'ninguno'
```

Si el texto está vacío, es *falsy* y se usa el de la derecha. Lo visteis en el bloque 04.

## Con «periféricos» y «Monitor 27"»

```
• Teclado mecánico — 59.90 € (12 uds.)
• Ratón inalámbrico — 24.50 € (0 uds.)
• Alfombrilla XL — 15.95 € (30 uds.)
```

| Pregunta | Respuesta |
| --- | --- |
| Producto buscado | Monitor 27": 219.00 € |
| Agotados | Ratón inalámbrico, Monitor 24" |
| Valor del inventario | 3204.23 € |
| Los tres más baratos | Alfombrilla XL, Ratón inalámbrico, Altavoces |

### Fuentes y Documentación Oficial

1. [Array.prototype.filter() (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
2. [Array.prototype.find() (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
3. [Array.prototype.map() (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
4. [Array.prototype.reduce() (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
5. [Array.prototype.sort() (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
6. [Array.prototype.slice() (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
