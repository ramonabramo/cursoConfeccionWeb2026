/* ==============================================================================
   EJERCICIO 10 · Un buscador que cancela (SOLUCIÓN)

   OBJETIVO:
   Cancelar una petición en curso con AbortController cuando empieza otra,
   pasando su signal a fetch, y distinguir el AbortError (provocado a
   propósito) de un error de verdad.

   PASOS A REALIZAR:
   1. Declarar let controlador = null y una función esperar(ms, signal) que
      resuelve tras ms milisegundos o rechaza con un AbortError si la señal
      se cancela antes (simula una red lenta).
   2. Declarar async buscar(texto): si la cancelación está activada,
      controlador?.abort(); crear un AbortController nuevo; esperar entre
      200 y 1200 ms al azar con su signal; hacer fetch('paises.json', {
      signal }); filtrar los países que empiezan por el texto.
   3. Pintar los resultados y, en el registro, «ma» → 8 resultados. En el
      catch: si error.name es 'AbortError', apuntar «ma» → cancelada; si no,
      mostrar el error.
   4. Llamar a buscar en cada input del buscador (sin espera de 300 ms:
      queremos ver las peticiones pisándose).
   5. Marcad la casilla y escribid rápido: ¿qué resultados quedan al final?
   ============================================================================== */

// estructura del programa principal
let controlador = null;

// funciones
// una espera que se puede cancelar con una señal
function esperar(ms, signal) {
    return new Promise((resolve, reject) => {
        const id = setTimeout(resolve, ms);
        signal.addEventListener('abort', () => {
            clearTimeout(id);
            reject(new DOMException('Cancelada', 'AbortError'));
        });
    });
}

function apuntar(texto) {
    const li = document.createElement('li');
    li.textContent = texto;
    registro.prepend(li);
}

async function buscar(texto) {
    if (!sinCancelar.checked) {
        controlador?.abort();                       // la búsqueda anterior ya no interesa
    }
    controlador = new AbortController();
    const { signal } = controlador;
    estado.textContent = `⏳ Buscando «${texto}»…`;

    try {
        await esperar(200 + Math.random() * 1000, signal);     // la «red lenta»
        const respuesta = await fetch('paises.json', { signal });
        if (!respuesta.ok) {
            throw new Error(`Error ${respuesta.status}`);
        }
        const paises = await respuesta.json();
        const encontrados = paises.filter((p) => p.toLowerCase().startsWith(texto.toLowerCase()));

        resultados.replaceChildren();
        encontrados.forEach((p) => {
            const li = document.createElement('li');
            li.textContent = p;
            resultados.append(li);
        });
        estado.textContent = `«${texto}»: ${encontrados.length} resultados`;
        apuntar(`«${texto}» → ${encontrados.length} resultados`);
    } catch (error) {
        if (error.name === 'AbortError') {
            apuntar(`«${texto}» → cancelada`);      // la cancelé yo: no es un fallo
            return;
        }
        estado.textContent = `✘ ${error.message}`;
    }
}

// constantes al DOM que queremos escuchar
const campo = document.querySelector('#buscar');
const sinCancelar = document.querySelector('#sinCancelar');
const estado = document.querySelector('#estado');
const resultados = document.querySelector('#resultados');
const registro = document.querySelector('#registro');

// colocar escuchadores de eventos
campo.addEventListener('input', () => {
    buscar(campo.value.trim());
});
