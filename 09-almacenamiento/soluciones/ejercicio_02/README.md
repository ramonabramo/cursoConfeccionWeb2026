# Solución · Ejercicio 02 · Recuerda mi nombre

[← Volver al enunciado](../../ejercicios/ejercicio_02/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Que la página recuerde el nombre del usuario entre visitas y lo salude al volver.

## El patrón: cargar al empezar

```javascript
renderizar();   // última línea del programa
```

Lo primero que hace la página al cargar es preguntar al almacén si ya nos conocemos:

```javascript
const nombre = localStorage.getItem(CLAVE);
```

`getItem` devuelve el valor guardado o `null` si esa clave no existe [1]. Con ese dato, `renderizar` decide qué zona mostrar. La primera vez aparece la pregunta; las siguientes, el saludo.

## Guardar al cambiar

```javascript
localStorage.setItem(CLAVE, nombre);
renderizar();
```

Cuando el usuario envía su nombre, lo guardo [2] y vuelvo a pintar. Fijaos en que `renderizar` **lee siempre del almacén**: no le paso el nombre como parámetro. Así hay una única fuente de la verdad, y la página se ve igual tanto si acabáis de guardar como si venís de otra visita.

## Olvidar

```javascript
localStorage.removeItem(CLAVE);
```

Borra solo esa clave [3]. Tras renderizar, `getItem` vuelve a dar `null` y reaparece la pregunta.

## La clave con prefijo

```javascript
const CLAVE = 'curso-js:b09e02:nombre';
```

Como os conté en el ejercicio 01, todas las páginas del mismo origen comparten el almacén [4]. Si dos ejercicios usaran la clave `nombre`, uno sobrescribiría el del otro. El prefijo lo evita. Y al guardarla en una constante, solo la escribo una vez: imposible equivocarse con una letra en uno de los tres sitios donde se usa.

## `hidden` para mostrar y ocultar

```javascript
zonaPregunta.hidden = hayNombre;
zonaSaludo.hidden = !hayNombre;
```

Lo visteis en el bloque 08: una línea por zona, y siempre una es lo contrario de la otra.

### Fuentes y Documentación Oficial

1. [Storage: getItem() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem)
2. [Storage: setItem() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem)
3. [Storage: removeItem() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Storage/removeItem)
4. [Window: localStorage property (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
