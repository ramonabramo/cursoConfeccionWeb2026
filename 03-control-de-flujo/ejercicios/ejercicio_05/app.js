/* ==============================================================================
   EJERCICIO 05 · Tabla de multiplicar con for

   OBJETIVO:
   Repetir una instrucción un número conocido de veces con un bucle for,
   usando el contador dentro del cuerpo y dos acumuladores: uno de texto y
   otro numérico.

   PASOS A REALIZAR:
   1. Crear las constantes al DOM salidaTabla (#tabla) y salidaSuma (#suma).
   2. Pedir el número con prompt (por defecto "7") y convertirlo.
   3. Si no es un número válido, mostrar un aviso en salidaTabla y no hacer
      nada más (todo lo demás va dentro del else).
   4. Declarar con let los acumuladores tabla (texto vacío) y suma (0).
   5. Con un for de i = 1 a i = 10, añadir a tabla en cada vuelta la línea:
      7 × 1 = 7, seguida de \n.
   6. En cada vuelta, sumar también el resultado al acumulador suma.
   7. Al terminar el bucle, mostrar la tabla y el texto: La suma de todos
      los resultados es 385.
   ============================================================================== */

// estructura del programa principal

// constantes al DOM
// TAREA: salidaTabla y salidaSuma


// entradas
// TAREA: sustituye el 0 por el número pedido con prompt y convertido con Number()
const numero = 0;

// procesamiento y salidas
if (Number.isNaN(numero)) {
    // TAREA: aviso

} else {
    // TAREA: acumuladores tabla y suma


    // TAREA: bucle for de 1 a 10
    for (let i = 0; false /* TAREA: cambia inicialización, condición y actualización */; i++) {

    }

    // TAREA: muestra la tabla y la suma

}
