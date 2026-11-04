/* ==============================================================================
   EJERCICIO 04 · ¿Qué día es? (SOLUCIÓN)

   OBJETIVO:
   Elegir entre muchos valores concretos con switch, usar break para salir
   de cada caso, default para lo que no encaja y agrupar varios case que
   comparten resultado.

   PASOS A REALIZAR:
   1. Crear las constantes al DOM salidaDia y salidaTipo.
   2. Pedir el número del día con prompt (por defecto "6") y convertirlo a
      número.
   3. Con un switch, guardar en nombreDia el nombre correspondiente (1 →
      lunes … 7 → domingo). Si no es un número del 1 al 7, usar default para
      guardar un texto vacío.
   4. Con un SEGUNDO switch, guardar en tipoDia si es laborable (casos 1 a
      5) o fin de semana (casos 6 y 7). Agrupad los case que comparten
      resultado escribiéndolos seguidos.
   5. Si nombreDia está vacío, mostrar en salidaDia: Ese número no
      corresponde a ningún día. Si no, mostrar: El día 6 es sábado y en
      salidaTipo: Es fin de semana.
   6. Quitad un break cualquiera del primer switch y observad qué cambia.
      Explicadlo en un comentario y volved a ponerlo.
   ============================================================================== */

// estructura del programa principal
let nombreDia = '';
let tipoDia = '';

// constantes al DOM
const salidaDia = document.querySelector('#salidaDia');
const salidaTipo = document.querySelector('#salidaTipo');

// entradas
const numero = Number(prompt('Número del día (1 = lunes … 7 = domingo):', '6'));

// procesamiento
// switch compara con === : el número 6 encaja con case 6, el texto '6' no
switch (numero) {
    case 1:
        nombreDia = 'lunes';
        break;
    case 2:
        nombreDia = 'martes';
        break;
    case 3:
        nombreDia = 'miércoles';
        break;
    case 4:
        nombreDia = 'jueves';
        break;
    case 5:
        nombreDia = 'viernes';
        break;
    case 6:
        nombreDia = 'sábado';
        break;
    case 7:
        nombreDia = 'domingo';
        break;
    default:
        // cualquier otro valor: 0, 8, NaN…
        nombreDia = '';
}

// varios case seguidos sin break comparten el mismo bloque
switch (numero) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        tipoDia = 'Es laborable';
        break;
    case 6:
    case 7:
        tipoDia = 'Es fin de semana';
        break;
    default:
        tipoDia = '';
}

// salidas
if (!nombreDia) {
    salidaDia.textContent = 'Ese número no corresponde a ningún día.';
    salidaTipo.textContent = '—';
} else {
    salidaDia.textContent = `El día ${numero} es ${nombreDia}`;
    salidaTipo.textContent = tipoDia;
}

// ¿Y si quito un break?
// Por ejemplo, el del case 6: con un 6 se asigna 'sábado', pero como no hay break
// la ejecución sigue en el case 7 y lo sobrescribe con 'domingo'.
// Sin break, switch no se detiene: ejecuta los casos siguientes aunque no coincidan.
