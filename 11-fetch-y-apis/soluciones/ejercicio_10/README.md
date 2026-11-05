# Solución · Ejercicio 10 · Un buscador que cancela

[← Volver al enunciado](../../ejercicios/ejercicio_10/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Un buscador que lanza una petición por tecla y cancela la anterior, para que nunca se muestren resultados de una búsqueda vieja.

## El problema: respuestas desordenadas

Con la casilla marcada (sin cancelación), escribid «ma» deprisa. Se lanzan dos peticiones: «m» y «ma». Cada una tarda un tiempo al azar, así que a veces **la de «m» llega la última**. La página termina con una lista que no corresponde a lo que hay escrito en el campo. Con una red real pasa lo mismo, y es un fallo muy común.

## La solución: cancelar la anterior

```javascript
controlador?.abort();
controlador = new AbortController();
const respuesta = await fetch('paises.json', { signal: controlador.signal });
```

Cada búsqueda crea su propio `AbortController` [1] y pasa su **señal** a `fetch` [2]. Cuando llega la siguiente búsqueda, `abort()` cancela la anterior: su promesa se rechaza con un `AbortError` [3] [4]. Solo la última puede terminar, así que lo que se ve siempre corresponde a lo escrito.

`controlador?.abort()` usa el encadenamiento opcional: la primera vez, `controlador` es `null` y la línea no hace nada.

## Un error que no es un error

```javascript
if (error.name === 'AbortError') {
    apuntar(`«${texto}» → cancelada`);
    return;
}
```

La cancelación llega al `catch` como cualquier fallo, pero la he provocado yo. No tiene sentido mostrar «✘ Error» al usuario: la apunto en el registro y salgo. Cualquier otro error, en cambio, sí se muestra.

## La «red lenta»

Un fichero local llega en milisegundos, y así no se vería nada. `esperar(ms, signal)` simula el retraso: es la pausa del bloque 10, pero escuchando el evento `abort` de la señal para rechazar en cuanto se cancela [2]. Así, las búsquedas canceladas se detienen en cuanto se cancelan, tanto durante la espera como durante el `fetch`.

> [!TIP]
> En un buscador real combinaríais las dos técnicas: la espera de 300 ms del bloque 10 (para no lanzar tantas peticiones) y la cancelación (para que, si aun así se pisan, gane la última).

### Fuentes y Documentación Oficial

1. [AbortController (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)
2. [AbortSignal (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal)
3. [AbortController: abort() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort)
4. [Window: fetch() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch)
