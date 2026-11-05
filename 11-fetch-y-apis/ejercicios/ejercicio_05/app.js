/* ==============================================================================
   EJERCICIO 05 · Estados de carga, errores y reintentos

   OBJETIVO:
   Gestionar los cuatro estados de una interfaz que carga datos (cargando,
   datos, vacío y error), distinguir los tipos de error que pueden ocurrir
   con fetch y permitir reintentar la última carga.

   PASOS A REALIZAR:
   1. Declarar ESCENARIOS: un objeto que asocie cada opción del select con {
      url, retraso }: normal → noticias.json; lento → noticias.json con 2000
      ms; vacio → sin-noticias.json; roto → roto.json; 404 → no-existe.json.
   2. Declarar esperar(ms) del bloque 10 y pedirJSON(url) del ejercicio 03.
   3. Declarar mensajeError(error): si error.name es 'SyntaxError', El
      fichero ha llegado, pero no es un JSON válido; si es 'TypeError', No
      hay conexión con el servidor; en otro caso, error.message.
   4. Declarar la función async cargar(): lee el escenario, desactiva el
      botón, oculta Reintentar, vacía la lista y muestra ⏳ Cargando
      noticias…; espera el retraso; pide los datos. Si llegan vacíos,
      muestra 📭 No hay noticias; si no, pinta un li por noticia (título en
      negrita y resumen) y escribe 4 noticias. En el catch, ✘ con
      mensajeError y muestra Reintentar. En el finally, reactiva el botón.
   5. Escuchar click en Cargar y en Reintentar → cargar().
   ============================================================================== */

// estructura del programa principal
// TAREA: ESCENARIOS


// funciones
const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function pedirJSON(url) {
    const respuesta = await fetch(url);
    if (!respuesta.ok) {
        throw new Error(`Error ${respuesta.status} al pedir ${url}`);
    }
    return respuesta.json();
}

// TAREA: mensajeError(error)


// TAREA: async function cargar()


// constantes al DOM que queremos escuchar
const selectEscenario = document.querySelector('#escenario');
const btnCargar = document.querySelector('#btnCargar');
const btnReintentar = document.querySelector('#btnReintentar');
const estado = document.querySelector('#estado');
const listaNoticias = document.querySelector('#noticias');

// colocar escuchadores de eventos
// TAREA: cargar y reintentar

