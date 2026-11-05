# Solución · Ejercicio 11 · Buenos días, buenas tardes

[← Volver al enunciado](../../ejercicios/ejercicio_11/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Saludar según la hora del día y cambiar el color de fondo de la página.

## La hora del sistema

```javascript
const horaReal = new Date().getHours();
```

`new Date()` crea un objeto con la fecha y la hora del momento en que se ejecuta [1]. `getHours()` devuelve la hora, de 0 a 23, en la hora **local** del ordenador [2]. En el bloque 10 os enseñaré las fechas a fondo; para este ejercicio basta con esta línea.

## Probar sin esperar a la noche

```javascript
const hora = Number(prompt('Hora (0 a 23)', String(horaReal)));
```

Para comprobar los tres tramos no podéis esperar a que llegue la noche. Ofrezco la hora real como valor por defecto: si pulsáis Aceptar, se usa la real; si escribís otra, la vuestra. Es un truco habitual para **probar** programas que dependen del tiempo.

## Tramos que no empiezan en cero

Aquí no puedo ordenar los tramos de mayor a menor como en el ejercicio 10, porque la noche son **dos** trozos (de 21 a 23 y de 0 a 5). Por eso uso condiciones con dos límites (`hora >= 6 && hora < 14`) y dejo la noche para el `else`: es todo lo que no es mañana ni tarde.

| Hora | Saludo |
| --- | --- |
| 6 a 13 | ☀️ Buenos días |
| 14 a 20 | 🌇 Buenas tardes |
| 21 a 23 y 0 a 5 | 🌙 Buenas noches |

## Cambiar el fondo

`document.body` es el elemento `<body>`, y su `style.backgroundColor` cambia el color de toda la página. La decisión (qué color) se toma en el procesamiento; la salida solo lo aplica.

### Fuentes y Documentación Oficial

1. [Date (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
2. [Date.prototype.getHours() (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours)
