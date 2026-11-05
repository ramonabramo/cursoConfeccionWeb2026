# Solución · Ejercicio 11 · Rectángulo: HTML con plantillas

[← Volver al enunciado](../../ejercicios/ejercicio_11/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Calcular el área y el perímetro de un rectángulo y mostrar los resultados en una lista generada desde JavaScript.

## Convertir antes de calcular

```javascript
const base = Number(prompt('Base del rectángulo', '3'));
```

Envuelvo el `prompt()` en `Number()` para tener un número desde el principio. Sin esa conversión, el área saldría bien (`'3' * '4'` es `12`, porque `*` solo sabe multiplicar números), pero el perímetro no: `'3' + '4'` es `'34'`, y `2 * '34'` da `68` en lugar de `14`. El `+` con textos **une**, como visteis en el bloque 02.

## Una plantilla de varias líneas

```javascript
resultado.innerHTML = `
    <ul>
        <li>Área: <strong>${area}</strong></li>
    </ul>`;
```

Las comillas invertidas permiten escribir un texto en **varias líneas** y meter valores con `${}` [1]. Así escribo el HTML tal como lo escribiría en el `index.html`, con su sangría, y queda legible.

Después, `innerHTML` interpreta ese texto como HTML y crea los elementos [2]: la lista, sus puntos y las negritas.

## ¿Y la seguridad?

En el ejercicio 05 os dije que `innerHTML` es peligroso con datos del usuario. Aquí no hay problema: lo que escribe el usuario pasa por `Number()`, así que en la plantilla solo pueden acabar números (o `NaN`). Ninguna etiqueta escrita por el usuario llega al HTML.

Si quisierais mostrar también un **nombre** escrito por el usuario, lo correcto sería ponerlo con `textContent` en un elemento aparte.

### Fuentes y Documentación Oficial

1. [Template literals (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
2. [Element: innerHTML property (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)
