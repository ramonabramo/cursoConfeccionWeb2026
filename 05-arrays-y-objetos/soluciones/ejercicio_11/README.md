# Solución · Ejercicio 11 · Una configuración congelada

[← Volver al enunciado](../../ejercicios/ejercicio_11/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Proteger un objeto de configuración contra cambios accidentales y ver hasta dónde llega esa protección.

## `const` no basta

`const CONFIG = { … }` impide hacer `CONFIG = otroObjeto`, pero no `CONFIG.vidas = 99`: el objeto sigue siendo modificable por dentro, como visteis en el apartado de valores y referencias. `Object.freeze` lo congela: ya no se pueden cambiar, añadir ni borrar sus propiedades [1].

## Los resultados

| Intento | Después |
| --- | --- |
| `CONFIG.vidas = 99` | `vidas sigue valiendo 3` |
| `CONFIG.trucos = true` | `trucos vale undefined` |
| `delete CONFIG.nivel` | `nivel sigue valiendo 'fácil'` |
| `Object.isFrozen(CONFIG)` | `true` [2] |
| `CONFIG.colores.push('negro')` | `colores: rojo, azul, negro (¡ha cambiado!)` |
| El mismo `push` con el array congelado | `TypeError: Cannot add property 2, object is not extensible` |

## Silencio o error

En este script, los tres primeros intentos **no dan ningún error**: simplemente no hacen nada. En modo estricto, que es el de los módulos del bloque 12, lanzarían un `TypeError` [1]. Por eso conviene comprobar el resultado y no fiarse de que «no ha protestado».

## La trampa: congelación superficial

`Object.freeze` congela el objeto, pero no los objetos que hay dentro [1]. `CONFIG.colores` es una **referencia** a un array, y ese array sigue siendo normal: el `push` funciona. Para protegerlo, hay que congelarlo también, como en `CONFIG2`. Entonces sí: `push` intenta añadir un elemento a un array congelado y lanza un `TypeError` incluso fuera del modo estricto, porque es un método que falla por sí mismo.

### Fuentes y Documentación Oficial

1. [Object.freeze() (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)
2. [Object.isFrozen() (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen)
