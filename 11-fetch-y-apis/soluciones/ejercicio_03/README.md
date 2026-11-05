# Solución · Ejercicio 03 · El catálogo llega de un fichero

[← Volver al enunciado](../../ejercicios/ejercicio_03/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Cargar el catálogo de productos desde un fichero JSON al abrir la página y pintarlo como en el bloque 06.

## Los datos salen del código

En el bloque 06, el array `productos` estaba escrito dentro de `app.js`. Ahora vive en `productos.json`, un fichero de **datos** separado del código. Es el paso previo a pedirlos a un servidor de verdad: para vuestro programa, la diferencia será solo la URL.

## `pedirJSON`: la función que usaréis en todo el bloque

```javascript
async function pedirJSON(url) {
    const respuesta = await fetch(url);
    if (!respuesta.ok) {
        throw new Error(`Error ${respuesta.status} al pedir ${url}`);
    }
    return respuesta.json();
}
```

Empaqueta lo que aprendisteis en los ejercicios 01 y 02:

1. Pide la URL [1].
2. Comprueba `respuesta.ok` y, si no es correcta, **lanza un error** con `throw` [2].
3. Devuelve los datos leídos con `json()` [3].

Así, quien la llama solo tiene que preocuparse de una cosa: o recibe datos, o salta al `catch`. Da igual si el problema fue de red, un 404 o un JSON roto: todos los errores acaban en el mismo sitio [4].

Un detalle: `return respuesta.json()` devuelve la promesa sin `await`. Como `pedirJSON` es `async`, quien haga `await pedirJSON(…)` esperará a esa promesa igualmente.

## Cargar al abrir

```javascript
cargarCatalogo();   // última línea
```

No hay que esperar a ningún clic: la página pide sus datos en cuanto arranca. Mientras llegan, el usuario ve «⏳ Cargando catálogo…».

## El botón de reintentar

```javascript
btnReintentar.addEventListener('click', cargarCatalogo);
```

Si falla la carga, aparece un botón que vuelve a llamar a la misma función. Los fallos de red suelen ser pasajeros, así que ofrecer un segundo intento es lo más útil que podéis hacer por el usuario. Fijaos en que `cargarCatalogo` oculta el botón al empezar: así no se queda visible si el segundo intento sale bien.

### Fuentes y Documentación Oficial

1. [Window: fetch() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch)
2. [Response: ok property (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Response/ok)
3. [Response: json() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Response/json)
4. [try...catch (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)
