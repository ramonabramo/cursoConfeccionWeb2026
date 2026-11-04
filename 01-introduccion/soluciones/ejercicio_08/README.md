# Solución · Ejercicio 08 · Caza de errores en la consola

[← Volver al enunciado](../../ejercicios/ejercicio_08/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Encontrar y corregir tres errores leyendo los mensajes de la consola, uno detrás de otro.

## Cómo se lee un error

Cada mensaje rojo de la consola tiene tres partes que debéis buscar siempre:

1. **El tipo de error**: `TypeError`, `ReferenceError`, `SyntaxError`…
2. **El mensaje**: la explicación, en inglés, de qué ha fallado.
3. **El fichero y la línea**: a la derecha, algo como `app.js:13`. Si hacéis clic, el navegador os lleva a esa línea.

Y una idea más: cuando JavaScript encuentra un error, **deja de ejecutar el resto del script** [1]. Por eso la consola solo os enseña un error cada vez. No es que haya uno; es que no llega a ver los demás.

## Los tres errores, en el orden en que aparecen

### Error 1 · `TypeError: console.lg is not a function`

```javascript
console.lg('Empezando el programa…');   // ✘
console.log('Empezando el programa…');  // ✔
```

Una errata. `console.lg` no existe, así que JavaScript no puede ejecutarlo como función. Este tipo de error aparece cuando un valor no es del tipo que se esperaba [2].

### Error 2 · `ReferenceError: nombrecurso is not defined`

```javascript
${nombrecurso}   // ✘ c minúscula
${nombreCurso}   // ✔ como se declaró
```

JavaScript distingue entre mayúsculas y minúsculas. `nombreCurso` y `nombrecurso` son, para él, dos variables diferentes, y la segunda no se ha declarado nunca [3]. Es probablemente el error más frecuente del primer mes de curso.

### Error 3 · `TypeError: Cannot set properties of null (setting 'textContent')`

```javascript
document.querySelector('#resultado');  // ✘ no existe en el HTML
document.querySelector('#salida');     // ✔
```

Este ya lo conocéis del ejercicio 02. El `id` del párrafo es `salida`, no `resultado`. `querySelector()` no encuentra nada y devuelve `null` [4]. El error no salta en esa línea, sino más abajo, cuando se intenta escribir en `null`. Ojo con esto: **la línea del error no siempre es la línea del fallo**. A veces hay que mirar hacia arriba para ver de dónde viene el valor.

Fijaos en que esta línea está casi al principio del programa y, sin embargo, su error es el último en aparecer. La constante se crea sin problema; el fallo solo se manifiesta cuando por fin se usa.

## Qué tenéis que observar

- Con los tres errores corregidos, el párrafo muestra el mensaje de enhorabuena.
- La consola termina con «Programa terminado sin errores».

| Error | Tipo | Causa |
| --- | --- | --- |
| `console.lg` | `TypeError` | Errata en el nombre del método |
| `nombrecurso` | `ReferenceError` | Mayúsculas y minúsculas distintas |
| `#resultado` | `TypeError` | El `id` no existe en el HTML → `null` |

### Fuentes y Documentación Oficial

1. [What went wrong? Troubleshooting JavaScript (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_went_wrong)
2. [TypeError: "x" is (not) "y" (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Unexpected_type)
3. [ReferenceError: "x" is not defined (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_defined)
4. [Document: querySelector() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
