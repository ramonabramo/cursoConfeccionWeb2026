# Solución · Ejercicio 03 · Validación nativa del navegador

[← Volver al enunciado](../../ejercicios/ejercicio_03/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Validar un formulario solo con atributos HTML y comprobar que el navegador se encarga del resto.

## Los atributos de validación

```html
<input type="text" name="nombre" required minlength="2">
<input type="email" name="email" required>
<input type="number" name="edad" required min="18" max="99">
<input type="text" name="cp" required pattern="[0-9]{5}">
<input type="checkbox" name="acepto" required>
```

| Atributo | Regla |
| --- | --- |
| `required` | El campo no puede quedar vacío; en una casilla, tiene que estar marcada [1] |
| `minlength` | Número mínimo de caracteres [2] |
| `type="email"` | El texto debe tener formato de email [3] |
| `min` / `max` | Valor mínimo y máximo de un número [4] |
| `pattern` | El valor debe encajar con una expresión regular [5] |

`[0-9]{5}` significa «exactamente cinco caracteres del 0 al 9». Es una expresión regular, un minilenguaje para describir patrones de texto. No hace falta que la dominéis: con unos pocos patrones típicos tenéis para casi todo.

## El navegador valida antes de `submit`

Haced la prueba: con el formulario vacío, pulsad «Registrarme». El navegador muestra un aviso junto al primer campo incorrecto… y **vuestro escuchador ni se ejecuta**. MDN lo explica: si los datos no cumplen las reglas, el navegador no envía el formulario [6].

Eso significa que, cuando vuestro código de `submit` se ejecuta, **los datos ya son válidos**. No hace falta comprobarlo otra vez.

## Estilos con `:user-invalid`

```css
input:user-invalid {
    border-color: #dc2626;
}
```

`:user-invalid` selecciona los campos inválidos, pero **solo después de que el usuario haya interactuado con ellos** o haya intentado enviar el formulario [7]. Así no aparece todo en rojo nada más cargar la página, cuando el usuario aún no ha escrito nada. Existe también `:invalid`, que se aplica desde el principio y suele resultar agresivo.

## `formulario.reset()`

Devuelve todos los campos a su valor inicial [8]. Lo uso tras el registro para dejar el formulario listo para otra persona.

## ¿Es suficiente con esto?

Para muchos formularios, sí. Pero tiene limitaciones:

- Los mensajes los escribe el navegador, en su idioma y con su estilo.
- No sirve para reglas propias, como «las dos contraseñas deben coincidir».

Para eso está la API de validación, que veréis en los ejercicios 04 y 05.

> [!IMPORTANT]
> La validación en el navegador es una **comodidad para el usuario**, no una medida de seguridad. Cualquiera puede saltársela. Si los datos se envían a un servidor, el servidor tiene que volver a validarlos siempre [6].

### Fuentes y Documentación Oficial

1. [`required` HTML attribute (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/required)
2. [`minlength` HTML attribute (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/minlength)
3. [`<input type="email">` HTML attribute value (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/email)
4. [`min` HTML attribute (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/min)
5. [`pattern` HTML attribute (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/pattern)
6. [Client-side form validation (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation)
7. [`:user-invalid` CSS pseudo-class (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:user-invalid)
8. [HTMLFormElement: reset() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reset)
