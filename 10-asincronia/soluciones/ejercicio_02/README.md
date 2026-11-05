# Solución · Ejercicio 02 · Cronómetro con setInterval

[← Volver al enunciado](../../ejercicios/ejercicio_02/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Un cronómetro con inicio, pausa, vueltas y reinicio.

## `setInterval`: «hazlo una y otra vez»

```javascript
idIntervalo = setInterval(pintar, 100);
```

`setInterval(función, intervalo)` ejecuta la función **repetidamente**, cada vez que pasa el intervalo indicado en milisegundos, hasta que se detenga [1]. Como `setTimeout`, devuelve un identificador [1], y con él se detiene:

```javascript
clearInterval(idIntervalo);
```

`clearInterval` para la repetición [2].

| | `setTimeout` | `setInterval` |
| --- | --- | --- |
| Se ejecuta | Una vez | Una y otra vez |
| Se cancela con | `clearTimeout(id)` | `clearInterval(id)` |
| Ejemplo | Un aviso, una pausa | Un reloj, un cronómetro, un carrusel |

## Medir, no contar

Podríais pensar en sumar 100 ms en cada tick del intervalo. Funcionaría… más o menos. El intervalo indicado no está garantizado: si el navegador está ocupado, un tick puede llegar tarde [1], y esos retrasos se acumulan. Al cabo de unos minutos, vuestro cronómetro iría atrasado.

La solución es **medir** con el reloj del sistema:

```javascript
function tiempoActual() {
    return acumulado + (enMarcha ? Date.now() - inicio : 0);
}
```

`Date.now()` da el instante actual en milisegundos [3]. Restándole el momento en que arrancó, sé exactamente cuánto ha pasado, llegue el tick cuando llegue. El intervalo ya no cuenta el tiempo: **solo repinta la pantalla**.

¿Y el `acumulado`? Guarda el tiempo de los tramos anteriores a cada pausa. Al reanudar, empiezo un tramo nuevo con otro `inicio`.

## Nunca dos intervalos a la vez

```javascript
if (idIntervalo === null) {
    // arrancar
} else {
    pausar();
}
```

Si el botón arrancara un intervalo cada vez que se pulsa, dos clics crearían dos intervalos repintando a la vez, y el `id` del primero se perdería: no habría forma de pararlo. Usar `idIntervalo === null` como «está parado» resuelve los dos problemas. Es la misma lección que con `setTimeout` en el ejercicio 01.

## Formatear el tiempo

```javascript
String(5).padStart(2, '0')   // '05'
```

`padStart` rellena un texto por la izquierda hasta la longitud indicada. Lo uso para que los minutos y los segundos tengan siempre dos cifras. Y `%`, el operador resto del bloque 02, me da lo que sobra al quitar los minutos enteros y los segundos enteros.

### Fuentes y Documentación Oficial

1. [Window: setInterval() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Window/setInterval)
2. [Window: clearInterval() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Window/clearInterval)
3. [Date.now() (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now)
