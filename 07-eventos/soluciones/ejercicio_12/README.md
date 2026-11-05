# Solución · Ejercicio 12 · Valoración con estrellas

[← Volver al enunciado](../../ejercicios/ejercicio_12/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Una valoración de una a cinco estrellas con vista previa al pasar el ratón.

## Dos valores distintos

Lo más importante es separar **lo que se ve** de **lo que se ha elegido**:

| Momento | Se pinta | `valoracion` |
| --- | --- | --- |
| El ratón pasa por la 4.ª | 4 estrellas | No cambia |
| Clic en la 4.ª | 4 estrellas | Pasa a 4 |
| El ratón sale sin pulsar | Lo que diga `valoracion` | No cambia |

`pintar(n)` solo pinta; `valoracion` solo cambia con el clic. Así la vista previa nunca estropea la valoración guardada.

## `mouseenter` en cada estrella, `mouseleave` en el grupo

```javascript
estrella.addEventListener('mouseenter', () => pintar(valor));
contenedor.addEventListener('mouseleave', () => pintar(valoracion));
```

`mouseenter` avisa al entrar en cada estrella [1]. Para restaurar, en cambio, no escucho la salida de cada estrella: entre una y otra hay un pequeño hueco, y el efecto parpadearía. Escucho la salida del **contenedor**: como `mouseleave` no burbujea ni se dispara al moverse entre los hijos, solo avisa cuando el ratón abandona el grupo entero [2].

## `toggle` con condición

```javascript
estrella.classList.toggle('encendida', i < n);
```

La estrella de la posición `i` se enciende si está entre las `n` primeras [3]. Una línea para encender y apagar todas a la vez.

## Con el teclado también

Son botones, así que se llega a ellos con Tab y se pulsan con Enter o Espacio: el clic funciona igual. `aria-pressed` indica a los lectores de pantalla cuál está elegido [4], y el `aria-live` del texto anuncia la valoración. La vista previa es un extra para el ratón; lo esencial funciona sin él.

### Fuentes y Documentación Oficial

1. [Element: mouseenter event (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseenter_event)
2. [Element: mouseleave event (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseleave_event)
3. [Element: classList property (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
4. [ARIA: aria-pressed attribute (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed)
