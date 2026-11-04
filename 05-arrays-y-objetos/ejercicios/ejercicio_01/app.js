/* ==============================================================================
   EJERCICIO 01 · La lista de la compra

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
// TAREA: el array compra y el acumulador registro


// funciones
// TAREA: registrar(accion)


// constantes al DOM
const salidaRegistro = document.querySelector('#registro');
const salida = document.querySelector('#salida');

// entradas y procesamiento
// TAREA: estado inicial


// TAREA: push con el producto que pida prompt


// TAREA: unshift('café')


// TAREA: pop


// TAREA: shift


// TAREA: indexOf + splice para quitar 'leche'


// salidas
// TAREA: muestra el registro, el primero, el último y si incluye 'pan'

