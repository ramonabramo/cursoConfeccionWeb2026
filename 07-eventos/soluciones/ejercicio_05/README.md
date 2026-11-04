# Solución · Ejercicio 05 · Campos que ayudan: focus, blur y preventDefault

[← Volver al enunciado](../../ejercicios/ejercicio_05/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Mostrar la ayuda de cada campo al entrar en él, bloquear las teclas que no son números en el teléfono y pedir confirmación antes de seguir un enlace.

## `focus` y `blur`

```javascript
campo.addEventListener('focus', () => { … });
campo.addEventListener('blur', () => { … });
```

- `focus` se dispara cuando un elemento **recibe el foco** [1]: al hacer clic en él o al llegar con la tecla Tab.
- `blur`, cuando lo **pierde** [2].

Los uso para añadir y quitar la clase `activo` al contenedor del campo. El CSS hace el resto: cambia el borde y muestra el párrafo de ayuda. JavaScript solo dice «este campo está activo».

```javascript
campo.parentElement.classList.add('activo');
```

`parentElement`, del bloque 06: el escuchador está en el `input`, pero la clase va en su padre, el `div.campo`.

## `preventDefault`: decirle al navegador que no haga lo de siempre

Muchos eventos tienen un **comportamiento por defecto**: al pulsar una tecla en un campo, se escribe; al hacer clic en un enlace, se navega; al enviar un formulario, se recarga la página. `e.preventDefault()` le dice al navegador que vosotros os encargáis y que no haga esa acción [3].

### En una tecla

```javascript
telefono.addEventListener('keydown', (e) => {
    if (!esDigito(e.key) && !TECLAS_PERMITIDAS.includes(e.key)) {
        e.preventDefault();
    }
});
```

Si la tecla no es un dígito ni una de las permitidas, la anulo: el carácter nunca llega al campo. ¿Por qué permitir Backspace, las flechas y Tab? Porque sin ellas el usuario no podría corregir ni pasar al siguiente campo. Bloquear de más es tan malo como bloquear de menos.

La función `esDigito` comprueba dos cosas: que `e.key` tenga **un solo carácter**, para descartar nombres como `'Enter'`, y que esté entre `'0'` y `'9'`.

### En un enlace

```javascript
enlaceSalir.addEventListener('click', (e) => {
    if (!confirm('…')) {
        e.preventDefault();
    }
});
```

Si el usuario cancela, el navegador no sigue el enlace. Si acepta, no hago nada y el navegador navega como siempre.

> [!NOTE]
> El uso estrella de `preventDefault` es el evento `submit` de los formularios, para que no recarguen la página. Lo veréis en el bloque 08.

### Fuentes y Documentación Oficial

1. [Element: focus event (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event)
2. [Element: blur event (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event)
3. [Event: preventDefault() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
