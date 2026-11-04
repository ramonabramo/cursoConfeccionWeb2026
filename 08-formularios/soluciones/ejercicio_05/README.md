# Solución · Ejercicio 05 · Contraseñas: reglas propias con setCustomValidity

[← Volver al enunciado](../../ejercicios/ejercicio_05/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Validar una contraseña con reglas que no existen como atributo HTML y comprobar que las dos contraseñas coinciden.

## `setCustomValidity`: vuestras propias reglas

```javascript
campo.setCustomValidity('Las contraseñas no coinciden.');   // inválido, con este mensaje
campo.setCustomValidity('');                                // válido otra vez
```

`setCustomValidity()` asigna un mensaje de error propio a un campo [1]. Mientras ese mensaje no esté vacío, el campo se considera **inválido**: `validity.customError` es `true` y `checkValidity()` devuelve `false`, exactamente igual que con un `required` incumplido [2].

> [!WARNING]
> Hay que **borrar el error** con `setCustomValidity('')` cuando el valor vuelva a ser correcto. Si no, el campo seguirá marcado como inválido para siempre. La guía de MDN lo hace así en todos sus ejemplos [2].

Por eso las dos funciones terminan siempre en un ternario: o mensaje, o texto vacío.

## Comprobar caracteres

```javascript
const caracteres = [...texto];
caracteres.some((c) => c >= 'A' && c <= 'Z');   // ¿alguna mayúscula?
caracteres.some((c) => c >= '0' && c <= '9');   // ¿algún número?
```

El *spread* del bloque 05 convierte el texto en un array de caracteres. Y con `some` pregunto si **alguno** cumple la condición. Comparar letras con `>=` y `<=` funciona porque se comparan por su código: las mayúsculas A–Z van seguidas, igual que los dígitos 0–9. Ojo: con este método la «Ñ» no cuenta como mayúscula, porque no está en ese rango.

## Requisitos en vivo

```javascript
requisitos.forEach((li) => {
    li.classList.toggle('cumplido', cumple[li.dataset.regla]);
});
```

Cada `li` dice en su `data-regla` qué regla representa (`longitud`, `mayuscula`, `numero`), y esa palabra coincide con una clave del objeto que devuelve `comprobarRequisitos`. Así, con `cumple[li.dataset.regla]`, cada `li` sabe si debe marcarse. El CSS cambia la ✘ por una ✔.

## Dos campos que dependen uno del otro

```javascript
clave.addEventListener('input', () => {
    actualizarClave();
    actualizarRepetir();
});
```

Si el usuario escribe las dos contraseñas iguales y después cambia la primera, ya no coinciden. Por eso, al cambiar la clave, también reviso la repetición.

## `reportValidity()`

```javascript
if (!formulario.reportValidity()) {
    return;
}
```

`reportValidity()` hace lo mismo que `checkValidity()`, pero además **muestra los avisos** del navegador junto a los campos con problemas [3]. Con un `setCustomValidity`, el aviso muestra vuestro mensaje. Es la forma más sencilla de tener reglas propias sin construir todo el sistema de mensajes del ejercicio 04.

## Un detalle de acceso: `formulario.usuario`

`formulario.usuario.value` accede al campo cuyo `name` es `usuario`. Los formularios exponen sus controles por nombre, igual que `FormData`.

### Fuentes y Documentación Oficial

1. [HTMLInputElement: setCustomValidity() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setCustomValidity)
2. [Using HTML form validation and the Constraint Validation API (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Constraint_validation)
3. [HTMLFormElement: reportValidity() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reportValidity)
