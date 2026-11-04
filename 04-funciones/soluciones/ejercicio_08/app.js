/* ==============================================================================
   EJERCICIO 08 · Planificador de estudio (SOLUCIÓN)

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
// ¿es un número válido dentro del rango [minimo, maximo]?
function estaEntre(valor, minimo, maximo) {
    return !Number.isNaN(valor) && valor >= minimo && valor <= maximo;
}

// pregunta hasta obtener un número válido; devuelve null si el usuario cancela
function pedirNumero(mensaje, minimo, maximo, porDefecto) {
    let aviso = '';

    while (true) {
        const respuesta = prompt(`${aviso}${mensaje} (${minimo}-${maximo})`, porDefecto);

        if (respuesta === null) {
            return null;            // sale de la función, y por tanto del bucle
        }

        const numero = Number(respuesta);
        if (estaEntre(numero, minimo, maximo)) {
            return numero;          // dato válido: lo devuelvo y salgo
        }

        aviso = '⚠ Valor no válido. ';
    }
}

// 1.75 → "1 h 45 min"
function formatearTiempo(horasDecimales) {
    const horas = Math.floor(horasDecimales);
    const minutos = Math.round((horasDecimales - horas) * 60);

    if (horas === 0) {
        return `${minutos} min`;
    }
    if (minutos === 0) {
        return `${horas} h`;
    }
    return `${horas} h ${minutos} min`;
}

// constantes al DOM
const salida = document.querySelector('#salida');
const resHoras = document.querySelector('#resHoras');
const resDias = document.querySelector('#resDias');
const resPorDia = document.querySelector('#resPorDia');
const resBloques = document.querySelector('#resBloques');

// entradas
const horasSemana = pedirNumero('¿Cuántas horas quieres estudiar a la semana?', 1, 60, '10');
const dias = horasSemana === null ? null : pedirNumero('¿Cuántos días vas a estudiar?', 1, 7, '4');

// procesamiento y salidas
if (horasSemana === null || dias === null) {
    salida.textContent = 'Planificación cancelada.';
} else {
    const horasPorDia = horasSemana / dias;
    const bloques = Math.ceil(horasPorDia * 60 / 25);

    resHoras.textContent = formatearTiempo(horasSemana);
    resDias.textContent = dias;
    resPorDia.textContent = formatearTiempo(horasPorDia);
    resBloques.textContent = `${bloques} bloques de 25 min`;
    salida.textContent = `Plan listo: ${formatearTiempo(horasPorDia)} al día, ${dias} días a la semana.`;
}
