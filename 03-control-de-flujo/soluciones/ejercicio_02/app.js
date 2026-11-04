/* ==============================================================================
   EJERCICIO 02 · Control de acceso al concierto (SOLUCIÓN)

   OBJETIVO:
   Combinar condiciones con los operadores lógicos && (y), || (o) y ! (no),
   y usar confirm() para obtener directamente un valor booleano del usuario.

   PASOS A REALIZAR:
   1. Crear las constantes al DOM de las cinco celdas y de salida.
   2. Pedir la edad con prompt (por defecto "17") y convertirla a número.
   3. Preguntar con confirm() si tiene entrada y guardarlo en tieneEntrada.
   4. Preguntar con confirm() si viene con una persona adulta y guardarlo en
      vaAcompanado.
   5. Calcular esMayor (edad mayor o igual que 18).
   6. Calcular puedeEntrar con una sola expresión: tiene entrada Y (es mayor
      O (tiene 16 o más Y va acompañado)). Cuidado con los paréntesis.
   7. Decidir el mensaje: si NO tiene entrada → Pasa primero por taquilla;
      si puede entrar → ¡Adelante, disfruta del concierto!; en otro caso →
      Lo siento, no cumples la edad mínima.
   8. Escribir los cinco valores en la tabla y el mensaje en salida.
   ============================================================================== */

// estructura del programa principal
let mensaje = '';

// constantes al DOM
const datoEdad = document.querySelector('#datoEdad');
const datoEntrada = document.querySelector('#datoEntrada');
const datoAcompanado = document.querySelector('#datoAcompanado');
const datoMayor = document.querySelector('#datoMayor');
const datoPuedeEntrar = document.querySelector('#datoPuedeEntrar');
const salida = document.querySelector('#salida');

// entradas
const edad = Number(prompt('¿Cuántos años tienes?', '17'));
const tieneEntrada = confirm('¿Tienes entrada?');                    // true o false
const vaAcompanado = confirm('¿Vienes con una persona adulta?');     // true o false

// procesamiento
const esMayor = edad >= 18;

// entrada obligatoria Y (18 años O (16 años Y acompañado))
const puedeEntrar = tieneEntrada && (esMayor || (edad >= 16 && vaAcompanado));

if (!tieneEntrada) {
    mensaje = 'Pasa primero por taquilla.';
} else if (puedeEntrar) {
    mensaje = '¡Adelante, disfruta del concierto!';
} else {
    mensaje = 'Lo siento, no cumples la edad mínima.';
}

// salidas
datoEdad.textContent = edad;
datoEntrada.textContent = tieneEntrada;
datoAcompanado.textContent = vaAcompanado;
datoMayor.textContent = esMayor;
datoPuedeEntrar.textContent = puedeEntrar;
salida.textContent = mensaje;
