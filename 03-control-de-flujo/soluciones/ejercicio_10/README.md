# Solución · Ejercicio 10 · Tarifas del parque de atracciones

[← Volver al enunciado](../../ejercicios/ejercicio_10/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Calcular el precio de la entrada según la edad y resaltar en la lista la tarifa que se aplica.

## Tramos de mayor a menor

```javascript
} else if (edad >= 65) {
    precio = 15;
} else if (edad >= 18) {      // aquí ya sé que edad < 65
    precio = 25;
} else if (edad >= 4) {
```

JavaScript prueba las condiciones de arriba abajo y entra en la **primera** que se cumple [1]. Ordenando de mayor a menor, cada condición solo necesita el límite inferior: el superior lo garantizan las de arriba. Menos condiciones, menos sitios donde equivocarse.

## La validación va primero

```javascript
if (Number.isNaN(edad) || edad < 0) {
```

Si alguien escribe `veinte` o pulsa Cancelar, `Number()` da `NaN` o `0`. La primera rama se queda con los datos que no tienen sentido, y así el resto de la cadena solo trata edades válidas. Es la misma idea que el *early return* del bloque 04: los casos raros, cuanto antes.

> [!NOTE]
> Con Cancelar, `Number(null)` es `0`, y el programa dirá «0 años, gratis». Es el detalle de `prompt()` que visteis en el ejercicio 03 de este bloque. En el bloque 08, con formularios, este problema desaparece.

## Los valores frontera

| Edad | Precio | ¿Por qué? |
| --- | --- | --- |
| 3 | Gratis | No llega a 4 |
| 4 | 18 € | `4 >= 4` |
| 17 | 18 € | No llega a 18 |
| 18 | 25 € | `18 >= 18` |
| 64 | 25 € | No llega a 65 |
| 65 | 15 € | `65 >= 65` |

Los errores de tramos casi siempre están en las fronteras: un `>` donde iba un `>=`. Probad siempre el último valor de un tramo y el primero del siguiente.

## Resaltar el tramo

Guardo el `id` del tramo en una variable y después busco el elemento con una plantilla: `` document.querySelector(`#${idTramo}`) ``. Así la decisión (qué tramo) y la salida (pintarlo) quedan separadas, como pide la plantilla de trabajo.

### Fuentes y Documentación Oficial

1. [if...else (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
