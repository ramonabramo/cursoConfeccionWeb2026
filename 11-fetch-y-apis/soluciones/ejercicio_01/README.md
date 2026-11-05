# Solución · Ejercicio 01 · Mi primer fetch: leer un JSON

[← Volver al enunciado](../../ejercicios/ejercicio_01/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Leer los consejos de un fichero JSON con `fetch` en lugar de tenerlos escritos en el código.

## `fetch` en dos pasos

```javascript
const respuesta = await fetch('consejos.json');
const consejos = await respuesta.json();
```

`fetch()` hace una petición y devuelve una **promesa** que se cumple con un objeto `Response`, la respuesta del servidor [1]. Es como recibir un sobre: todavía no lo habéis abierto.

Para leer el contenido hay que «abrir el sobre» con `respuesta.json()`, que lee el cuerpo de la respuesta y lo convierte de JSON a datos de JavaScript. Y también devuelve una promesa [2]. Por eso hay **dos** `await`.

| Paso | Código | Obtenéis |
| --- | --- | --- |
| 1 | `await fetch(url)` | La respuesta: código de estado, cabeceras… |
| 2 | `await respuesta.json()` | Los datos: aquí, un array de objetos |

A partir de ahí, `consejos` es un array normal, como los del bloque 05.

## ¿Por qué hace falta Live Server?

Si abrís la página con doble clic, la consola muestra:

```
TypeError: Failed to fetch
```

Al abrir un fichero local, la dirección empieza por `file:///`, y los navegadores no permiten hacer peticiones a ficheros locales como si fueran peticiones HTTP [3]. Con Live Server, la página se sirve desde `http://127.0.0.1:5500`, un servidor de verdad, y `fetch('consejos.json')` le pide el fichero al mismo servidor que entregó la página.

Por eso, en este bloque, cada ejercicio empieza con el aviso azul. Y por eso el `catch` da un mensaje que **ayuda**: no se limita a decir «error», sino que apunta a la causa más probable.

## La estructura de siempre

El escuchador es una función `async`, como en el bloque 10. Lo nuevo es solo de dónde salen los datos. El resto (mensaje de espera, botón desactivado, `try`/`catch`/`finally`) ya lo conocíais.

## Miradlo en la pestaña Red

Herramientas de desarrollo → **Red** (*Network*). Cada vez que pulsáis el botón aparece una línea con `consejos.json`, su código de estado (`200`) y lo que ha tardado. Pinchad en ella y veréis el contenido del fichero en la pestaña **Respuesta**. Es la herramienta que más vais a usar en este bloque.

### Fuentes y Documentación Oficial

1. [Window: fetch() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch)
2. [Response: json() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Response/json)
3. [Reason: CORS request not HTTP (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS/Errors/CORSRequestNotHttp)
