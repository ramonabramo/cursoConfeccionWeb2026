# Solución · Ejercicio 11 · Escaparate con presupuesto

[← Volver al enunciado](../../ejercicios/ejercicio_11/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Ocultar los productos que superan un presupuesto y enumerar los que caben en él.

## Los datos, en el HTML

```html
<article class="tarjeta-producto" data-precio="59.9">
```

Cada tarjeta guarda su precio en un atributo `data-precio`, y JavaScript lo lee con `tarjeta.dataset.precio`, como visteis en el apartado de atributos del bloque. Siempre llega como **texto** (`'59.9'`), así que lo convierto con `Number()` antes de comparar.

El precio que se ve (`59,90 €`) y el que se compara (`59.9`) son dos cosas distintas. El primero es para las personas; el segundo, para el programa.

## Ocultar con `hidden`

```javascript
tarjeta.hidden = Number(tarjeta.dataset.precio) > presupuesto;
```

`hidden` es una propiedad booleana: con `true`, el elemento desaparece de la página; con `false`, vuelve [1]. Asignarle directamente el resultado de la comparación es más corto y más claro que un `if`.

## Filtrar una `NodeList`

```javascript
const asequibles = Array.from(tarjetas).filter((t) => Number(t.dataset.precio) <= presupuesto);
```

La `NodeList` tiene `forEach`, pero no `filter` ni `map`. `Array.from` la convierte en un array de verdad, y a partir de ahí todo lo del bloque 05 está disponible [2] [3]. Con `map` saco el texto de cada `h3`: el nombre del producto.

| Presupuesto | Se ven |
| --- | --- |
| 50 € | Ratón, Auriculares, Alfombrilla |
| 100 € | Todos menos el monitor |
| 5 € | Ninguno (y el mensaje lo dice) |

En el bloque 07, este mismo filtro funcionará en vivo, mientras el usuario mueve un control.

### Fuentes y Documentación Oficial

1. [HTMLElement: hidden property (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/hidden)
2. [Document: querySelectorAll() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)
3. [Array.prototype.filter() (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
