# Solución · Ejercicio 09 · Constructor de URLs

[← Volver al enunciado](../../ejercicios/ejercicio_09/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Construir la dirección de una petición con parámetros y leer los parámetros de una dirección dada.

## A mano no vale

Con el texto de ejemplo, `café & tostadas en Cádiz`, las dos versiones dan esto:

| Forma | Resultado |
| --- | --- |
| `URLSearchParams` | `…/recetas?q=caf%C3%A9+%26+tostadas+en+C%C3%A1diz&pagina=1` |
| Plantilla de texto | `…/recetas?q=café & tostadas en Cádiz&categoria=&pagina=1` |

La versión a mano está **rota**: el `&` del texto parece el separador de un parámetro nuevo, así que el servidor recibiría `q=café ` y un parámetro extraño llamado ` tostadas en Cádiz`. Los espacios y las tildes tampoco son válidos tal cual en una URL.

## `URL` y `searchParams`

```javascript
const url = new URL(BASE);
url.searchParams.set('q', texto);
```

`new URL()` convierte el texto en un objeto con sus partes separadas [1]. Su propiedad `searchParams` gestiona lo que va detrás del `?` [2]: `set` añade un parámetro (o lo sustituye si ya existía) y **codifica** el valor: el espacio pasa a `+`, el `&` a `%26` y la `é` a `%C3%A9` [3]. El servidor lo decodificará y recibirá exactamente lo que escribió el usuario.

Y la categoría solo se añade si se ha elegido una. Con la plantilla habría salido un `categoria=` vacío.

## Leer los parámetros

```javascript
for (const [nombre, valor] of url.searchParams) { … }
```

`searchParams` se puede recorrer con `for...of`, y cada vuelta da una pareja `[nombre, valor]` que desestructuro [3]. Si el texto no es una URL válida, `new URL()` lanza un `TypeError` [1], y el `try` lo convierte en un mensaje.

`fetch` acepta directamente un objeto `URL`: `fetch(url)`. No hace falta convertirlo a texto.

### Fuentes y Documentación Oficial

1. [URL (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/URL)
2. [URL: searchParams property (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/URL/searchParams)
3. [URLSearchParams (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)
