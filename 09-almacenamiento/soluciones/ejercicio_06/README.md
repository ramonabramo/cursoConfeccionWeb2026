# Solución · Ejercicio 06 · Un borrador que no se pierde

[← Volver al enunciado](../../ejercicios/ejercicio_06/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Guardar automáticamente lo que el usuario va escribiendo para que no lo pierda si recarga o cierra la página.

## Guardar mientras se escribe

```javascript
formMensaje.addEventListener('input', guardarBorrador);
```

Con delegación (el evento `input` de cada campo sube hasta el formulario), una sola línea guarda el borrador con cada letra, se escriba en el asunto o en el mensaje.

¿Guardar con cada tecla no es demasiado? Para un texto de este tamaño, no: `setItem` es una operación rápida. Si guardarais algo muy grande, o lo enviarais a un servidor, convendría esperar a que el usuario dejara de escribir. Lo veréis en el bloque 10.

## Varios campos, una clave

```javascript
const borrador = { asunto: campoAsunto.value, mensaje: campoMensaje.value };
localStorage.setItem(CLAVE, JSON.stringify(borrador));
```

En lugar de una clave por campo, junto todo en un objeto y lo guardo como un único texto JSON [1]. Al leer, `JSON.parse` [2] me devuelve el objeto con los dos campos. Si mañana el formulario tiene cinco campos, solo añado tres propiedades al objeto: la clave y el resto del código no cambian.

## Recuperar al cargar

```javascript
const texto = localStorage.getItem(CLAVE);
if (texto === null) {
    return;
}
const borrador = JSON.parse(texto);
```

Primero compruebo si hay algo guardado (el caso 7 del ejercicio 05): `getItem` devuelve `null` si no existe la clave [3]. Solo si hay texto lo convierto y relleno los campos.

## El ciclo de vida del borrador

| Momento | Qué pasa con el borrador |
| --- | --- |
| El usuario escribe | Se guarda |
| Recarga o vuelve otro día | Se recupera |
| Envía el mensaje | Se borra: ya no hace falta |
| Pulsa «Descartar» y confirma | Se borra |

Borrarlo al enviar es tan importante como guardarlo: si no, la próxima vez que el usuario abriera la página, encontraría un mensaje que ya envió.

## Un detalle de accesibilidad

`#estado` tiene `aria-live="polite"`, como en el bloque 08. Así, quien use un lector de pantalla también se entera de que su borrador se ha guardado o recuperado.

### Fuentes y Documentación Oficial

1. [JSON.stringify() (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
2. [JSON.parse() (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
3. [Storage: getItem() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem)
