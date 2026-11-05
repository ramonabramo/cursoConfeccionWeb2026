/* ==============================================================================
   EJERCICIO 04 · Buscador de países

   OBJETIVO:
   Cargar los datos una sola vez al abrir la página y filtrarlos en memoria
   mientras el usuario escribe, esperando a que deje de teclear (setTimeout
   + clearTimeout) y comparando los textos sin tener en cuenta mayúsculas ni
   tildes.

   PASOS A REALIZAR:
   1. Declarar el estado: paises = [] y idEspera = null. Reutilizar
      pedirJSON del ejercicio 03.
   2. Declarar normalizar(texto): pasa a minúsculas y quita las tildes con
      texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').
   3. Declarar filtrar(): toma el texto buscado y el continente, filtra
      paises (por nombre o capital normalizados, y por continente salvo
      'todos') y pinta un li por país: 🇪🇸 España — Madrid (Europa). Escribe
      Mostrando 5 de 22 o Ningún país coincide.
   4. Al abrir la página: mostrar Cargando países…, desactivar los dos
      controles, cargar paises.json en el estado, reactivarlos y llamar a
      filtrar(). Si falla, mostrar el error.
   5. Escuchar input en el buscador: cancelar la espera anterior con
      clearTimeout y programar filtrar() para dentro de 300 ms.
   6. Escuchar change en el select → filtrar() directamente.
   ============================================================================== */

// estructura del programa principal
let paises = [];
let idEspera = null;

// funciones
async function pedirJSON(url) {
    const respuesta = await fetch(url);
    if (!respuesta.ok) {
        throw new Error(`Error ${respuesta.status} al pedir ${url}`);
    }
    return respuesta.json();
}

// TAREA: normalizar(texto)


// TAREA: filtrar()


// TAREA: async function iniciar() → cargar paises.json una vez


// constantes al DOM que queremos escuchar
const buscar = document.querySelector('#buscar');
const selectContinente = document.querySelector('#continente');
const estado = document.querySelector('#estado');
const resultados = document.querySelector('#resultados');

// colocar escuchadores de eventos
// TAREA: input con espera de 300 ms


// TAREA: change en el select


// TAREA: iniciar()

