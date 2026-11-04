/* ==============================================================================
   EJERCICIO 03 · Mini-tuit con atajos de teclado (SOLUCIÓN)

   OBJETIVO:
   Reaccionar al teclado con keydown, distinguir teclas con e.key y
   combinaciones con e.ctrlKey, y combinarlo con el evento input para
   mantener un contador de caracteres que cambia de color.

   PASOS A REALIZAR:
   1. Declarar la constante MAXIMO = 140.
   2. Declarar actualizarContador(): escribe 23 / 140, pone la clase cerca a
      partir de 120 caracteres, la clase pasado si supera 140, y desactiva
      el botón si el texto está vacío o se pasa.
   3. Declarar publicar(): si el texto (sin espacios a los lados) está vacío
      o se pasa del máximo, no hace nada. Si no, crea un li con el texto, lo
      coloca el primero de la lista con prepend, vacía el textarea,
      actualiza el contador y le devuelve el foco con focus().
   4. Escuchar input en el textarea → actualizarContador.
   5. Escuchar click en el botón → publicar.
   6. Escuchar keydown en el textarea: si e.key es 'Enter' y e.ctrlKey es
      true, publicar; si e.key es 'Escape', vaciar y actualizar.
   ============================================================================== */

// estructura del programa principal
const MAXIMO = 140;

// funciones
function actualizarContador() {
    const longitud = texto.value.length;
    caracteres.textContent = `${longitud} / ${MAXIMO}`;
    caracteres.classList.toggle('cerca', longitud >= MAXIMO - 20 && longitud <= MAXIMO);
    caracteres.classList.toggle('pasado', longitud > MAXIMO);
    btnPublicar.disabled = texto.value.trim() === '' || longitud > MAXIMO;
}

function publicar() {
    // entradas
    const mensaje = texto.value.trim();

    // procesamiento: ¿se puede publicar?
    if (mensaje === '' || mensaje.length > MAXIMO) {
        return;
    }

    // salidas: el más reciente, arriba
    const li = document.createElement('li');
    li.textContent = mensaje;      // textContent: el texto lo escribe el usuario
    tuits.prepend(li);

    texto.value = '';
    actualizarContador();
    texto.focus();                 // devuelvo el cursor al campo
}

// constantes al DOM que queremos escuchar
const texto = document.querySelector('#texto');
const caracteres = document.querySelector('#caracteres');
const btnPublicar = document.querySelector('#btnPublicar');
const tuits = document.querySelector('#tuits');

// colocar escuchadores de eventos
texto.addEventListener('input', actualizarContador);
btnPublicar.addEventListener('click', publicar);

// el objeto evento (e) nos dice QUÉ tecla se ha pulsado
texto.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.ctrlKey) {
        publicar();
    } else if (e.key === 'Escape') {
        texto.value = '';
        actualizarContador();
    }
});
