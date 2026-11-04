/* ==============================================================================
   EJERCICIO 01 · La lista de la compra (SOLUCIÓN)

   OBJETIVO:
   Crear un array, leer sus elementos por índice, conocer su longitud y
   modificarlo por los extremos (push, pop, unshift, shift) y por el medio
   (indexOf + splice).

   PASOS A REALIZAR:
   1. Crear la constante compra con ['pan', 'leche', 'huevos'] y un
      acumulador registro con un texto vacío.
   2. Declarar la función registrar(accion) que añada a registro dos líneas:
      la acción realizada y, debajo, el contenido actual del array (con
      join(', ')) y su length.
   3. Registrar el estado inicial.
   4. Pedir con prompt un producto (por defecto "fruta") y añadirlo al FINAL
      con push. Registrar.
   5. Añadir 'café' al PRINCIPIO con unshift. Registrar.
   6. Quitar el último con pop, guardando lo que devuelve. Registrar
      indicando qué se ha quitado.
   7. Quitar el primero con shift. Registrar.
   8. Buscar la posición de 'leche' con indexOf. Si está (distinto de -1),
      quitarla con splice(posicion, 1). Registrar.
   9. Mostrar en salida el primer y el último elemento (compra[0] y
      compra[compra.length - 1]) y si la lista incluye 'pan' (includes).
   ============================================================================== */

// estructura del programa principal
const compra = ['pan', 'leche', 'huevos'];
let registro = '';

// funciones
// añade al registro la acción y el estado actual del array
function registrar(accion) {
    const palabra = compra.length === 1 ? 'elemento' : 'elementos';
    registro += `${accion}\n   → [${compra.join(', ')}]  (${compra.length} ${palabra})\n`;
}

// constantes al DOM
const salidaRegistro = document.querySelector('#registro');
const salida = document.querySelector('#salida');

// entradas y procesamiento
registrar('Lista inicial');

// push: añade al FINAL
const producto = (prompt('¿Qué añadimos a la lista?', 'fruta') || '').trim();
if (producto) {
    compra.push(producto);
    registrar(`push('${producto}')`);
}

// unshift: añade al PRINCIPIO
compra.unshift('café');
registrar(`unshift('café')`);

// pop: quita el ÚLTIMO y lo devuelve
const ultimoQuitado = compra.pop();
registrar(`pop() → ha quitado '${ultimoQuitado}'`);

// shift: quita el PRIMERO y lo devuelve
const primeroQuitado = compra.shift();
registrar(`shift() → ha quitado '${primeroQuitado}'`);

// indexOf + splice: quitar un elemento concreto, esté donde esté
const posicion = compra.indexOf('leche');
if (posicion !== -1) {
    compra.splice(posicion, 1);   // desde "posicion", quita 1 elemento
    registrar(`splice(${posicion}, 1) → ha quitado 'leche'`);
} else {
    registrar(`indexOf('leche') → -1: no estaba en la lista`);
}

// salidas
salidaRegistro.textContent = registro;
const primero = compra[0];
const ultimo = compra[compra.length - 1];
const hayPan = compra.includes('pan') ? 'sí' : 'no';
salida.textContent = `Primero: ${primero} · Último: ${ultimo} · ¿Hay pan? ${hayPan}`;
