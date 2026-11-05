# Solución · Fase 4 · El formulario con validación

[← Volver al enunciado](../../ejercicios/ejercicio_04/) · [← Volver al proyecto](../../README.md)

## Qué pedía esta fase

Un formulario para añadir tareas, con validación propia, mensajes junto a cada campo y accesible con el teclado.

## `novalidate`: los mensajes los ponemos nosotros

```html
<form id="formTarea" novalidate>
```

Con `novalidate`, el navegador no muestra sus burbujas de error al enviar [1] y la validación queda en nuestras manos. Es lo que hicisteis en el bloque 08: así los mensajes salen en español, junto al campo y con el estilo de la aplicación.

## Tres campos, tres comprobaciones

| Campo | Regla | Cómo se comprueba |
| --- | --- | --- |
| Título | Obligatorio, de 3 a 60 caracteres | `value.trim().length` |
| Prioridad | Obligatoria | `formulario.prioridad.value` es `''` si no hay ninguna marcada |
| Fecha | Opcional; completa y no anterior a hoy | `validity.badInput` [2] y comparación de textos |

El caso de la fecha merece una explicación. Si alguien escribe solo el día en el selector, el valor del campo es `''`, igual que si no hubiera escrito nada. `validity.badInput` es lo que distingue los dos casos: es `true` cuando el usuario ha escrito algo que el navegador no puede convertir en un valor [2]. Y `formulario.fecha.min = fechaDeHoy()` hace que el selector ni siquiera ofrezca días pasados [3]; aun así, lo compruebo, porque la fecha también se puede escribir a mano.

## Mostrar los errores de forma accesible

```javascript
mostrarError(campoTitulo, 'error-titulo', errorTitulo);
```

`mostrarError`, en la vista, hace dos cosas:

1. Escribe el mensaje en el párrafo de error del campo. Ese párrafo está enlazado con `aria-describedby`, así que un lector de pantalla lo lee al llegar al campo.
2. Pone `aria-invalid="true"` en el campo (o `false` si se ha corregido) [4].

Además, el foco va al **primer** campo con error. Quien usa el teclado no tiene que buscar qué ha fallado.

Y mientras el usuario corrige, el evento `input` borra el error de ese campo. No hay nada más frustrante que un mensaje de error que sigue ahí después de haber arreglado el problema.

## Dos barreras: formulario y modelo

```javascript
if (!validarFormulario()) { … return; }
try {
    tablero.agregar(datos);
} catch (error) {
    mostrarMensaje(mensaje, `✘ ${error.message}`);
}
```

¿Por qué validar dos veces, si el modelo ya comprueba el título? Porque son dos trabajos distintos:

- **El formulario** valida para **ayudar al usuario**: mensajes por campo, foco, explicaciones.
- **El modelo** valida para **proteger los datos**: da igual de dónde vengan (el formulario, la edición con doble clic, `localStorage` o la API), una tarea inválida no entra.

El `try` es la red de seguridad: si algún día el formulario dejara pasar algo, el modelo lo pararía.

### Fuentes y Documentación Oficial

1. [Using HTML form validation and the Constraint Validation API (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Constraint_validation)
2. [ValidityState: badInput property (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState/badInput)
3. [&lt;input type="date"&gt; (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/date)
4. [ARIA: aria-invalid attribute (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid)
