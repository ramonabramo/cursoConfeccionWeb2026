# Solución · Ejercicio 10 · Reloj y fecha en vivo

[← Volver al enunciado](../../ejercicios/ejercicio_10/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Un reloj que avanza solo, la fecha en español y una tabla con las particularidades de `Date`.

## El reloj

```javascript
actualizar();
setInterval(actualizar, 1000);
```

Cada segundo se crea un `new Date()` nuevo con el instante actual y se escribe la hora con `toLocaleTimeString('es-ES')`, que ya sabe poner los ceros y los dos puntos [1]. La primera llamada, fuera del intervalo, evita que el reloj pase un segundo mostrando `--:--:--`.

Fijaos en que **no cuento** los segundos: cada vez pregunto la hora al sistema. Así, aunque el intervalo se retrase un poco (y se retrasa, como visteis en el apartado 2), el reloj nunca va mal.

## La fecha larga

```javascript
const formatoLargo = new Intl.DateTimeFormat('es-ES', { dateStyle: 'full' });
formatoLargo.format(ahora);   // 'jueves, 5 de noviembre de 2026'
```

`Intl.DateTimeFormat` escribe fechas según el idioma [2]. Lo creo una sola vez, fuera de `actualizar`, porque las opciones no cambian. Con `'en-GB'` el mismo código escribe `Thursday 5 November 2026`: sin tocar una línea de lógica, otro idioma.

## Las rarezas de `Date`

| Método | Devuelve | Cuidado |
| --- | --- | --- |
| `getDay()` | 0 a 6 | **0 es domingo** [3] |
| `getMonth()` | 0 a 11 | **0 es enero** [4] |

Por eso uso arrays de nombres que empiezan por domingo y por enero: el número de `Date` es directamente la posición.

## El día del año

```javascript
const unoDeEnero = new Date(hoy.getFullYear(), 0, 1);
const diaDelAnio = Math.floor((hoy.getTime() - unoDeEnero.getTime()) / MS_DIA) + 1;
```

`getTime()` da los milisegundos desde 1970 [5]. Restando los de hoy y los del 1 de enero, tengo los milisegundos transcurridos; dividiendo entre los de un día, los días. El `+ 1` es porque el 1 de enero es el día 1, no el 0.

### Fuentes y Documentación Oficial

1. [Date.prototype.toLocaleTimeString() (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString)
2. [Intl.DateTimeFormat (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)
3. [Date.prototype.getDay() (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay)
4. [Date (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
5. [Date.prototype.getTime() (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime)
