# Solución · Ejercicio 02 · respuesta.ok y los códigos de estado

[← Volver al enunciado](../../ejercicios/ejercicio_02/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Descubrir en qué casos «falla» `fetch` y cómo saber si una respuesta es buena.

## Los resultados

| Petición | ¿Rechaza? | `status` | `ok` |
| --- | --- | --- | --- |
| `consejos.json` | No | `200` | `true` |
| `no-existe.json` | **No** | `404` | `false` |
| Servidor inexistente | Sí (`TypeError`) | — | — |

## La sorpresa: un 404 no es un error para `fetch`

MDN lo dice sin rodeos: la promesa de `fetch()` **no** se rechaza cuando el servidor responde con un código de error como 404 o 504; solo se rechaza cuando la petición falla, por ejemplo por un error de red [1].

Tiene su lógica: con un 404, el servidor **ha respondido**. Os ha dicho «eso no existe», que es una respuesta perfectamente válida. Quien decide si eso es un error para vuestra aplicación sois vosotros.

## `respuesta.ok` y `respuesta.status`

```javascript
respuesta.status       // 404
respuesta.statusText   // 'Not Found'
respuesta.ok           // false
```

- `status` es el código de estado HTTP [2].
- `statusText` es el mensaje que lo acompaña [3]. Cada servidor puede escribirlo a su manera, así que no lo uséis para tomar decisiones.
- `ok` es `true` si el código está entre 200 y 299, y `false` en cualquier otro caso [4].

Los códigos se agrupan por su primera cifra: los 2xx indican éxito, los 4xx errores del cliente y los 5xx errores del servidor [5]. Lo tenéis en la [infografía de la teoría](../../img/peticion-http.svg).

## La regla para el resto del curso

```javascript
const respuesta = await fetch(url);
if (!respuesta.ok) {
    throw new Error(`Error ${respuesta.status} al pedir ${url}`);
}
const datos = await respuesta.json();
```

Comprobad **siempre** `respuesta.ok` antes de leer los datos. Y si no lo es, lanzad vosotros un error con `throw`: así acaba en el mismo `catch` que los fallos de red, y lo tratáis todo en un único sitio.

Sin esa comprobación, con un 404 intentaríais leer como JSON una página de error en HTML, y obtendríais un error confuso que no dice qué ha pasado de verdad.

### Fuentes y Documentación Oficial

1. [Window: fetch() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch)
2. [Response: status property (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Response/status)
3. [Response: statusText property (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Response/statusText)
4. [Response: ok property (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Response/ok)
5. [HTTP response status codes (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status)
