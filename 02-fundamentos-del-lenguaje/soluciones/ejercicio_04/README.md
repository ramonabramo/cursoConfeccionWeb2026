# Solución · Ejercicio 04 · Marcador de videojuego

[← Volver al enunciado](../../ejercicios/ejercicio_04/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Ir modificando una puntuación con los operadores de asignación compuesta y de incremento, y construir a la vez un historial de texto.

## Los operadores de asignación compuesta

Todos son atajos. Hacen una operación con la variable y guardan el resultado en la misma variable [1]:

| Atajo | Equivale a | Jugada | Puntos |
| --- | --- | --- | --- |
| `puntos += 50` | `puntos = puntos + 50` | Moneda | 50 |
| `puntos -= 20` | `puntos = puntos - 20` | Enemigo | 30 |
| `puntos *= 3` | `puntos = puntos * 3` | Cofre | 90 |
| `puntos /= 2` | `puntos = puntos / 2` | Trampa | 45 |
| `puntos++` | `puntos = puntos + 1` | Vida extra | 46 |
| `puntos--` | `puntos = puntos - 1` | Penalización | 45 |

`++` suma uno a la variable y `--` le resta uno [2]. Los vais a ver muchísimo en los bucles del bloque 03.

Fijaos en que `puntos` se declara con `let`. Con `const` ninguna de estas líneas funcionaría: todas reasignan la variable.

## `+=` con textos: el acumulador

```javascript
let historial = '';
historial += `Moneda        +50  → ${puntos}\n`;
```

El operador `+=` también funciona con textos. Como `+` une textos, `historial += 'algo'` añade «algo» al final de lo que ya había [3]. Empiezo con un texto vacío y, jugada a jugada, lo voy llenando. A esta técnica se le llama **acumulador** y os acompañará todo el curso.

### ¿Y el `\n`?

Es el carácter de salto de línea. Dentro de un texto, `\n` significa «aquí empieza una línea nueva». Para que el navegador respete esos saltos, el historial se muestra en un elemento `<pre>`, que conserva los espacios y los saltos de línea tal cual.

## Qué tenéis que observar

- El historial muestra seis líneas, una por jugada, con los puntos acumulados.
- La puntuación final es **45**.

### Fuentes y Documentación Oficial

1. [Expresiones y operadores (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators)
2. [Incremento (++) (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Increment)
3. [Addition assignment (+=) (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition_assignment)
