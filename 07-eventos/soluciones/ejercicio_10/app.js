/* ==============================================================================
   EJERCICIO 10 · Seleccionar con Ctrl y Mayús (SOLUCIÓN)

   OBJETIVO:
   Usar las propiedades ctrlKey, metaKey y shiftKey del evento de clic para
   programar la selección simple, la selección múltiple y la selección por
   rango de una lista.

   PASOS A REALIZAR:
   1. Declarar el estado: let seleccionados = [] (índices) y let ultimo =
      null (el último índice pulsado sin Mayús).
   2. Escuchar click en la lista (delegación) y averiguar el índice del li
      pulsado con dataset.indice.
   3. Con Mayús (e.shiftKey) y un último índice: seleccionar todos los
      índices entre ultimo y el pulsado.
   4. Con Ctrl o ⌘ (e.ctrlKey || e.metaKey): añadir el índice si no estaba o
      quitarlo si estaba.
   5. Sin teclas: seleccionar solo ese. Después, renderizar: clase
      seleccionado en los li elegidos y en #resumen: 3 archivos
      seleccionados: …
   ============================================================================== */

// estructura del programa principal
let seleccionados = [];      // índices de los archivos elegidos
let ultimo = null;           // ancla del rango con Mayús

// funciones
function renderizar() {
    elementos.forEach((li, i) => li.classList.toggle('seleccionado', seleccionados.includes(i)));
    const nombres = seleccionados
        .slice()
        .sort((a, b) => a - b)
        .map((i) => elementos[i].textContent.split(' ').slice(1).join(' '));   // sin el emoji del principio
    resumen.textContent = nombres.length === 0
        ? 'Ningún archivo seleccionado'
        : `${nombres.length} ${nombres.length === 1 ? 'archivo seleccionado' : 'archivos seleccionados'}: ${nombres.join(', ')}`;
}

// constantes al DOM que queremos escuchar
const lista = document.querySelector('#archivos');
const elementos = lista.querySelectorAll('li');
const resumen = document.querySelector('#resumen');

// colocar escuchadores de eventos
lista.addEventListener('click', (e) => {
    const li = e.target.closest('li');
    if (!li) {
        return;
    }
    const indice = Number(li.dataset.indice);

    if (e.shiftKey && ultimo !== null) {
        // Mayús: todo el rango entre el último y este
        const desde = Math.min(ultimo, indice);
        const hasta = Math.max(ultimo, indice);
        seleccionados = [];
        for (let i = desde; i <= hasta; i++) {
            seleccionados.push(i);
        }
    } else if (e.ctrlKey || e.metaKey) {
        // Ctrl (o ⌘ en Mac): añadir o quitar este, sin tocar los demás
        seleccionados = seleccionados.includes(indice)
            ? seleccionados.filter((i) => i !== indice)
            : [...seleccionados, indice];
        ultimo = indice;
    } else {
        // clic normal: solo este
        seleccionados = [indice];
        ultimo = indice;
    }
    renderizar();
});
