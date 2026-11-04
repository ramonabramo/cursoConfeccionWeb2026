# Solución · Ejercicio 05 · Ticket de compra con plantillas de texto

[← Volver al enunciado](../../ejercicios/ejercicio_05/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Calcular un ticket con IVA y mostrarlo como un texto de varias líneas, con los importes siempre a dos decimales.

## La solución paso a paso

### 1. Los cálculos

```javascript
const subtotal = precio * cantidad;
const importeIva = subtotal * IVA;
const total = subtotal + importeIva;
```

Nada nuevo: tres constantes, cada una con un cálculo. Os recomiendo guardar cada resultado intermedio con su propio nombre en vez de meterlo todo en una línea larga. Se lee mejor y, si algo sale mal, podéis comprobar cada paso con `console.log`.

### 2. Los decimales «raros»

Con 12.99 € y 3 unidades, el `console.log(total)` muestra algo como `47.1537`. Con otros valores puede salir incluso `47.15370000000001`. El ordenador guarda los decimales en binario y algunos no tienen una representación exacta, así que aparecen esas colas. No es un fallo de vuestro programa.

### 3. `toFixed(2)`

```javascript
total.toFixed(2)   // "47.15"
```

`toFixed()` devuelve el número escrito con exactamente los decimales que le pidáis [1]. Perfecto para importes en euros.

> [!IMPORTANT]
> `toFixed()` devuelve un **texto**, no un número [1]. Usadlo solo para **mostrar**. Si después hacéis cuentas con ese resultado, volveréis a tener el problema de `'47.15' + 1 = '47.151'`. Por eso en la solución lo aplico solo dentro de la plantilla, en el último momento.

### 4. La plantilla de varias líneas

```javascript
const ticket = `========= TIENDA JS =========
Producto:   ${producto}
…`;
```

Las comillas invertidas tienen otra ventaja sobre las normales: admiten **saltos de línea reales** dentro del texto [2]. No hace falta `\n`. Lo que escribís es lo que sale.

Para que el navegador respete esos saltos y los espacios de alineación, el ticket se muestra en un `<pre>`.

## Qué tenéis que observar

- Con 12.99 € × 3: subtotal 38.97 €, IVA 8.18 €, total 47.15 €.
- Todos los importes del ticket tienen dos decimales; el de la consola, no.

### Fuentes y Documentación Oficial

1. [Number.prototype.toFixed() (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)
2. [Plantillas literales (plantillas de cadenas) (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals)
