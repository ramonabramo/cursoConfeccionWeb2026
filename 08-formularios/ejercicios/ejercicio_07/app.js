/* ==============================================================================
   EJERCICIO 07 · Formulario dinámico: campos que aparecen

   OBJETIVO:
   Adaptar un formulario a lo que elige el usuario: recalcular el total con
   input y change, mostrar u ocultar un grupo de campos con el atributo
   hidden, hacerlos obligatorios solo cuando son visibles y reiniciar el
   formulario devolviendo la interfaz a su estado inicial.

   PASOS A REALIZAR:
   1. Declarar las constantes PRECIO_CAJA = 19.9 y ENVIOS = { estandar:
      3.95, urgente: 7.95, recogida: 0 }.
   2. Declarar calcularTotal(): leer la cantidad y el envío marcado con
      FormData, y devolver cantidad × precio + envío.
   3. Declarar actualizar(): escribe el total y, según la casilla de
      factura, muestra u oculta #datosFactura (propiedad hidden) y pone o
      quita required en nif y razonSocial.
   4. Escuchar input y change en el FORMULARIO entero (delegación: los
      eventos de los campos suben hasta él) con la función actualizar.
   5. Escuchar click en #btnLimpiar: formulario.reset() y después
      actualizar(), para que la interfaz vuelva al estado inicial.
   6. Escuchar submit: evitar la recarga; si reportValidity() falla, salir;
      si no, mostrar un resumen del pedido (con los datos de factura solo si
      los ha pedido).
   7. Llamar a actualizar() al cargar.
   ============================================================================== */

// estructura del programa principal
const PRECIO_CAJA = 19.9;
const ENVIOS = { estandar: 3.95, urgente: 7.95, recogida: 0 };

// funciones
// TAREA: calcularTotal()


// TAREA: actualizar()


// constantes al DOM que queremos escuchar
const formulario = document.querySelector('#pedido');
const quieroFactura = document.querySelector('#quieroFactura');
const datosFactura = document.querySelector('#datosFactura');
const nif = document.querySelector('#nif');
const razonSocial = document.querySelector('#razonSocial');
const total = document.querySelector('#total');
const btnLimpiar = document.querySelector('#btnLimpiar');
const resumen = document.querySelector('#resumen');

// colocar escuchadores de eventos
// TAREA: input y change en el formulario


// TAREA: botón limpiar


// TAREA: submit


// TAREA: estado inicial

