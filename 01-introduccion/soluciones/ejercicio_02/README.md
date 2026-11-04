# Solución · Ejercicio 02 · El script que llegó demasiado pronto

[← Volver al enunciado](../../ejercicios/ejercicio_02/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Descubrir por qué un script colocado en el `<head>` no consigue cambiar la página y arreglarlo con `defer`.

## El síntoma

Al abrir la versión sin resolver, el título no cambia y la consola muestra algo parecido a esto (el texto exacto depende del navegador):

```
Uncaught TypeError: Cannot set properties of null (setting 'textContent')
```

Leedlo despacio, porque os lo vais a encontrar muchas veces: «no puedo poner la propiedad `textContent` a algo que es `null`». Es decir, la constante `titulo` no contiene ningún elemento.

## La causa

Con el `console.log(titulo)` lo confirmáis: aparece `null`. `querySelector()` devuelve `null` cuando no encuentra ningún elemento que cumpla el selector [1].

¿Y por qué no lo encuentra, si el `<h1 id="titulo">` está en el HTML? Por el **momento** en que se ejecuta el script. El navegador lee el HTML de arriba abajo. Cuando llega a un `<script>` normal, se detiene, lo descarga, lo ejecuta y solo después sigue leyendo [2]. Como el script está en el `<head>`, se ejecuta antes de que el navegador haya leído el `<body>`. El `<h1>` todavía no existe.

Es como entrar a un cine antes de que abran la sala y quejarse de que no hay butacas.

## La solución

He añadido `defer` a la etiqueta, sin moverla de sitio:

```html
<script src="app.js" defer></script>
```

El atributo `defer` indica al navegador que ejecute el script cuando haya terminado de leer el documento [2]. Mientras tanto, lo va descargando en paralelo, así que no se pierde tiempo.

La otra solución válida es mover el `<script>` al final del `<body>`, justo antes de `</body>`. Las dos funcionan. En el curso uso las dos, y en la teoría del bloque tenéis una infografía que compara los tres casos.

> [!IMPORTANT]
> Lo que **no** debéis hacer es dejar el script en el `<head>` sin `defer` cuando ese script busca elementos del `<body>`.

## Qué tenéis que observar

- Con `defer`, el `console.log(titulo)` ya muestra el elemento `<h1>` en lugar de `null`.
- El error desaparece y los dos textos cambian.

### Fuentes y Documentación Oficial

1. [Document: querySelector() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
2. [`<script>` HTML script element (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script)
