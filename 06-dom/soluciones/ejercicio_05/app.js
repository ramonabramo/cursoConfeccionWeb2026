/* ==============================================================================
   EJERCICIO 05 · La lista de la compra, ahora en HTML (SOLUCIÓN)

   OBJETIVO:
   Crear elementos HTML desde JavaScript a partir de un array con
   createElement, configurarlos con textContent y classList, y añadirlos a
   la página con append y prepend.

   PASOS A REALIZAR:
   1. Usar el array compra que ya está creado: cada producto tiene nombre y
      urgente.
   2. Pedir con prompt un producto más (por defecto "tomates"). Si no está
      vacío, añadirlo al array como no urgente.
   3. Recorrer el array con forEach y, para cada producto: crear un li con
      createElement, escribir su nombre con textContent, añadirle la clase
      urgente si lo es, y colgarlo en la lista con append.
   4. Crear un li de cabecera con el texto 📝 6 productos (2 urgentes), darle
      la clase cabecera y colocarlo el PRIMERO con prepend.
   5. Mostrar en salida cuántos elementos li hay ahora en la lista
      (contadlos con querySelectorAll).
   ============================================================================== */

// estructura del programa principal
const compra = [
    { nombre: 'pan', urgente: false },
    { nombre: 'leche', urgente: true },
    { nombre: 'huevos', urgente: false },
    { nombre: 'café', urgente: true },
    { nombre: 'fruta', urgente: false },
];

// constantes al DOM
const lista = document.querySelector('#lista');
const salida = document.querySelector('#salida');

// entradas
const nuevo = (prompt('¿Añadimos algo más?', 'tomates') || '').trim();
if (nuevo) {
    compra.push({ nombre: nuevo, urgente: false });
}

// procesamiento y salidas
// un <li> por cada producto: crear → configurar → colgar
compra.forEach((producto) => {
    const li = document.createElement('li');      // 1. crear
    li.textContent = producto.nombre;             // 2. configurar
    if (producto.urgente) {
        li.classList.add('urgente');
    }
    lista.append(li);                             // 3. colgar (al final)
});

// la cabecera se crea igual, pero se cuelga al PRINCIPIO
const urgentes = compra.filter((p) => p.urgente).length;
const cabecera = document.createElement('li');
cabecera.textContent = `📝 ${compra.length} productos (${urgentes} urgentes)`;
cabecera.classList.add('cabecera');
lista.prepend(cabecera);

// ahora el DOM tiene elementos que no estaban en el HTML
const totalLi = document.querySelectorAll('#lista li').length;
salida.textContent = `La lista tiene ahora ${totalLi} elementos <li> creados desde JavaScript.`;
