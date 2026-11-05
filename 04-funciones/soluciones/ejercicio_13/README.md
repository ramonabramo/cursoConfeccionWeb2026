# Solución · Ejercicio 13 · Recursividad: factorial y cuenta atrás

[← Volver al enunciado](../../ejercicios/ejercicio_13/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Resolver tres problemas con funciones que se llaman a sí mismas, y ver qué pasa cuando una no tiene caso base.

## Dos partes en cada función

```javascript
function factorial(n) {
    if (n <= 1) {
        return 1;                    // caso base
    }
    return n * factorial(n - 1);     // caso recursivo
}
```

El **caso base** es el que se resuelve sin volver a llamar a la función. El **caso recursivo** resuelve el problema a partir de una versión más pequeña de sí mismo [1]. Cada llamada a `factorial` usa un `n` una unidad menor, así que tarde o temprano llega a 1 y para.

## Cómo se calcula `factorial(5)`

```
factorial(5) = 5 * factorial(4)
                   4 * factorial(3)
                       3 * factorial(2)
                           2 * factorial(1)
                               1            ← caso base
```

Las llamadas se van apilando hasta el caso base y luego se resuelven de abajo arriba: 1, 2, 6, 24, **120**. Es la pila de llamadas del ejercicio 10 en acción [2].

## Los resultados

| Llamada | Resultado |
| --- | --- |
| `factorial(5)` | `120` |
| `cuentaAtras(5)` | `5… 4… 3… 2… 1… ¡Despegue! 🚀` |
| `sumarDigitos(2026)` | `10` (6 + 2 + 0 + 2) |
| `sinFin(1)` | `RangeError: Maximum call stack size exceeded` |

`sumarDigitos` separa el último dígito con `% 10` y quita ese dígito con `Math.floor(n / 10)`: `2026` → `6 + sumarDigitos(202)` → `6 + 2 + sumarDigitos(20)`…

## Sin caso base

`sinFin` se llama a sí misma sin parar. Cada llamada ocupa un hueco en la pila, la pila tiene un límite, y al llenarse salta un `RangeError` [1]. Como el error se lanza, lo puedo recoger con `try...catch`; sin él, el script se detendría ahí.

Antes de dar por buena una función recursiva, haceos siempre dos preguntas: ¿cuándo para? y ¿cada llamada se acerca a ese momento?

### Fuentes y Documentación Oficial

1. [Recursion (MDN Glossary) (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Glossary/Recursion)
2. [Call stack (MDN Glossary) (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Glossary/Call_stack)
