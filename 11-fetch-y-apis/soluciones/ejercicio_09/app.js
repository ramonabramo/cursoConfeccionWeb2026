/* ==============================================================================
   EJERCICIO 09 · Constructor de URLs (SOLUCIÓN)

   OBJETIVO:
   Construir la URL de una petición con URL y searchParams para que los
   valores se codifiquen correctamente, compararla con una construida a
   mano, y leer los parámetros de una dirección escrita por el usuario.

   PASOS A REALIZAR:
   1. Declarar construir(): crea new URL('https://api.ejemplo.com/recetas'),
      añade q con el texto y pagina con searchParams.set, y categoria solo
      si no está vacía.
   2. Escribir url.toString() en #urlBien y, en #urlMal, la misma dirección
      hecha con una plantilla de texto sin codificar. Llamar a construir en
      cada input del formulario.
   3. Declarar leer(): dentro de un try, crear new URL con el valor de
      #direccion y, con for...of sobre searchParams, pintar un li por
      parámetro: categoria → audio.
   4. Si la dirección no es válida (TypeError), pintar un li: ✘ No es una
      URL válida. Llamar a leer en cada input del campo.
   ============================================================================== */

// estructura del programa principal
const BASE = 'https://api.ejemplo.com/recetas';

// funciones
function construir() {
    // entradas
    const texto = formulario.texto.value;
    const categoria = formulario.categoria.value;
    const pagina = formulario.pagina.value;

    // procesamiento: searchParams codifica cada valor por nosotros
    const url = new URL(BASE);
    url.searchParams.set('q', texto);
    if (categoria !== '') {
        url.searchParams.set('categoria', categoria);
    }
    url.searchParams.set('pagina', pagina);

    // salidas
    urlBien.textContent = url.toString();
    urlMal.textContent = `${BASE}?q=${texto}&categoria=${categoria}&pagina=${pagina}`;   // ✘ sin codificar
}

function leer() {
    parametros.replaceChildren();
    try {
        const url = new URL(direccion.value);          // TypeError si no es válida
        for (const [nombre, valor] of url.searchParams) {
            const li = document.createElement('li');
            li.textContent = `${nombre} → ${valor}`;
            parametros.append(li);
        }
        if (parametros.children.length === 0) {
            parametros.textContent = 'Esta dirección no lleva parámetros.';
        }
    } catch (error) {
        const li = document.createElement('li');
        li.textContent = '✘ No es una URL válida';
        parametros.append(li);
    }
}

// constantes al DOM que queremos escuchar
const formulario = document.querySelector('#formUrl');
const urlBien = document.querySelector('#urlBien');
const urlMal = document.querySelector('#urlMal');
const direccion = document.querySelector('#direccion');
const parametros = document.querySelector('#parametros');

// colocar escuchadores de eventos
formulario.addEventListener('input', construir);
direccion.addEventListener('input', leer);

construir();
leer();
