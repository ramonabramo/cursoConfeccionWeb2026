# Solución · Ejercicio 12 · El mismo reto con cinco bucles

[← Volver al enunciado](../../ejercicios/ejercicio_12/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Resolver el mismo problema con cinco bucles distintos para comparar cómo se escribe cada uno.

## Las cinco versiones dan lo mismo

`Total: 42 · agotados: ratón, webcam` (con `raton`, sin tilde, en la versión del objeto, porque es el nombre de la propiedad).

| Bucle | Lo que tenéis en cada vuelta | Lo que tenéis que vigilar |
| --- | --- | --- |
| `for` | El índice `i` | La condición `i < length` |
| `while` | Nada: lo gestionáis vosotros | Inicializar `i` fuera y no olvidar `i++` |
| `for...of` | El producto directamente [1] | Nada: es el más limpio para arrays |
| `forEach` | El producto (y el índice si lo pedís) | No se puede interrumpir |
| `for...in` | El nombre de la propiedad [2] | Solo para objetos; el valor, con `stock[nombre]` |

Con `while`, si olvidáis el `i++`, la condición nunca deja de cumplirse: bucle infinito. Es la razón por la que, para recorrer un array, casi nunca se usa.

## El primero que cumple

```javascript
for (const producto of productos) {
    if (producto.unidades < 5) {
        primero = producto;
        break;
    }
}
```

Para **buscar** y parar en cuanto se encuentra, `for...of` con `break` es lo natural: el ratón (0 unidades) aparece en la segunda vuelta y el bucle termina, sin mirar los demás. Con `forEach` no hay `break`: recorrería siempre el array entero. Para este caso concreto, el método `find` del bloque 05 lo hace en una línea: `productos.find((p) => p.unidades < 5)`.

## Mi recomendación

- Recorrer un array entero → `for...of` o `forEach`.
- Necesitáis el índice o un recorrido especial (al revés, de dos en dos) → `for`.
- Recorrer un objeto → `for...in` u `Object.entries`.
- Repetir hasta que pase algo, sin saber cuántas veces → `while`.

### Fuentes y Documentación Oficial

1. [for...of (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
2. [for...in (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
