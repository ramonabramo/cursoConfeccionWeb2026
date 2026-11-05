# Solución · Ejercicio 09 · Eliminar con «Deshacer»

[← Volver al enunciado](../../ejercicios/ejercicio_09/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Eliminar tareas con la opción de deshacer durante unos segundos, como hacen el correo o las aplicaciones de notas.

## Borrar ya, confirmar después

```javascript
const [tarea] = tareas.splice(indice, 1);
pendiente = { tarea, indice };
idEspera = setTimeout(confirmar, SEGUNDOS * 1000);
```

La tarea desaparece **en el acto**: el usuario ve el resultado sin esperar. Pero no la tiro: guardo la tarea y su posición en `pendiente`. Y programo con `setTimeout` el momento en que el borrado será definitivo [1].

`splice(indice, 1)` devuelve un array con lo que ha quitado; con la desestructuración `[tarea]` me quedo directamente con el elemento.

## Deshacer es cancelar

```javascript
clearTimeout(idEspera);
tareas.splice(pendiente.indice, 0, pendiente.tarea);
```

`clearTimeout` cancela el temporizador antes de que se cumpla [2], y `splice(posicion, 0, elemento)` vuelve a meter la tarea **en su sitio**, no al final. Para el usuario, es como si nunca la hubiera borrado.

## Dos borrados seguidos

¿Qué pasa si elimino una tarea y, antes de cuatro segundos, elimino otra? Solo guardo un `pendiente`, así que el primero se **confirma** en ese momento (cancelo su temporizador y llamo a `confirmar()` a mano) y el aviso pasa a ofrecer deshacer el segundo. Es lo mismo que hace Gmail. Sin esa comprobación, el temporizador del primero ocultaría el aviso del segundo antes de tiempo.

## Accesibilidad

El aviso tiene `role="status"`: los lectores de pantalla anuncian su texto cuando aparece, sin mover el foco. Y «Deshacer» es un botón, al que se llega con Tab.

### Fuentes y Documentación Oficial

1. [Window: setTimeout() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout)
2. [Window: clearTimeout() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Window/clearTimeout)
