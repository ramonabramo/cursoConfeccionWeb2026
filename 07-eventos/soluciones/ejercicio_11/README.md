# Solución · Ejercicio 11 · Pestañas

[← Volver al enunciado](../../ejercicios/ejercicio_11/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Un componente de pestañas en el que solo una puede estar activa.

## Exclusión mutua

```javascript
pestanas.forEach((pestana) => {
    pestana.setAttribute('aria-selected', pestana === pestanaElegida ? 'true' : 'false');
});
```

El truco de las pestañas es no pensar «desactivo la que estaba activa», sino «**recorro todas** y activo solo la elegida». Así no hace falta recordar cuál estaba activa, y es imposible que queden dos encendidas por un descuido. El mismo patrón sirve para un menú, unos filtros o unas opciones de color: cualquier grupo en el que solo puede haber uno.

Lo mismo con los paneles: `panel.hidden = panel.id !== idPanel` oculta todos menos el que corresponde [1].

## La pestaña dice qué panel es el suyo

```html
<button role="tab" aria-controls="panel-horario" …>
<section role="tabpanel" id="panel-horario" …>
```

`aria-controls` guarda el `id` del panel que controla cada pestaña. Lo leo con `getAttribute` y no necesito ninguna tabla de equivalencias en el JavaScript: la relación está en el HTML.

## Accesibilidad: los roles

| Elemento | Rol | Atributo clave |
| --- | --- | --- |
| Contenedor | `tablist` | `aria-label` |
| Cada botón | `tab` [2] | `aria-selected` [3] |
| Cada panel | `tabpanel` | `aria-labelledby` |

Con estos roles, un lector de pantalla anuncia «pestaña, 2 de 3, seleccionada». Y el estilo aprovecha lo mismo: el CSS pinta de azul la pestaña con `[aria-selected="true"]`, así que el aspecto y la accesibilidad no pueden desincronizarse.

> [!TIP]
> Las pestañas completas también se manejan con las flechas del teclado. Es un buen reto para después del ejercicio 13: escuchad `keydown` en el contenedor y mover el foco con `ArrowLeft` y `ArrowRight`.

### Fuentes y Documentación Oficial

1. [HTMLElement: hidden property (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/hidden)
2. [ARIA: tab role (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)
3. [ARIA: aria-selected attribute (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)
