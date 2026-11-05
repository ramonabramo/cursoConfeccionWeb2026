# Solución · Ejercicio 08 · Tareas de la API con favoritos

[← Volver al enunciado](../../ejercicios/ejercicio_08/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Una aplicación que muestra las tareas de cada usuario de una API, con filtros, búsqueda y favoritas que se recuerdan. Junta este bloque con los anteriores.

## Dos fuentes de datos

| Dato | De dónde sale | ¿Se puede cambiar? |
| --- | --- | --- |
| Usuarios y tareas | La API | No: son del servidor |
| Favoritas | `localStorage` [1] | Sí: son del usuario |

Las tareas no tienen una propiedad «favorita»: esa información es **vuestra**, no del servidor. Por eso la guardo aparte, como un array de ids, y la **combino** con los datos de la API al pintar: `favoritas.includes(t.id)`. Es la misma idea que el carrito del bloque 09, que guardaba ids y no productos.

## Arrancar en paralelo

```javascript
const [usuarios, tareasIniciales] = await Promise.all([
    pedirJSON(`${API}/users`),
    pedirJSON(`${API}/todos?userId=1`),
]);
```

Para arrancar necesito los usuarios (para el desplegable) y las tareas del primero. Son independientes, así que las pido **a la vez** con `Promise.all` [2], como en la carrera del bloque 10. Y con la desestructuración del bloque 05 saco los dos resultados en una línea, en el mismo orden en que los pedí.

Si cualquiera de las dos falla, `Promise.all` falla entero [2] y salta el `catch`: sin usuarios ni tareas, no hay aplicación que mostrar.

## Qué vuelve a pedir y qué no

| Acción del usuario | ¿Petición a la API? |
| --- | --- |
| Cambiar de usuario | **Sí**: son otras tareas |
| Escribir en el buscador | No: se filtra en memoria |
| Cambiar de filtro | No: se filtra en memoria |
| Marcar una favorita | No: solo `localStorage` |

Esta tabla es la decisión de diseño más importante del ejercicio. Pedid al servidor solo lo que de verdad cambia; todo lo demás, con los datos que ya tenéis.

## Todo lo demás ya lo conocéis

- **Estado → renderizar** (bloque 07): los cuatro escuchadores cambian el estado y llaman a `renderizar()`.
- **Delegación** (bloque 07): un escuchador para los filtros y otro para todas las estrellas, que se recrean en cada renderizado.
- **Espera al escribir** (bloque 10): el buscador espera 300 ms con `setTimeout` [3] y `clearTimeout` [4].
- **Carga segura** (bloque 09): las favoritas se leen dentro de un `try`, validando que sea un array de enteros.

Si este ejercicio os sale, tenéis en la mano todo lo necesario para el proyecto final.

> [!NOTE]
> Como en el ejercicio 06, he verificado el formato de `/users` y `/todos?userId=…` en la guía y el repositorio oficiales de JSONPlaceholder [5] y he probado el código con una copia de esos datos, pero no he podido comprobar el acceso en directo desde mi entorno.

### Fuentes y Documentación Oficial

1. [Window: localStorage property (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
2. [Promise.all() (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)
3. [Window: setTimeout() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout)
4. [Window: clearTimeout() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Window/clearTimeout)
5. [JSONPlaceholder — Guide](https://jsonplaceholder.typicode.com/guide/)
