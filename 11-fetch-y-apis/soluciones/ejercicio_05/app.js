/* ==============================================================================
   EJERCICIO 05 · Estados de carga, errores y reintentos (SOLUCIÓN)

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
const ESCENARIOS = {
    normal: { url: 'noticias.json', retraso: 0 },
    lento: { url: 'noticias.json', retraso: 2000 },
    vacio: { url: 'sin-noticias.json', retraso: 0 },
    roto: { url: 'roto.json', retraso: 0 },
    404: { url: 'no-existe.json', retraso: 0 },
};

// funciones
const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function pedirJSON(url) {
    const respuesta = await fetch(url);
    if (!respuesta.ok) {
        throw new Error(`Error ${respuesta.status} al pedir ${url}`);
    }
    return respuesta.json();
}

// traduce cada tipo de error a algo que el usuario entienda
function mensajeError(error) {
    if (error.name === 'SyntaxError') {
        return 'El fichero ha llegado, pero no es un JSON válido.';
    }
    if (error.name === 'TypeError') {
        return 'No hay conexión con el servidor.';
    }
    return error.message;   // los que lanzamos nosotros: «Error 404 al pedir…»
}

function crearNoticia(noticia) {
    const li = document.createElement('li');
    const titulo = document.createElement('strong');
    titulo.textContent = noticia.titulo;
    const resumen = document.createElement('p');
    resumen.classList.add('descripcion');
    resumen.textContent = noticia.resumen;
    li.append(titulo, resumen);
    return li;
}

async function cargar() {
    const { url, retraso } = ESCENARIOS[selectEscenario.value];

    // estado: CARGANDO
    btnCargar.disabled = true;
    btnReintentar.hidden = true;
    listaNoticias.replaceChildren();
    estado.textContent = '⏳ Cargando noticias…';

    try {
        await esperar(retraso);                 // simula una conexión lenta
        const noticias = await pedirJSON(url);

        if (noticias.length === 0) {
            // estado: VACÍO
            estado.textContent = '📭 No hay noticias publicadas todavía.';
            return;                             // el finally se ejecuta igualmente
        }
        // estado: DATOS
        noticias.forEach((n) => listaNoticias.append(crearNoticia(n)));
        estado.textContent = `${noticias.length} noticias`;
    } catch (error) {
        // estado: ERROR
        estado.textContent = `✘ ${mensajeError(error)}`;
        btnReintentar.hidden = false;
        console.error(error);
    } finally {
        btnCargar.disabled = false;
    }
}

// constantes al DOM que queremos escuchar
const selectEscenario = document.querySelector('#escenario');
const btnCargar = document.querySelector('#btnCargar');
const btnReintentar = document.querySelector('#btnReintentar');
const estado = document.querySelector('#estado');
const listaNoticias = document.querySelector('#noticias');

// colocar escuchadores de eventos
btnCargar.addEventListener('click', cargar);
btnReintentar.addEventListener('click', cargar);
