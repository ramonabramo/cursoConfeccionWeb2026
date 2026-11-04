# Solución · Ejercicio 04 · Galería con eventos de ratón

[← Volver al enunciado](../../ejercicios/ejercicio_04/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Hacer que una galería reaccione al ratón: información al pasar por encima, favoritas con doble clic y un registro de los últimos eventos.

## Un escuchador por elemento

```javascript
fotos.forEach((foto) => {
    foto.addEventListener('mouseover', …);
    …
});
```

`querySelectorAll` + `forEach` + `addEventListener` es la forma directa de poner el mismo comportamiento en varios elementos. Dentro del `forEach`, la variable `foto` es cada una de las fotos, así que cada escuchador sabe a qué foto pertenece. En el ejercicio 07 veréis una alternativa con un solo escuchador para todas.

## Los cuatro eventos

| Evento | Cuándo se dispara | Aquí |
| --- | --- | --- |
| `click` | Al pulsar y soltar el botón del ratón [1] | Solo se registra |
| `dblclick` | Al hacer doble clic [2] | Marca o desmarca favorita |
| `mouseover` | Cuando el puntero entra en el elemento [3] | Muestra la información |
| `mouseout` | Cuando el puntero sale [4] | Restaura el mensaje |

Fijaos en el registro al hacer doble clic: aparecen **dos `click` antes del `dblclick`**. Un doble clic son, al fin y al cabo, dos clics. Si alguna vez usáis los dos eventos en el mismo elemento, tenedlo en cuenta.

## `e.type` y `e.currentTarget`

```javascript
li.textContent = `${e.type} · ${e.currentTarget.dataset.nombre}`;
```

- `e.type` es el nombre del evento que ha ocurrido: `'click'`, `'mouseover'`… [5]. Gracias a él, una sola función `registrar` sirve para los cuatro.
- `e.currentTarget` es el elemento **que tiene el escuchador** [6]: la foto.

¿Por qué no `e.target`? Porque `target` es el elemento exacto donde ha ocurrido el evento, y dentro de cada foto hay un `<span>` con el nombre. Si pasáis el ratón por el texto, `target` sería el `span`, que no tiene `data-nombre`. `currentTarget`, en cambio, es siempre la foto. En el ejercicio 06 veréis esta diferencia con todo detalle.

Por el mismo motivo, al mover el ratón entre el emoji y el texto de una misma foto veréis algún `mouseout` y `mouseover` de más en el registro: entrar o salir del `span` también cuenta.

## Un registro con tope

```javascript
registro.prepend(li);
if (registro.children.length > MAX_REGISTRO) {
    registro.lastElementChild.remove();
}
```

Lo nuevo entra por arriba y, si hay más de cinco, sale el más antiguo por abajo. Una cola con tamaño fijo, hecha con lo que visteis en el bloque 06.

### Fuentes y Documentación Oficial

1. [Element: click event (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event)
2. [Element: dblclick event (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event)
3. [Element: mouseover event (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event)
4. [Element: mouseout event (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseout_event)
5. [Event: type property (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Event/type)
6. [Event: currentTarget property (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget)
