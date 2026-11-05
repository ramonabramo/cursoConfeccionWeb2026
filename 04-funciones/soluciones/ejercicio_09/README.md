# Solución · Ejercicio 09 · Calculadora de gastos con rest

[← Volver al enunciado](../../ejercicios/ejercicio_09/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Una función que resume cualquier número de gastos: tres, uno o ninguno.

## El parámetro *rest*

```javascript
function resumirGastos(concepto, ...gastos) {
```

`concepto` recibe el primer argumento; `...gastos` recoge **todos los demás** en un array [1]. Con `resumirGastos('Viaje', 120, 45.5, 30)`, `gastos` vale `[120, 45.5, 30]`. Con `resumirGastos('Nada')`, vale `[]`: nunca es `undefined`, así que puedo preguntar por su `length` sin miedo.

El *rest* tiene que ser el **último** parámetro [1]: lo contrario no tendría sentido, porque se lo llevaría todo.

## Un array de verdad

Como `gastos` es un array, tengo a mano todo lo del bloque 05:

- `some` para preguntar si **algún** gasto no es válido [2]. En cuanto encuentra uno, deja de buscar.
- `reduce` para sumar.

La condición `typeof g !== 'number' || !(g > 0)` rechaza los textos, los negativos, el cero y también `NaN` (porque `NaN > 0` es `false`).

## Los cuatro resultados

| Llamada | Resultado |
| --- | --- |
| `('Viaje', 120, 45.5, 30)` | `Viaje: 3 gastos · total 195.50 € · media 65.17 €` |
| `('Comida', 12.4)` | `Comida: 1 gastos · total 12.40 € · media 12.40 €` |
| `('Nada')` | `Nada: sin gastos` |
| `('Error', 10, -5, 'abc')` | `Error: hay importes no válidos` |

Fijaos en el «1 gastos». Os lo dejo como reto: usad un ternario para escribir «gasto» o «gastos» según el número.

## *Early return*, otra vez

Los dos casos especiales (sin gastos e importes no válidos) salen al principio con `return`. Así, el cálculo final solo se escribe para el caso normal, sin anidar `if` dentro de `if`.

### Fuentes y Documentación Oficial

1. [Rest parameters (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Rest_parameters)
2. [Array.prototype.some() (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
