# Solución · Ejercicio 03 · Mini-tuit con atajos de teclado

[← Volver al enunciado](../../ejercicios/ejercicio_03/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Un campo para escribir mensajes cortos con contador de caracteres, botón de publicar y dos atajos de teclado.

## El objeto evento

```javascript
texto.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.ctrlKey) { … }
});
```

Cuando ocurre un evento, el navegador llama a vuestra función y le pasa un **objeto con los detalles** de lo que ha pasado. Por convenio se llama `e` o `evento`. Hasta ahora no lo necesitabais: un clic es un clic. Pero con el teclado sí importa **qué** tecla se ha pulsado.

| Propiedad | Qué contiene | Ejemplo |
| --- | --- | --- |
| `e.key` | La tecla pulsada [1] | `'a'`, `'Enter'`, `'Escape'`, `'ArrowUp'` |
| `e.ctrlKey` | Si la tecla Ctrl estaba pulsada [2] | `true` / `false` |

Existen también `e.shiftKey` y `e.altKey`, que funcionan igual.

## `keydown`

`keydown` se dispara al pulsar una tecla [3]. Lo escucho en el propio `textarea`, así que los atajos solo funcionan mientras se está escribiendo en él. Si quisierais atajos para toda la página, lo escucharíais en `document`.

## Dos eventos que colaboran

| Evento | Para qué |
| --- | --- |
| `input` | Mantener el contador al día con cada cambio del texto |
| `keydown` | Detectar los atajos |

¿Por qué no usar `keydown` también para el contador? Porque `keydown` no se entera de todo: si el usuario pega texto con el ratón, no hay tecla, pero sí hay `input`. Cada evento para lo que mejor sabe hacer.

## Detalles que marcan la diferencia

- **El botón se desactiva** cuando no se puede publicar (`btnPublicar.disabled`). El usuario ve de un vistazo que algo no está bien.
- **`publicar()` vuelve a comprobar** el texto, aunque el botón esté desactivado. El atajo de teclado no pasa por el botón, así que la función se protege sola.
- **`texto.focus()`** devuelve el cursor al campo después de publicar, para seguir escribiendo sin tocar el ratón.
- **`textContent`** para el mensaje: lo escribe el usuario. Ya conocéis el motivo.

### Fuentes y Documentación Oficial

1. [KeyboardEvent: key property (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key)
2. [KeyboardEvent: ctrlKey property (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/ctrlKey)
3. [Element: keydown event (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event)
