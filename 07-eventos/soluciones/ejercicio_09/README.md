# Solución · Ejercicio 09 · Coordenadas del ratón

[← Volver al enunciado](../../ejercicios/ejercicio_09/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Mostrar dónde está el ratón y en qué cuadrante de una zona se ha hecho clic.

## Dos formas de medir

```javascript
posicion.textContent = `Ventana: (${e.clientX}, ${e.clientY}) · zona: (${e.offsetX}, ${e.offsetY})`;
```

- `clientX` y `clientY` se miden desde la esquina de la **ventana** visible [1]. Si la zona está a 230 píxeles del borde izquierdo, su esquina tiene `clientX` 230.
- `offsetX` y `offsetY` se miden desde la esquina del **elemento** [2]. En la esquina de la zona valen 0, estén donde estén la zona y la página.

Moved la ventana del navegador o haced *scroll*: las coordenadas de la ventana cambian; las de la zona, no. Por eso, para saber **dónde se ha pulsado dentro de algo**, la buena es `offsetX`.

## El cuadrante

```javascript
const vertical = y < zona.clientHeight / 2 ? 'arriba' : 'abajo';
const horizontal = x < zona.clientWidth / 2 ? 'a la izquierda' : 'a la derecha';
```

`clientWidth` y `clientHeight` dan el tamaño interior de la zona. Comparando la posición con la mitad, sé en qué lado estoy. Dos ternarios y cuatro combinaciones posibles.

## Los hijos no estorban

Dentro de la zona hay tres elementos: las dos líneas y el punto. Si el puntero pasara por encima de ellos, `offsetX` se mediría **desde ese hijo**, no desde la zona [2], y los números saltarían. Por eso llevan en el CSS `pointer-events: none`: el ratón los atraviesa como si no estuvieran.

## Mover el punto

El punto tiene `position: absolute`, así que `style.left` y `style.top` lo colocan respecto a la zona, que tiene `position: relative`. Como `offsetX` también se mide desde la zona, el mismo número sirve para las dos cosas. El margen negativo del CSS centra el punto justo bajo el puntero.

Y `mouseleave` avisa cuando el puntero sale de la zona, sin dispararse al pasar por sus hijos [3].

### Fuentes y Documentación Oficial

1. [MouseEvent: clientX property (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/clientX)
2. [MouseEvent: offsetX property (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/offsetX)
3. [Element: mouseleave event (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseleave_event)
