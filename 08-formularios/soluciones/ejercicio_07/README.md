# Solución · Ejercicio 07 · Formulario dinámico: campos que aparecen

[← Volver al enunciado](../../ejercicios/ejercicio_07/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Un formulario que se adapta a lo que elige el usuario: total en vivo, campos de factura que aparecen y desaparecen y un botón para empezar de cero.

## Un escuchador para todo el formulario

```javascript
formulario.addEventListener('input', actualizar);
formulario.addEventListener('change', actualizar);
```

Es la delegación del bloque 07: los eventos `input` y `change` de cada campo suben hasta el formulario, así que con dos escuchadores cubro la cantidad, los tres radios y la casilla. ¿Por qué los dos eventos? `input` reacciona mientras se escribe la cantidad [1]; `change`, al marcar un radio o una casilla [2]. Con los dos, la interfaz siempre está al día.

## `actualizar()`: la interfaz sigue al formulario

Es el mismo patrón que `renderizar()` en el bloque 07: una función que lee el estado (aquí, lo que hay elegido en el formulario) y pone la página a juego. No importa qué haya cambiado: `actualizar` lo revisa todo.

### Mostrar y ocultar con `hidden`

```javascript
datosFactura.hidden = !conFactura;
```

La propiedad `hidden` se corresponde con el atributo HTML del mismo nombre: un elemento con `hidden` no se muestra. Es más claro que añadir una clase solo para ocultar.

### `required` solo si el campo está visible

```javascript
nif.required = conFactura;
```

Esto es importante. Si el NIF fuera siempre obligatorio, nadie podría hacer un pedido **sin** factura: el formulario exigiría un campo que ni siquiera se ve. Por eso pongo o quito `required` a la vez que muestro u oculto el grupo. Un campo oculto nunca debe bloquear el envío.

## Reiniciar bien

```javascript
btnLimpiar.addEventListener('click', () => {
    formulario.reset();
    actualizar();
});
```

`reset()` devuelve todos los campos a su valor inicial [3]: la casilla de factura se desmarca, la cantidad vuelve a 1… pero **el grupo de factura seguiría visible**, porque `reset` solo toca los valores, no lo que habéis cambiado con JavaScript. Por eso llamo a `actualizar()` justo después.

¿Por qué un botón `type="button"` y no `type="reset"`? Porque con un botón normal controlo el orden: primero `reset()` y **después** `actualizar()`. Así me aseguro de que la interfaz se calcula con los valores ya reiniciados.

## Un `pattern` para el NIF

```html
<input id="nif" pattern="[0-9]{8}[A-Za-z]">
```

Ocho cifras y una letra [4]. Comprueba el formato, no si el NIF existe de verdad: eso requeriría calcular la letra de control.

## Algunos totales

| Cajas | Envío | Total |
| --- | --- | --- |
| 1 | Estándar | 23.85 € |
| 3 | Urgente | 67.65 € |
| 2 | Recogida | 39.80 € |

### Fuentes y Documentación Oficial

1. [Element: input event (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event)
2. [HTMLElement: change event (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
3. [HTMLFormElement: reset() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reset)
4. [`pattern` HTML attribute (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/pattern)
