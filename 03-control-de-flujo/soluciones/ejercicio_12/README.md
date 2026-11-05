# Solución · Ejercicio 12 · El PIN de tres intentos

[← Volver al enunciado](../../ejercicios/ejercicio_12/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Pedir un PIN con un máximo de tres intentos, como un cajero automático.

## Un bucle con tres salidas

```javascript
while (intentos < MAX_INTENTOS) {
    const respuesta = prompt(…);
    if (respuesta === null) { cancelado = true; break; }
    intentos++;
    …
    if (correcto) { acertado = true; break; }
}
```

El bucle puede terminar de tres formas, y cada una tiene su mensaje:

| Cómo termina | Por qué | Variable |
| --- | --- | --- |
| Acierto | `break` en el `if (correcto)` | `acertado` es `true` |
| Cancelar | `break` al recibir `null` | `cancelado` es `true` |
| Tres fallos | La condición del `while` deja de cumplirse | Las dos siguen en `false` |

`break` sale del bucle en el acto, sin terminar la vuelta ni comprobar la condición. Después del bucle no sé **por qué** ha terminado; por eso guardo esa información en dos variables, y el `if` final las consulta.

## El contador, en su sitio

Sumo el intento **después** de comprobar el Cancelar. Así, cancelar no gasta un intento. El orden de las líneas dentro del bucle decide las reglas del juego.

## Los detalles que hacen el ejercicio más real

- `respuesta.trim() === PIN`: el PIN es un texto (como el código postal del bloque 02), y comparo texto con texto. El `trim()` perdona un espacio sin querer al final.
- `'•'.repeat(respuesta.length)`: el registro nunca muestra el PIN. `repeat` repite un texto las veces que se le pidan.
- El registro se crea con `createElement` y `append`, que veréis a fondo en el bloque 06.

Es el patrón «intentos limitados» que encontraréis en muchos sitios: contraseñas, juegos de adivinar, reintentos de una conexión.

### Fuentes y Documentación Oficial

