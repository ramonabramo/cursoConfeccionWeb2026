/* ==============================================================================
   EJERCICIO 06 · Adivina el número

   OBJETIVO:
   Repetir mientras se cumpla una condición con un bucle while, sin saber de
   antemano cuántas vueltas dará, y salir antes de tiempo con break o saltar
   una vuelta con continue.

   PASOS A REALIZAR:
   1. Crear la constante al DOM salida.
   2. Generar el número secreto entre 1 y 100 con Math.random() (fórmula del
      bloque 02).
   3. Declarar con let: intentos = 0, acertado = false y pista con el texto
      Estoy pensando un número del 1 al 100.
   4. Escribir un bucle while que se repita mientras NO se haya acertado.
   5. Dentro, pedir un número con prompt mostrando la pista y el número de
      intento.
   6. Si el usuario cancela (null), salir del bucle con break.
   7. Si lo que escribe no es un número del 1 al 100, cambiar la pista a Eso
      no es un número del 1 al 100. y pasar a la siguiente vuelta con
      continue (sin contar el intento).
   8. Contar el intento. Si acierta, poner acertado a true; si no,
      actualizar la pista: El número es MAYOR que 40. o El número es MENOR
      que 40.
   9. Al salir del bucle, mostrar ¡Acertaste! Era el 37 y lo has conseguido
      en 6 intentos. o, si se rindió, Te has rendido. El número era el 37.
   ============================================================================== */

// estructura del programa principal
// TAREA: número secreto, intentos, acertado y pista


// constantes al DOM
// TAREA: salida


// entradas, procesamiento y salidas
while (false /* TAREA: mientras NO se haya acertado */) {
    // TAREA: pide un número mostrando la pista


    // TAREA: si cancela → break


    // TAREA: si no es un número del 1 al 100 → nueva pista y continue


    // TAREA: cuenta el intento y compara con el secreto

}

// TAREA: mensaje final (¿ha acertado o se ha rendido?)

