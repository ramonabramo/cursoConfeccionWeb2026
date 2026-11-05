/* ==============================================================================
   EJERCICIO 10 · Tarifas del parque de atracciones (SOLUCIÓN)

   OBJETIVO:
   Clasificar un valor por tramos con una cadena de else if ordenada,
   comprobar los valores frontera y resaltar en la página el tramo elegido.

   PASOS A REALIZAR:
   1. Pedir la edad con prompt() y convertirla con Number() (por defecto
      17).
   2. Con una cadena de if…else if ordenada de mayor a menor edad, decidir
      el precio y el id del tramo (tramoSenior, tramoAdulto, tramoNino o
      tramoBebe).
   3. Si la edad no es un número válido (Number.isNaN) o es negativa,
      mostrar un mensaje de error y no resaltar nada.
   4. Resaltar el li del tramo con style.backgroundColor y style.fontWeight.
   5. Mostrar: Con 17 años, la entrada cuesta 18 €.
   ============================================================================== */

// estructura del programa principal

// constantes al DOM
const salida = document.querySelector('#salida');

// entradas
const edad = Number(prompt('¿Qué edad tiene la persona?', '17'));

// procesamiento: los tramos de mayor a menor
let precio = 0;
let idTramo = '';
if (Number.isNaN(edad) || edad < 0) {
    idTramo = '';                         // dato no válido: no hay tramo
} else if (edad >= 65) {
    precio = 15;
    idTramo = 'tramoSenior';
} else if (edad >= 18) {                  // aquí ya sé que edad < 65
    precio = 25;
    idTramo = 'tramoAdulto';
} else if (edad >= 4) {                   // y aquí, que edad < 18
    precio = 18;
    idTramo = 'tramoNino';
} else {
    precio = 0;
    idTramo = 'tramoBebe';
}

// salidas
if (idTramo === '') {
    salida.textContent = 'Escribe una edad válida (un número de 0 en adelante).';
} else {
    const tramo = document.querySelector(`#${idTramo}`);
    tramo.style.backgroundColor = '#fef08a';
    tramo.style.fontWeight = '700';
    salida.textContent = precio === 0
        ? `Con ${edad} años, la entrada es gratis.`
        : `Con ${edad} años, la entrada cuesta ${precio} €.`;
}
