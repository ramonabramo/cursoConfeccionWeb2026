/* ==============================================================================
   EJERCICIO 04 · Buscador de países (SOLUCIÓN)

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
let paises = [];       // se rellenan UNA vez, al abrir la página
let idEspera = null;

// funciones
async function pedirJSON(url) {
    const respuesta = await fetch(url);
    if (!respuesta.ok) {
        throw new Error(`Error ${respuesta.status} al pedir ${url}`);
    }
    return respuesta.json();
}

// 'Japón' → 'japon'   ·   'BOGOTÁ' → 'bogota'
function normalizar(texto) {
    return texto
        .toLowerCase()
        .normalize('NFD')                      // separa la letra de su tilde: ó → o + ´
        .replace(/[\u0300-\u036f]/g, '');      // y borra las tildes sueltas
}

// filtra EN MEMORIA: no vuelve a pedir nada al servidor
function filtrar() {
    const texto = normalizar(buscar.value.trim());
    const continente = selectContinente.value;

    const visibles = paises.filter((p) => {
        const coincideTexto = normalizar(p.nombre).includes(texto) || normalizar(p.capital).includes(texto);
        const coincideContinente = continente === 'todos' || p.continente === continente;
        return coincideTexto && coincideContinente;
    });

    resultados.replaceChildren();
    visibles.forEach((p) => {
        const li = document.createElement('li');
        li.textContent = `${p.bandera} ${p.nombre} — ${p.capital} (${p.continente})`;
        resultados.append(li);
    });
    estado.textContent = visibles.length === 0
        ? 'Ningún país coincide con la búsqueda.'
        : `Mostrando ${visibles.length} de ${paises.length}`;
}

async function iniciar() {
    estado.textContent = '⏳ Cargando países…';
    buscar.disabled = true;
    selectContinente.disabled = true;
    try {
        paises = await pedirJSON('paises.json');
        buscar.disabled = false;
        selectContinente.disabled = false;
        filtrar();
        buscar.focus();
    } catch (error) {
        estado.textContent = `✘ No se han podido cargar los países (${error.message}).`;
    }
}

// constantes al DOM que queremos escuchar
const buscar = document.querySelector('#buscar');
const selectContinente = document.querySelector('#continente');
const estado = document.querySelector('#estado');
const resultados = document.querySelector('#resultados');

// colocar escuchadores de eventos
// esperar a que el usuario deje de escribir 300 ms antes de filtrar
buscar.addEventListener('input', () => {
    clearTimeout(idEspera);
    idEspera = setTimeout(filtrar, 300);
});

selectContinente.addEventListener('change', filtrar);

iniciar();
