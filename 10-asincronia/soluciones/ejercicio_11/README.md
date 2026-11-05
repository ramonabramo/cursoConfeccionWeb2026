# Solución · Ejercicio 11 · Cuenta atrás hasta una fecha

[← Volver al enunciado](../../ejercicios/ejercicio_11/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Una cuenta atrás hasta la fecha que elija el usuario, actualizada cada segundo.

## Restar dos instantes

```javascript
const ms = destino.getTime() - Date.now();
```

Un `Date` es, por dentro, un número de milisegundos [1]. `getTime()` me da el del destino [2] y `Date.now()` el del momento actual; restando, sé cuántos milisegundos faltan. Toda la cuenta atrás sale de ese número.

## De milisegundos a días, horas, minutos y segundos

```javascript
Math.floor(ms / MS_DIA)                        // días completos
Math.floor((ms % MS_DIA) / MS_HORA)            // horas que sobran tras quitar los días
Math.floor((ms % MS_HORA) / MS_MINUTO)         // minutos que sobran tras quitar las horas
```

Es la misma idea que convertir minutos en horas y minutos: el cociente da las unidades grandes, y el **resto** (`%`), lo que sobra para las pequeñas. Las constantes `MS_DIA`, `MS_HORA`… evitan escribir `86400000` y hacen que la fórmula se entienda.

## La fecha del campo

```javascript
const [anio, mes, dia] = fechaTexto.split('-').map(Number);
destino = new Date(anio, mes - 1, dia);
```

El campo `date` da un texto `AAAA-MM-DD`. Lo parto, lo convierto en números y construyo la fecha **en hora local**, a medianoche. Dos detalles:

- `mes - 1`, porque en `Date` los meses empiezan en 0 [1].
- No uso `new Date('2027-01-01')`: un texto con solo la fecha se interpreta en hora **UTC**, y en España la cuenta llegaría a cero a la una o las dos de la madrugada [1].

## Un solo intervalo

`empezar` llama primero a `clearInterval(idIntervalo)`. Si el usuario elige otra fecha sin que haya terminado la anterior, el intervalo viejo se para antes de crear el nuevo [3]. Sin esa línea, habría dos intervalos escribiendo a la vez en los mismos números.

### Fuentes y Documentación Oficial

1. [Date (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
2. [Date.prototype.getTime() (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime)
3. [Window: clearInterval() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Window/clearInterval)
