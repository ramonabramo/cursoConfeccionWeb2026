# Solución · Ejercicio 03 · Del script interno al fichero externo

[← Volver al enunciado](../../ejercicios/ejercicio_03/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Sacar el JavaScript que estaba escrito dentro de `index.html` y llevarlo a su propio fichero, `app.js`.

## Por qué lo hacemos

La página funcionaba igual antes y después. Entonces, ¿para qué tanto lío? Por orden. Con el código dentro del HTML:

- No podéis reutilizar ese JavaScript en otra página sin copiarlo y pegarlo.
- El HTML se llena de cosas que no son estructura.
- Cuando el programa crezca, encontrar un fallo será como buscar las llaves en un bolso lleno.

Con un fichero externo, cada lenguaje vive en su casa: `index.html` para la estructura, `style.css` para el aspecto y `app.js` para el comportamiento. La documentación de MDN muestra el script interno y el externo como formas válidas de cargar JavaScript, y recomienda no mezclar código dentro de atributos HTML como `onclick` [1].

## La solución paso a paso

### 1. El HTML queda limpio

Del final del `<body>` desaparece todo el bloque `<script> … </script>`, y en el `<head>` aparece una sola línea:

```html
<script src="app.js" defer></script>
```

Fijaos en que el `<script>` va **vacío**. Cuando una etiqueta `<script>` tiene atributo `src`, el navegador carga el fichero indicado e ignora lo que haya escrito entre las etiquetas [2]. Y le pongo `defer` porque está en el `<head>`, como visteis en el ejercicio 02.

### 2. Cada instrucción en su sitio

He colocado cada línea en la sección que le corresponde de la plantilla:

| Instrucción | Sección |
| --- | --- |
| `const curso = 'JavaScript en el cliente';` | estructura del programa principal |
| `const salida = document.querySelector('#salida');` | constantes al DOM |
| `console.log('Código ejecutado desde app.js');` | procesamiento |
| `salida.textContent = 'Bienvenidos al curso de ' + curso;` | salidas |

Esto no lo exige JavaScript, que ejecutaría las líneas en cualquier orden lógico. Lo hago yo, y os pido que lo hagáis vosotros, para que cualquier `app.js` del curso se lea siempre de la misma manera.

## Qué tenéis que observar

- La página se ve exactamente igual que antes.
- En la consola el mensaje ahora dice «desde app.js». Así comprobáis que se está ejecutando el fichero externo y no un resto olvidado en el HTML.

## Errores típicos

- Copiar también las etiquetas `<script>` y `</script>` dentro de `app.js`. Un fichero `.js` solo lleva JavaScript; esas etiquetas son HTML y provocan un error de sintaxis.
- Dejar el bloque antiguo en el HTML. Entonces el código se ejecuta dos veces y la constante `salida` se declara dos veces, lo que también da error.

### Fuentes y Documentación Oficial

1. [What is JavaScript? — How do you add JavaScript to your page? (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_is_JavaScript)
2. [`<script>` HTML script element (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script)
