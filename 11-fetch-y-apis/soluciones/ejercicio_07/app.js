/* ==============================================================================
   EJERCICIO 07 · Enviar datos con POST (SOLUCIÓN)

   OBJETIVO:
   Enviar datos a un servidor con fetch usando el método POST, un cuerpo en
   JSON y la cabecera Content-Type, y procesar la respuesta, validando antes
   el formulario y bloqueando el botón mientras se envía.

   PASOS A REALIZAR:
   1. Declarar API y la función async publicar(datos): hace
      fetch(`${API}/posts`, { method: 'POST', headers: { 'Content-Type':
      'application/json; charset=UTF-8' }, body: JSON.stringify(datos) }),
      comprueba respuesta.ok y devuelve respuesta.json().
   2. Al enviar el formulario: evitar la recarga y, si reportValidity()
      falla, salir.
   3. Preparar el objeto { title, body, userId: 1 } con lo escrito en el
      formulario.
   4. Desactivar el botón, mostrar ⏳ Enviando… y, dentro de un try, enviar
      con await publicar(datos).
   5. Con la respuesta: mostrar ✔ Publicado con el id 101, escribir la
      respuesta completa con JSON.stringify(respuesta, null, 2) y reiniciar
      el formulario.
   6. En el catch, mostrar el error; en el finally, reactivar el botón.
   ============================================================================== */

// estructura del programa principal
const API = 'https://jsonplaceholder.typicode.com';

// funciones
// envía un objeto al servidor y devuelve lo que responda
async function publicar(datos) {
    const respuesta = await fetch(`${API}/posts`, {
        method: 'POST',                                            // qué queremos hacer
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },  // en qué formato va
        body: JSON.stringify(datos),                               // el contenido, como texto JSON
    });
    if (!respuesta.ok) {
        throw new Error(`Error ${respuesta.status} al publicar`);
    }
    return respuesta.json();
}

// constantes al DOM que queremos escuchar
const formPublicar = document.querySelector('#formPublicar');
const campoTitulo = document.querySelector('#titulo');
const campoCuerpo = document.querySelector('#cuerpo');
const btnPublicar = document.querySelector('#btnPublicar');
const estado = document.querySelector('#estado');
const salidaRespuesta = document.querySelector('#respuesta');

// colocar escuchadores de eventos
formPublicar.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!formPublicar.reportValidity()) {
        return;
    }

    // entradas
    const datos = {
        title: campoTitulo.value.trim(),
        body: campoCuerpo.value.trim(),
        userId: 1,
    };

    // procesamiento asíncrono
    btnPublicar.disabled = true;    // nada de enviar dos veces
    estado.textContent = '⏳ Enviando…';
    try {
        const creado = await publicar(datos);
        // salidas
        estado.textContent = `✔ Publicado con el id ${creado.id}.`;
        salidaRespuesta.textContent = JSON.stringify(creado, null, 2);
        formPublicar.reset();
    } catch (error) {
        estado.textContent = `✘ No se ha podido publicar (${error.message}).`;
    } finally {
        btnPublicar.disabled = false;
    }
});
