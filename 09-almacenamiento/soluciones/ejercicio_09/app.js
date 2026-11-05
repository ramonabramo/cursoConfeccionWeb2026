/* ==============================================================================
   EJERCICIO 09 · Búsquedas recientes (SOLUCIÓN)

   OBJETIVO:
   Mantener en localStorage un historial limitado y ordenado: sin duplicados
   (sin distinguir mayúsculas), el más reciente primero y como máximo cinco
   elementos, con carga segura y opción de borrarlo.

   PASOS A REALIZAR:
   1. Declarar CLAVE = 'curso-js:b09e09:busquedas', MAXIMO = 5 y
      cargarHistorial() con carga segura (si no hay nada o no es un array de
      textos, []).
   2. Al enviar el formulario: limpiar el texto (trim); si está vacío, no
      hacer nada.
   3. Quitar del historial cualquier búsqueda igual sin distinguir
      mayúsculas (filter), añadir la nueva al principio (unshift) y recortar
      a MAXIMO (slice).
   4. Guardar y renderizar: un li por búsqueda; al pulsar uno (delegación),
      ponerlo en el campo. En #estado: 3 búsquedas guardadas.
   5. El botón Borrar historial elimina la clave con removeItem y vacía la
      lista.
   ============================================================================== */

// estructura del programa principal
const CLAVE = 'curso-js:b09e09:busquedas';
const MAXIMO = 5;

// funciones
function cargarHistorial() {
    try {
        const datos = JSON.parse(localStorage.getItem(CLAVE));
        return Array.isArray(datos) ? datos.filter((d) => typeof d === 'string') : [];
    } catch (error) {
        return [];
    }
}

function guardarHistorial() {
    localStorage.setItem(CLAVE, JSON.stringify(historial));
}

function renderizar() {
    lista.replaceChildren();
    historial.forEach((texto) => {
        const li = document.createElement('li');
        const boton = document.createElement('button');
        boton.className = 'btn btn--secundario';
        boton.textContent = `🔎 ${texto}`;
        boton.dataset.texto = texto;
        li.append(boton);
        lista.append(li);
    });
    estado.textContent = historial.length === 0
        ? 'Todavía no hay búsquedas.'
        : `${historial.length} ${historial.length === 1 ? 'búsqueda guardada' : 'búsquedas guardadas'}`;
}

let historial = cargarHistorial();

// constantes al DOM que queremos escuchar
const formulario = document.querySelector('#formBusqueda');
const campo = document.querySelector('#busqueda');
const lista = document.querySelector('#recientes');
const btnBorrar = document.querySelector('#btnBorrar');
const estado = document.querySelector('#estado');

// colocar escuchadores de eventos
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    // entradas
    const texto = campo.value.trim();
    if (texto === '') {
        return;
    }
    // procesamiento: sin duplicados, la nueva delante y como mucho MAXIMO
    historial = historial.filter((h) => h.toLowerCase() !== texto.toLowerCase());
    historial.unshift(texto);
    historial = historial.slice(0, MAXIMO);
    // salidas
    guardarHistorial();
    renderizar();
    campo.value = '';
});

lista.addEventListener('click', (e) => {
    const boton = e.target.closest('[data-texto]');
    if (boton) {
        campo.value = boton.dataset.texto;
        campo.focus();
    }
});

btnBorrar.addEventListener('click', () => {
    localStorage.removeItem(CLAVE);
    historial = [];
    renderizar();
});

renderizar();
