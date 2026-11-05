# Solución · Ejercicio 09 · La cola de la consulta

[← Volver al enunciado](../../ejercicios/ejercicio_09/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Gestionar una cola de espera en la que la gente llega al final, las urgencias se cuelan y siempre se atiende al primero.

## Tres métodos, tres extremos

| Operación | Método | Qué hace |
| --- | --- | --- |
| Llegar | `push(nombre)` | Añade al **final** |
| Urgencia | `unshift(nombre)` | Añade al **principio** [1] |
| Atender | `shift()` | Quita el **primero** y lo devuelve [2] |

Una cola en la que el primero que llega es el primero en salir se llama **FIFO** (*first in, first out*). `push` + `shift` es exactamente eso. `unshift` rompe la regla a propósito, como en una consulta real.

## La mañana, paso a paso

| Operación | Cola después |
| --- | --- |
| Llegan Ana, Luis y Eva | Ana, Luis, Eva |
| Atendido: Ana | Luis, Eva |
| ⚠️ Urgencia: Teo | **Teo**, Luis, Eva |
| Atendido: Teo | Luis, Eva |
| Atendido: Luis | Eva |
| Atendido: Eva | (nadie) |
| No hay nadie esperando | (nadie) |

## La cola vacía

Con un array vacío, `shift()` no da error: devuelve `undefined` [2]. Sin la comprobación, el registro diría «Atendido: undefined». Por eso `atender` pregunta primero por `cola.length` y sale antes si no hay nadie. Siempre que saquéis elementos de un array, pensad en qué pasa cuando ya no queda ninguno.

## Un apunte de rendimiento

`shift` y `unshift` tienen que mover todos los elementos una posición para hacer hueco o cerrarlo. Con una cola de consulta no se nota; con cientos de miles de elementos, sí. Para listas enormes hay estructuras mejores, pero eso ya queda fuera de este curso.

### Fuentes y Documentación Oficial

1. [Array.prototype.unshift() (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)
2. [Array.prototype.shift() (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)
