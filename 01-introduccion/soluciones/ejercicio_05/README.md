# Solución · Ejercicio 05 · textContent frente a innerHTML

[← Volver al enunciado](../../ejercicios/ejercicio_05/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Escribir el mismo texto con `textContent` y con `innerHTML`, ver la diferencia y descubrir por qué `innerHTML` es peligroso con textos que no controláis.

## La diferencia

```javascript
const frase = 'Esto es <strong>muy</strong> importante';

salidaTexto.textContent = frase;
salidaHtml.innerHTML = frase;
```

| Propiedad | Qué hace con `<strong>` | Lo que veis |
| --- | --- | --- |
| `textContent` | Lo trata como caracteres normales | `Esto es <strong>muy</strong> importante` |
| `innerHTML` | Lo interpreta como una etiqueta HTML | Esto es **muy** importante |

`textContent` trabaja con texto plano [1]. `innerHTML`, en cambio, lee y escribe HTML: lo que le dais se convierte en elementos de la página [2].

## El peligro

Ahora fijaos en el comentario:

```javascript
const comentario = '<img src="x" onerror="alert(\'¡Te he colado código!\')">';
salidaComentario.textContent = comentario;
```

Con `textContent` se ve como texto y no pasa nada. Si hicisteis el experimento de cambiarlo por `innerHTML`, visteis saltar un `alert`. ¿Qué ha ocurrido? El navegador ha creado una imagen de verdad, no ha podido cargar `x`, ha disparado el atributo `onerror`… y ha ejecutado el código que alguien había escondido ahí.

Ahora sustituid ese `alert` por un código que roba datos y entenderéis el problema. Este tipo de ataque se llama *cross-site scripting* (XSS), y MDN avisa expresamente de que `innerHTML` es una vía para sufrirlo cuando el contenido viene de fuera [2]. Por eso también desaconseja usar `innerHTML` para poner simple texto [1].

> [!IMPORTANT]
> Mi regla para todo el curso: si el texto lo escribe el usuario o llega de fuera, **siempre** `textContent`. `innerHTML` solo con HTML que habéis escrito vosotros y que no mezcla nada externo.

## Qué tenéis que observar

- El primer párrafo muestra las etiquetas `<strong>` como texto.
- El segundo muestra «muy» en negrita.
- El tercero muestra la etiqueta `<img …>` como texto y **no** salta ningún aviso.

### Fuentes y Documentación Oficial

1. [Node: textContent property — Differences from innerHTML (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)
2. [Element: innerHTML property — Security considerations (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)
