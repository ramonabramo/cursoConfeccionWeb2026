/* ==============================================================================
   EJERCICIO 08 · Planificador de estudio

   OBJETIVO:
   Organizar un programa en funciones pequeñas y reutilizables, cada una con
   una sola tarea, y combinarlas: validar, pedir datos con repetición hasta
   que sean válidos y dar formato a un resultado.

   PASOS A REALIZAR:
   1. Declarar estaEntre(valor, minimo, maximo) que devuelva true si el
      valor es un número (no NaN) dentro del rango, ambos incluidos.
   2. Declarar pedirNumero(mensaje, minimo, maximo, porDefecto). Debe
      repetir el prompt mientras la respuesta no sea válida, devolver el
      número cuando lo sea y devolver null si el usuario cancela. Usad un
      while (true) con return dentro.
   3. Declarar formatearTiempo(horasDecimales) que convierta, por ejemplo,
      1.75 en el texto 1 h 45 min. Pista: las horas son Math.floor(horas) y
      los minutos, Math.round((horas - horasEnteras) * 60).
   4. Crear las constantes al DOM.
   5. Pedir las horas a la semana (entre 1 y 60, por defecto 10) y los días
      de estudio (entre 1 y 7, por defecto 4) con pedirNumero.
   6. Si alguna de las dos es null, mostrar Planificación cancelada.
   7. Si no, calcular las horas por día y cuántos bloques de 25 minutos son
      (redondeando hacia arriba), y rellenar la tabla usando
      formatearTiempo.
   ============================================================================== */

// estructura del programa principal
// funciones
// TAREA: estaEntre(valor, minimo, maximo)


// TAREA: pedirNumero(mensaje, minimo, maximo, porDefecto)


// TAREA: formatearTiempo(horasDecimales)


// constantes al DOM
// TAREA: salida y las cuatro celdas


// entradas
// TAREA: horas y días con pedirNumero


// procesamiento y salidas
// TAREA: ¿canceló? Si no, calcula y muestra

