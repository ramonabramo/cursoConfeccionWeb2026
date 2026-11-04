# Solución · Ejercicio 04 · Mensajes de error propios con la API de validación

[← Volver al enunciado](../../ejercicios/ejercicio_04/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Mantener las reglas de validación del HTML, pero mostrar los mensajes con nuestro propio texto y diseño.

## `novalidate`: el navegador valida, pero no avisa

```html
<form id="registro" novalidate>
```

El atributo `novalidate` indica que el formulario no debe validarse al enviarse [1]. Ojo con lo que eso significa: las reglas (`required`, `min`, `pattern`…) **siguen existiendo** y el navegador sigue sabiendo si cada campo las cumple. Lo único que desaparece son sus avisos automáticos, y el `submit` se dispara siempre. Ahora sois vosotros quienes decidís qué hacer.

## `validity`: qué regla falla

```javascript
campo.validity.valueMissing    // true si es obligatorio y está vacío
campo.validity.typeMismatch    // true si no tiene formato de email
campo.validity.tooShort        // true si no llega a minlength
…
campo.validity.valid           // true si no falla ninguna
```

Cada campo tiene una propiedad `validity`, un objeto `ValidityState` con una propiedad booleana por cada tipo de problema [2]. Tenéis la tabla completa en la [infografía de la teoría](../../img/validacion.svg). `mensajeError` las consulta una a una y devuelve el mensaje que corresponde.

Fijaos en que los mensajes usan los propios atributos: `campo.minLength`, `campo.min` y `campo.max`. Si mañana cambiáis el mínimo en el HTML, el mensaje se actualiza solo.

## `checkValidity()`: ¿todo bien?

```javascript
if (!formulario.checkValidity()) { … }
```

`checkValidity()` devuelve `true` si ningún control del formulario tiene problemas de validez y `false` en caso contrario [3].

## Mostrar el error donde toca

```javascript
parrafoError.textContent = `⚠ ${mensaje}`;
campo.setAttribute('aria-invalid', 'true');
```

Cada campo tiene debajo su propio párrafo de error, enlazado mediante `aria-describedby`:

```html
<input id="email" aria-describedby="error-email">
<p id="error-email" class="error-campo"></p>
```

- `aria-describedby` le dice a un lector de pantalla que ese párrafo describe el campo, así que leerá el error al llegar a él [4].
- `aria-invalid="true"` anuncia que el valor no es válido [5]. Además, lo aprovecho en el CSS para pintar el borde en rojo.

El ejercicio 06 profundiza en la accesibilidad de los errores.

## Llevar al usuario al error

```javascript
formulario.querySelector('[aria-invalid="true"]').focus();
```

Si hay errores, pongo el foco en el primero [6]. El usuario no tiene que buscar qué ha fallado.

## Dos momentos de validación

| Cuándo | Por qué |
| --- | --- |
| `blur`, al salir del campo | El usuario se entera del error enseguida, sin esperar al final |
| `submit` | Comprobación final de **todos** los campos, incluidos los que no ha tocado |

¿Por qué no validar con `input`, en cada letra? Porque mientras alguien está escribiendo su email, durante un buen rato «no es válido», y verlo en rojo desde la primera letra es muy molesto.

### Fuentes y Documentación Oficial

1. [`<form>` HTML form element (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/form)
2. [ValidityState (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState)
3. [HTMLFormElement: checkValidity() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/checkValidity)
4. [ARIA: aria-describedby attribute (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
5. [ARIA: aria-invalid attribute (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid)
6. [HTMLElement: focus() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus)
