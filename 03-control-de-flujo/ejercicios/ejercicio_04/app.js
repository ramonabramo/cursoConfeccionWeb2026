/* ==============================================================================
   EJERCICIO 04 · ¿Qué día es?

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
// TAREA: salidaDia y salidaTipo


// entradas
// TAREA: sustituye el 0 por el número del día pedido con prompt y convertido con Number()
const numero = 0;


// procesamiento
// TAREA: primer switch → nombreDia
switch (numero) {
    case 1:
        nombreDia = 'lunes';
        break;
    // TAREA: completa el resto de casos y el default
}

// TAREA: segundo switch → tipoDia (agrupa los case)


// salidas
// TAREA: mensajes (comprueba si nombreDia está vacío)


// TAREA: ¿qué pasa si quitas un break? Explícalo aquí

