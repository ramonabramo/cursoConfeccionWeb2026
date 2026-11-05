# Solución · Ejercicio 10 · Seleccionar con Ctrl y Mayús

[← Volver al enunciado](../../ejercicios/ejercicio_10/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Programar los tres gestos de selección de un explorador de archivos.

## Las teclas viajan en el evento

```javascript
if (e.shiftKey && ultimo !== null) { … }
else if (e.ctrlKey || e.metaKey) { … }
else { … }
```

El objeto evento de un clic dice si estaban pulsadas Mayús [1], Control [2] o ⌘ [3]. No hay que escuchar el teclado aparte: la información llega con el propio clic.

Compruebo `ctrlKey || metaKey` porque en Mac el gesto equivalente es ⌘+clic. Además, en macOS, Ctrl+clic abre el menú contextual, así que sin `metaKey` el ejercicio no funcionaría allí.

## Los tres casos

| Gesto | Qué pasa con `seleccionados` | ¿Cambia el ancla? |
| --- | --- | --- |
| Clic | Solo el pulsado | Sí |
| Ctrl/⌘+clic | Se añade o se quita el pulsado | Sí |
| Mayús+clic | Todos entre el ancla y el pulsado | **No** |

El **ancla** (`ultimo`) es el punto de partida del rango. Mayús+clic no la mueve: así, si pulsáis el archivo 2 y después Mayús+clic en el 5 y luego en el 4, el rango se recalcula siempre desde el 2, como en cualquier explorador.

## Estado → renderizar

Los escuchadores solo cambian el array de índices; `renderizar()` pinta a partir de él. Es el patrón del apartado 9 del bloque: la página nunca dice algo distinto de lo que hay en el estado.

> [!NOTE]
> La lista lleva `user-select: none` en el CSS. Sin eso, Mayús+clic seleccionaría además el **texto** de la lista, con su fondo azul, y el efecto quedaría feo.

### Fuentes y Documentación Oficial

1. [MouseEvent: shiftKey property (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/shiftKey)
2. [MouseEvent: ctrlKey property (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/ctrlKey)
3. [MouseEvent: metaKey property (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/metaKey)
