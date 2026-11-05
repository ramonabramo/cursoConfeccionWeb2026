/* ==============================================================================
   EJERCICIO 02 · respuesta.ok y los códigos de estado (SOLUCIÓN)

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
function limpiar() {
    [resUrl, resRechazo, resStatus, resStatusText, resOk, resConclusion].forEach((celda) => {
        celda.textContent = '—';
    });
}

// constantes al DOM que queremos escuchar
const botonera = document.querySelector('.botonera');
const resUrl = document.querySelector('#resUrl');
const resRechazo = document.querySelector('#resRechazo');
const resStatus = document.querySelector('#resStatus');
const resStatusText = document.querySelector('#resStatusText');
const resOk = document.querySelector('#resOk');
const resConclusion = document.querySelector('#resConclusion');

// colocar escuchadores de eventos
botonera.addEventListener('click', async (e) => {
    const boton = e.target.closest('[data-url]');
    if (!boton) {
        return;
    }
    const url = boton.dataset.url;
    limpiar();
    resUrl.textContent = url;

    try {
        const respuesta = await fetch(url);
        // si llegamos aquí, el servidor HA RESPONDIDO (aunque sea con un error)
        resRechazo.textContent = 'no';
        resStatus.textContent = respuesta.status;          // 200, 404…
        resStatusText.textContent = respuesta.statusText;  // 'OK', 'Not Found'…
        resOk.textContent = respuesta.ok;                  // true solo con 200-299
        resConclusion.textContent = respuesta.ok
            ? 'Todo correcto.'
            : 'El servidor respondió, pero con un error: hay que comprobar respuesta.ok.';
    } catch (error) {
        // solo llega aquí si NO hubo respuesta: sin red, servidor inexistente, CORS…
        resRechazo.textContent = 'sí';
        resConclusion.textContent = `Fallo de red: ${error.name}: ${error.message}`;
    }
});

// Lo observado:
// · consejos.json     → no rechaza · 200 · ok true.
// · no-existe.json    → ¡tampoco rechaza! · 404 · ok false. El servidor contestó.
// · servidor inexistente → rechaza con TypeError: no hubo respuesta que leer.
