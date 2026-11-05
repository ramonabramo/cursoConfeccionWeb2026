# Solución · Ejercicio 13 · Galería con visor

[← Volver al enunciado](../../ejercicios/ejercicio_13/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Un visor de imágenes que se abre por encima de la página, con navegación por botones y por teclado.

## `<dialog>`: una ventana de verdad

```html
<dialog id="visor" class="visor" aria-labelledby="visorTitulo">
```

```javascript
visor.showModal();
visor.close();
```

El elemento `<dialog>` es una ventana que el navegador sabe abrir y cerrar [1]. Con `showModal()` se abre como **modal**: aparece por encima de todo, el resto de la página queda inactiva y el foco entra en el diálogo [2]. `close()` la cierra [3].

Lo mejor es todo lo que trae de serie y que antes había que programar:

| De serie | Antes había que… |
| --- | --- |
| Se cierra con **Esc** [1] | Escuchar `keydown` en la página |
| El resto de la página no responde | Poner una capa transparente encima |
| El foco va al diálogo y vuelve al cerrar | Moverlo a mano |
| Fondo oscurecido con `::backdrop` | Un `div` extra con su CSS |

## Dar la vuelta con el resto

```javascript
actual = (i + FOTOS.length) % FOTOS.length;
```

Con 5 fotos: `mostrar(5)` da `(5 + 5) % 5 = 0`, la primera; `mostrar(-1)` da `(-1 + 5) % 5 = 4`, la última. Sumar la longitud antes del resto evita los negativos. Es el operador `%` del bloque 02 haciendo de las suyas.

## Las flechas

```javascript
visor.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') { … }
});
```

Escucho el teclado en el **visor**, no en la página: solo quiero las flechas mientras está abierto. Como el foco está dentro del diálogo, sus pulsaciones llegan a él [4]. `e.key` da el nombre de la tecla: `'ArrowLeft'`, `'ArrowRight'` [5].

### Fuentes y Documentación Oficial

1. [<dialog>: The Dialog element (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog)
2. [HTMLDialogElement: showModal() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/showModal)
3. [HTMLDialogElement: close() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/close)
4. [Element: keydown event (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event)
5. [KeyboardEvent: key property (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key)
