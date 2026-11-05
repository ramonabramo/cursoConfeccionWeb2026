# Solución · Ejercicio 07 · Enviar datos con POST

[← Volver al enunciado](../../ejercicios/ejercicio_07/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Enviar una publicación nueva a una API con el método POST y mostrar lo que responde el servidor.

## GET y POST

Hasta ahora todas las peticiones eran **GET**: pedir datos. Para **enviar** datos que el servidor debe procesar o guardar, se usa **POST** [1].

| Método | Para qué | Lleva cuerpo |
| --- | --- | --- |
| `GET` | Pedir datos | No |
| `POST` | Enviar datos para crear algo | Sí |

## `fetch` con opciones

```javascript
fetch(`${API}/posts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    body: JSON.stringify(datos),
});
```

`fetch` admite un segundo argumento con las opciones de la petición [2]:

- **`method`**: el método HTTP. Sin él, `fetch` hace un GET.
- **`body`**: el contenido que se envía. Tiene que ser **texto**, así que el objeto se convierte con `JSON.stringify`, igual que al guardarlo en `localStorage` en el bloque 09.
- **`headers`**: información sobre la petición. `Content-Type` le dice al servidor en qué formato va el cuerpo [3]. Sin ella, el servidor podría no entender que lo que le llega es JSON.

Es exactamente el ejemplo de la guía de JSONPlaceholder [4].

## La respuesta

```json
{
  "title": "Mi primera publicación",
  "body": "Enviada desde el ejercicio 07",
  "userId": 1,
  "id": 101
}
```

El servidor devuelve lo que habéis enviado más el `id` que le ha asignado. Con JSONPlaceholder siempre es el 101, porque hay 100 publicaciones de ejemplo.

> [!NOTE]
> La guía de JSONPlaceholder avisa: el recurso **no se crea de verdad** en el servidor, solo se simula. Si después pedís `/posts/101`, obtendréis un 404 [4]. Es justo lo que queremos para practicar: podéis enviar lo que queráis sin ensuciar nada.

## Detalles de un buen envío

- **Validar antes de enviar.** `reportValidity()` del bloque 08 [5]: si el formulario no es válido, ni siquiera se hace la petición.
- **Botón desactivado mientras se envía.** Si el usuario hace doble clic, sin esta línea enviaríais dos publicaciones.
- **El formulario se vacía solo si ha ido bien.** Si falla, el usuario no pierde lo que ha escrito y puede volver a intentarlo.
- **`finally` reactiva el botón**, vaya bien o mal.

### Fuentes y Documentación Oficial

1. [POST request method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods/POST)
2. [Using the Fetch API (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
3. [Content-Type header (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Type)
4. [JSONPlaceholder — Guide](https://jsonplaceholder.typicode.com/guide/)
5. [HTMLFormElement: reportValidity() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reportValidity)
