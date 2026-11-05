/* ==============================================================================
   EJERCICIO 11 · Buenos días, buenas tardes

   OBJETIVO:
   Obtener la hora actual con Date y getHours, clasificarla en tramos con
   else if y cambiar el aspecto de la página según el resultado.

   PASOS A REALIZAR:
   1. Obtener la hora actual con new Date().getHours() (un número de 0 a
      23).
   2. Ofrecerla como valor por defecto en un prompt() para poder probar
      otras horas, y convertir la respuesta con Number().
   3. Clasificarla: de 6 a 13, Buenos días; de 14 a 20, Buenas tardes; el
      resto, Buenas noches. Cada tramo con su emoji y un color de fondo.
   4. Escribir el saludo en #saludo y cambiar
      document.body.style.backgroundColor.
   5. Si la hora no está entre 0 y 23, mostrar un aviso.
   ============================================================================== */

// estructura del programa principal

// constantes al DOM
const textoHora = document.querySelector('#hora');
const saludo = document.querySelector('#saludo');

// entradas
// TAREA: la hora real con new Date().getHours(), y un prompt para poder cambiarla


// procesamiento
let mensaje = '';
let color = '';
// TAREA: los tramos


// salidas
// TAREA

