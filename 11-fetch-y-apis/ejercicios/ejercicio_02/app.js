/* ==============================================================================
   EJERCICIO 02 · respuesta.ok y los códigos de estado

   OBJETIVO:
   Comprobar que fetch solo rechaza la promesa cuando falla la red, no
   cuando el servidor responde con un error como 404, y aprender a comprobar
   respuesta.ok y respuesta.status.

   PASOS A REALIZAR:
   1. Seleccionar el contenedor de botones (delegación) y las seis celdas.
   2. Declarar limpiar() que ponga las celdas a —.
   3. Al pulsar un botón (closest('[data-url]')), leer su data-url, limpiar
      y mostrarla.
   4. Dentro de un try: hacer await fetch(url). Si llega aquí, fetch NO ha
      rechazado: escribir no y mostrar status, statusText y ok. En la
      conclusión: si ok es true, Todo correcto; si no, El servidor
      respondió, pero con un error: hay que comprobar respuesta.ok.
   5. En el catch: escribir sí en la celda del rechazo y, en la conclusión,
      Fallo de red: TypeError: … (error.name y error.message).
   6. Probad los tres botones y apuntad en un comentario qué ha pasado en
      cada uno.
   ============================================================================== */

// estructura del programa principal

// funciones
// TAREA: limpiar()


// constantes al DOM que queremos escuchar
const botonera = document.querySelector('.botonera');
const resUrl = document.querySelector('#resUrl');
const resRechazo = document.querySelector('#resRechazo');
const resStatus = document.querySelector('#resStatus');
const resStatusText = document.querySelector('#resStatusText');
const resOk = document.querySelector('#resOk');
const resConclusion = document.querySelector('#resConclusion');

// colocar escuchadores de eventos
// TAREA: delegación en la botonera → fetch con try / catch


// TAREA: ¿qué ha pasado con cada botón?

