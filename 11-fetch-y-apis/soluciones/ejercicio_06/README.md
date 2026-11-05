# Solución · Ejercicio 06 · Una API pública: usuarios y publicaciones

[← Volver al enunciado](../../ejercicios/ejercicio_06/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Pedir datos a una API real de Internet: primero un listado de usuarios y, al pulsar uno, sus publicaciones.

## Qué es una API REST

Una API es la puerta que un servidor abre para que otros programas le pidan datos [1]. Las API REST organizan esos datos como **recursos** con su propia URL:

| URL | Devuelve |
| --- | --- |
| `/users` | Todos los usuarios |
| `/users/1` | El usuario con `id` 1 |
| `/posts?userId=1` | Las publicaciones del usuario 1 |

JSONPlaceholder es una API pública y gratuita pensada para practicar, sin registro, que permite peticiones desde cualquier origen [2]. Sus datos son inventados, pero su estructura es la de una API real.

## Pedir a otro origen: CORS

Hasta el ejercicio 05, la página pedía ficheros a su propio servidor. Ahora pide a `https://jsonplaceholder.typicode.com`, que es **otro origen**. El navegador solo os deja leer la respuesta si el servidor lo autoriza con unas cabeceras especiales: es el mecanismo CORS [3]. JSONPlaceholder lo autoriza, así que funciona. Si probáis con un servidor que no lo hace, veréis un error de CORS en la consola, y vuestro código no puede hacer nada para saltárselo: es el servidor quien decide.

Lo tenéis explicado en la [infografía de la teoría](../../img/cors.svg).

## Coger solo lo que hace falta

Un usuario de JSONPlaceholder tiene esta forma (resumida):

```json
{
  "id": 1,
  "name": "Leanne Graham",
  "email": "Sincere@april.biz",
  "address": { "street": "Kulas Light", "city": "Gwenborough", … },
  "company": { "name": "Romaguera-Crona", … }
}
```

No hay que pintarlo todo. Elegís lo que interesa y llegáis a lo que está anidado con puntos: `usuario.address.city`, `usuario.company.name`. Es el bloque 05 con datos que no habéis escrito vosotros.

## Un parámetro en la URL

```javascript
pedirJSON(`${API}/posts?userId=${id}`)
```

Lo que va detrás de `?` son los **parámetros** de la petición. En lugar de descargar las 100 publicaciones y filtrarlas, le pido a la API solo las del usuario elegido, y ella filtra por mí [2]. Menos datos viajando y menos trabajo en el navegador.

Todas estas peticiones son de tipo **GET**, el método para pedir datos sin modificar nada en el servidor [4]. Es el que usa `fetch` si no le decís otra cosa.

## La tarjeta seleccionada

```javascript
t.classList.toggle('seleccionado', t.contains(boton));
```

`contains` dice si un elemento está dentro de otro. Cada tarjeta se marca solo si contiene el botón pulsado. El usuario ve en todo momento de quién son las publicaciones que está leyendo.

> [!NOTE]
> En el momento de preparar este ejercicio no he podido comprobar el acceso en directo a JSONPlaceholder desde mi entorno. He verificado el formato de sus datos en su guía y en su repositorio oficial, y he probado el código con una copia de esos datos. Si el día de clase la API no responde, veréis el mensaje de error del `catch`: aprovechadlo para comprobar que funciona.

### Fuentes y Documentación Oficial

1. [API (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Glossary/API)
2. [JSONPlaceholder — Guide](https://jsonplaceholder.typicode.com/guide/)
3. [Cross-Origin Resource Sharing (CORS) (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS)
4. [GET request method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods/GET)
