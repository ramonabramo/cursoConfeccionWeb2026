/* ==============================================================================
   EJERCICIO 01 · Pedido en la pizzería: leer cada control

   OBJETIVO:
   Escuchar el envío de un formulario con el evento submit, evitar que
   recargue la página con preventDefault y leer los valores de seis tipos de
   control distintos: texto, número, select, checkbox, radio y textarea.

   PASOS A REALIZAR:
   1. Crear las constantes de precios: PRECIOS = { mediana: 9, familiar: 14
      }, EXTRA_QUESO = 1.5 y DOMICILIO = 3.
   2. Seleccionar el formulario y cada uno de sus controles.
   3. Escuchar el evento submit del FORMULARIO (no el click del botón) y
      llamar a e.preventDefault() lo primero.
   4. Leer: el nombre (value), la cantidad (value convertido a número), el
      tamaño (value del select), el extra de queso (checked), la entrega (el
      radio marcado: querySelector('[name="entrega"]:checked').value) y las
      notas.
   5. Calcular el total: (precio del tamaño + queso si lo lleva) × cantidad
      + domicilio si lo pide.
   6. Mostrar en el resumen un ticket con todos los datos, el total con dos
      decimales y, en una última línea, typeof de cantidad.value para
      comprobar que llega como texto.
   ============================================================================== */

// estructura del programa principal
const PRECIOS = { mediana: 9, familiar: 14 };
const EXTRA_QUESO = 1.5;
const DOMICILIO = 3;

// constantes al DOM que queremos escuchar
// TAREA: el formulario, sus controles y el resumen


// colocar escuchadores de eventos
// TAREA: submit del formulario
    // TAREA: e.preventDefault()

    // entradas
    // TAREA: leer los seis controles

    // procesamiento
    // TAREA: calcular el total

    // salidas
    // TAREA: escribir el ticket
