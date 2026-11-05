/* ==============================================================================
   EJERCICIO 11 · Buenos días, buenas tardes (SOLUCIÓN)

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

// entradas: la hora real, que el usuario puede cambiar para probar
const horaReal = new Date().getHours();               // 0 a 23
const hora = Number(prompt('Hora (0 a 23)', String(horaReal)));

// procesamiento: tramos en orden
let mensaje = '';
let color = '';
if (Number.isNaN(hora) || hora < 0 || hora > 23) {
    mensaje = '⚠️ La hora debe estar entre 0 y 23.';
    color = '#fecaca';
} else if (hora >= 6 && hora < 14) {
    mensaje = '☀️ Buenos días';
    color = '#fef9c3';
} else if (hora >= 14 && hora < 21) {
    mensaje = '🌇 Buenas tardes';
    color = '#fed7aa';
} else {
    mensaje = '🌙 Buenas noches';
    color = '#c7d2fe';
}

// salidas
textoHora.textContent = `Hora real: ${horaReal} h · hora usada: ${hora} h`;
saludo.textContent = mensaje;
document.body.style.backgroundColor = color;
