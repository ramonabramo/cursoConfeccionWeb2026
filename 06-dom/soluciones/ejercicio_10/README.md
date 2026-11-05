# Solución · Ejercicio 10 · Un círculo SVG a medida

[← Volver al enunciado](../../ejercicios/ejercicio_10/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Cambiar el tamaño, el color y el borde de un círculo dibujado en SVG.

## SVG también es DOM

```html
<circle id="circulo" cx="110" cy="110" r="40" fill="#cbd5e1" stroke="#334155" stroke-width="2" />
```

El círculo es un elemento más de la página, con sus atributos: el centro (`cx`, `cy`), el radio (`r`) y los colores [1]. Por eso lo selecciono con `querySelector`, como cualquier párrafo.

## `setAttribute`

```javascript
circulo.setAttribute('r', radio);
circulo.setAttribute('stroke-width', grosor);
```

`setAttribute(nombre, valor)` cambia el valor de un atributo, o lo crea si no existe [2]. Fijaos en `stroke-width`: con `setAttribute` el nombre se escribe **igual que en el HTML**, con su guion. No hay que pasarlo a *camelCase*.

## Sin unidades

En SVG, `r="70"` no significa 70 píxeles, sino 70 unidades del `viewBox`. Como el lienzo mide 220 × 220 unidades y se dibuja a 220 × 220 píxeles, aquí coinciden. Pero si cambiarais el `width` del `<svg>` a 440, el círculo se vería el doble de grande sin tocar su radio. Esa es la gracia de los gráficos vectoriales: escalan sin perder calidad.

## Validar antes de dibujar

Un radio de 500 haría que el círculo se saliera del lienzo. Por eso compruebo el rango y, si no es válido, uso un valor razonable y lo digo en la salida. La decisión se toma en el procesamiento; la salida solo dibuja lo decidido.

### Fuentes y Documentación Oficial

1. [<circle> (SVG) (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/circle)
2. [Element: setAttribute() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute)
