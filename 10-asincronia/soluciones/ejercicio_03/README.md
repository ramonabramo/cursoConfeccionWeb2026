# Solución · Ejercicio 03 · Cuenta atrás con barra de progreso

[← Volver al enunciado](../../ejercicios/ejercicio_03/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Una cuenta atrás que se para sola en cero, con una barra que se va llenando.

## La estructura: un intervalo que sabe pararse

```javascript
idIntervalo = setInterval(tic, 1000);

function tic() {
    restante--;
    pintar();
    if (restante <= 0) {
        terminar('🎉 ¡Tiempo!');
    }
}
```

Cada segundo, `tic` resta uno y repinta [1]. Y es el propio `tic` el que comprueba si ha llegado a cero y, en ese caso, detiene el intervalo con `clearInterval` [2]. Si os olvidarais de detenerlo, seguiría ejecutándose cada segundo para siempre, con números negativos.

¿`restante <= 0` y no `=== 0`? Es una pequeña precaución: si por cualquier motivo se saltara el cero, `<=` lo para igualmente. Las condiciones de parada, cuanto más amplias, más seguras.

## Una función para terminar

`terminar` se llama desde dos sitios: al llegar a cero y al pulsar «Parar». Las dos situaciones hacen lo mismo (detener el intervalo y dejar los controles listos), así que lo meto en una función. Si mañana añadís un tercer motivo para parar, ya tenéis la función.

## Los controles cuentan la historia

```javascript
btnEmpezar.disabled = true;
campoSegundos.disabled = true;
btnParar.disabled = false;
```

Mientras la cuenta corre, «Empezar» y el campo se desactivan. Así:

- es **imposible** arrancar dos intervalos a la vez, el error que visteis en los ejercicios 01 y 02;
- el usuario entiende de un vistazo qué puede hacer en cada momento.

Prevenir un error desde la interfaz es mejor que gestionarlo desde el código.

## La barra

```javascript
relleno.style.width = `${porcentaje}%`;
```

Es el caso que os anuncié en el bloque 06: `style` tiene sentido para un valor que se calcula al momento. No podéis tener una clase CSS para cada porcentaje.

## Validar la entrada

`Number.isInteger(segundos)` descarta a la vez los textos (`NaN`), los decimales y los campos vacíos. Y el rango evita cuentas atrás de cero segundos o de varias horas.

### Fuentes y Documentación Oficial

1. [Window: setInterval() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Window/setInterval)
2. [Window: clearInterval() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Window/clearInterval)
