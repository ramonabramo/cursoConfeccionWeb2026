/* ==============================================================================
   EJERCICIO 12 · El PIN de tres intentos (SOLUCIÓN)

   OBJETIVO:
   Repetir una pregunta un número máximo de veces con un bucle y un
   contador, salir antes con break cuando se acierta o se cancela, y dar un
   mensaje distinto según cómo terminó el bucle.

   PASOS A REALIZAR:
   1. Declarar const PIN = '4321', const MAX_INTENTOS = 3, let intentos = 0
      y let acertado = false.
   2. Con un while (intentos < MAX_INTENTOS), pedir el PIN con prompt()
      indicando el intento: Intento 1 de 3.
   3. Si se pulsa Cancelar (null), salir con break. Si no, sumar un intento
      y añadir al registro un li con lo escrito (oculto como ••••) y si es
      correcto.
   4. Si el PIN es correcto, poner acertado = true y salir con break.
   5. Después del bucle, tres mensajes posibles: acceso concedido (en
      cuántos intentos), cancelado, o tarjeta bloqueada.
   ============================================================================== */

// estructura del programa principal
const PIN = '4321';
const MAX_INTENTOS = 3;

// constantes al DOM
const salida = document.querySelector('#salida');
const registro = document.querySelector('#registro');

// procesamiento
let intentos = 0;
let acertado = false;
let cancelado = false;

while (intentos < MAX_INTENTOS) {
    const respuesta = prompt(`Intento ${intentos + 1} de ${MAX_INTENTOS}. Escribe el PIN:`);

    if (respuesta === null) {          // Cancelar: el usuario se rinde
        cancelado = true;
        break;
    }

    intentos++;
    const correcto = respuesta.trim() === PIN;

    const li = document.createElement('li');
    li.textContent = `Intento ${intentos}: ${'•'.repeat(respuesta.length)} → ${correcto ? '✔ correcto' : '✘ incorrecto'}`;
    registro.append(li);

    if (correcto) {
        acertado = true;
        break;                         // no hace falta seguir preguntando
    }
}

// salidas: el bucle puede terminar de tres maneras
if (acertado) {
    salida.textContent = `✔ Acceso concedido en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}.`;
} else if (cancelado) {
    salida.textContent = 'Operación cancelada.';
} else {
    salida.textContent = '⛔ Tarjeta bloqueada: has agotado los tres intentos.';
}
