# Solución · Ejercicio 12 · Un índice automático

[← Volver al enunciado](../../ejercicios/ejercicio_12/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Generar el índice de una página a partir de sus títulos, como hacen muchos blogs y documentaciones.

## Leer la página para construir la página

```javascript
const titulos = document.querySelectorAll('h2');
```

Hasta ahora generabais HTML a partir de datos de un array. Aquí los datos **son la propia página**: los cinco títulos `h2` [1]. Si mañana añadís un sexto, el índice lo incluye sin tocar el código.

## Un destino para cada enlace

```javascript
if (titulo.id === '') {
    titulo.id = `seccion-${i + 1}`;
}
enlace.href = `#${titulo.id}`;
```

Un enlace a `#seccion-2` lleva al elemento con `id="seccion-2"`. Los títulos no tienen `id`, así que se lo pongo yo. Si alguno ya lo tuviera, lo respeto: podría haber otros enlaces que dependen de él.

## Construir de dentro afuera

Creo el enlace, lo meto en su `li` y meto el `li` en la lista. Al final, un único `append` coloca la lista entera en la página. Es el patrón «de datos a HTML» del bloque, solo que los datos vienen del propio documento.

## Accesibilidad

El índice está dentro de un `<nav>` con `aria-label="Índice"`: los lectores de pantalla lo anuncian como una zona de navegación y permiten saltar directamente a ella. Y como son enlaces de verdad, funcionan con el teclado sin escribir una línea más.

### Fuentes y Documentación Oficial

1. [Document: querySelectorAll() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)
