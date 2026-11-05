# Solución · Ejercicio 09 · Búsquedas recientes

[← Volver al enunciado](../../ejercicios/ejercicio_09/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Un historial de búsquedas como el de cualquier buscador: el más reciente arriba, sin repetidos y con un máximo de cinco.

## Tres reglas en tres líneas

```javascript
historial = historial.filter((h) => h.toLowerCase() !== texto.toLowerCase());
historial.unshift(texto);
historial = historial.slice(0, MAXIMO);
```

| Línea | Regla |
| --- | --- |
| `filter` | Si ya se había buscado, se quita de donde estaba, aunque fuera con otras mayúsculas |
| `unshift` | La nueva va **delante** [1] |
| `slice(0, MAXIMO)` | Solo se quedan las cinco primeras; la más antigua se pierde |

El orden importa: primero quito el duplicado y después añado. Así, buscar otra vez «javascript» no la duplica: la **sube** al primer puesto.

## Carga segura

```javascript
return Array.isArray(datos) ? datos.filter((d) => typeof d === 'string') : [];
```

Es la carga a la defensiva del apartado 4. Además de comprobar que es un array, me quedo solo con los textos: si alguien hubiera guardado `[1, null, "hola"]`, el resto del programa (que hace `toLowerCase()`) fallaría con los que no son textos.

## Borrar de verdad

`removeItem` elimina la clave del almacén [2]. Podría guardar un array vacío, pero así el almacén queda limpio y `getItem` vuelve a devolver `null`, como el primer día.

## Detalles de usabilidad

- Las búsquedas son **botones**: se pueden pulsar con el ratón y con el teclado. Al pulsar uno, el texto vuelve al campo y el foco también, para corregirlo o lanzarlo.
- Uso `textContent` para pintar las búsquedas: son textos escritos por el usuario, y no deben interpretarse como HTML.

### Fuentes y Documentación Oficial

1. [Array.prototype.unshift() (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)
2. [Window: localStorage property (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
