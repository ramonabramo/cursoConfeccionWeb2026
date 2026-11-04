# Solución · Ejercicio 04 · Los tres canales de salida

[← Volver al enunciado](../../ejercicios/ejercicio_04/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Enviar el mismo mensaje por los tres canales de salida del bloque y comparar quién lo ve y cómo se comporta cada uno.

## La solución paso a paso

### Canal 1 · La consola

```javascript
console.log(mensaje);
```

Escribe en la consola de las herramientas de desarrollo [1]. El usuario no la ve. Es vuestra libreta de apuntes mientras programáis.

Las variantes `console.warn()` y `console.error()` funcionan igual, pero la consola las destaca con otro color y otro icono. Os vendrán bien para distinguir de un vistazo un aviso de un mensaje normal.

### Canal 2 · El cuadro de aviso

```javascript
alert(mensaje);
```

`alert()` pide al navegador que muestre un cuadro con el mensaje y que **espere** a que el usuario lo cierre [2]. Mientras está abierto, vuestro programa se queda parado en esa línea.

### Canal 3 · La página

```javascript
salida.textContent = mensaje;
```

Escribe el mensaje dentro del párrafo [3]. Es el canal más natural para el usuario: el resultado forma parte de la página, con su diseño, y no interrumpe nada.

## La pregunta del final

¿El párrafo cambia antes o después de cerrar el `alert`? **Después.** El programa se ejecuta línea a línea. Como `alert()` espera a que el usuario pulse Aceptar, la línea de `textContent` no llega a ejecutarse hasta entonces.

Por eso os decía que `alert()` es útil para empezar, pero incómodo en una página de verdad. Imaginad una web que os saluda con tres cuadros seguidos antes de dejaros hacer nada. Pues eso.

## Comparativa

| Canal | ¿Quién lo ve? | ¿Bloquea la página? | ¿Cuándo lo usaré? |
| --- | --- | --- | --- |
| `console.log()` | Solo el programador | No | Siempre, para comprobar valores |
| `alert()` | El usuario | Sí | Solo en los primeros bloques, para pruebas rápidas |
| `textContent` | El usuario | No | En casi todos los ejercicios del curso |

### Fuentes y Documentación Oficial

1. [console: log() static method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/console/log_static)
2. [Window: alert() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert)
3. [Node: textContent property (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)
