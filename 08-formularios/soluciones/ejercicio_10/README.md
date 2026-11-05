# Solución · Ejercicio 10 · Cuestionario con nota

[← Volver al enunciado](../../ejercicios/ejercicio_10/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Corregir un cuestionario de cuatro preguntas, decir en cada una si se ha acertado y calcular la nota.

## Un grupo por pregunta

```html
<input type="radio" name="p1" value="a">
<input type="radio" name="p1" value="b">
```

Los botones de opción que comparten `name` forman un grupo: solo uno puede estar marcado [1]. Cada pregunta tiene su `name` (`p1`, `p2`…), y cada opción, su `value`.

## Leer la respuesta con `FormData`

```javascript
const elegida = datos.get(pregunta.name);
```

`get` devuelve el `value` del botón marcado en ese grupo, o `null` si no se ha marcado ninguno [2]. No hace falta buscar el `:checked` de cada grupo a mano: `FormData` ya lo ha hecho.

## Tres resultados posibles

| Respuesta | `elegida` | Corrección |
| --- | --- | --- |
| La correcta | `'b'` | ✔ Correcta |
| Otra | `'a'` | ✘ La respuesta era: null |
| En blanco | `null` | ⚠️ Sin contestar… |

Distinguir el «en blanco» del «mal» es un detalle de buena experiencia: no es lo mismo equivocarse que olvidarse de una pregunta. Las clases `acierto` y `fallo` colorean el `fieldset`, y el texto lo dice con palabras, para quien no distinga los colores (es la regla del apartado 6).

## Las respuestas, en el JavaScript

El HTML solo tiene las opciones; cuál es la buena está en `PREGUNTAS`. Si estuviera en el HTML (por ejemplo, en un `data-correcta`), bastaría con mirar el código de la página para saberla. Ojo: en el JavaScript también se puede ver. Un examen de verdad se corrige en el servidor.

## Volver a empezar

`formulario.reset()` devuelve todos los campos a su estado inicial [3]: desmarca los botones de opción. Lo que JavaScript ha escrito (las correcciones, las clases) no lo toca, porque no son campos del formulario; eso lo borra `limpiar()`.

El botón lleva `type="button"`. Sin él, al estar dentro del formulario, sería un botón de envío y **corregiría** en lugar de reiniciar.

### Fuentes y Documentación Oficial

1. [<input type="radio"> (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/radio)
2. [FormData: get() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/FormData/get)
3. [HTMLFormElement: reset() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reset)
