/* ==============================================================================
   EJERCICIO 05 · Tabla de multiplicar con for (SOLUCIÓN)

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
const salidaTabla = document.querySelector('#tabla');
const salidaSuma = document.querySelector('#suma');

// entradas
const numero = Number(prompt('¿Qué tabla quieres ver?', '7'));

// procesamiento y salidas
if (Number.isNaN(numero)) {
    salidaTabla.textContent = 'Eso no es un número.';
} else {
    // acumuladores: empiezan "vacíos" y crecen en cada vuelta
    let tabla = '';
    let suma = 0;

    // i empieza en 1, se repite mientras i <= 10, y sube de 1 en 1
    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        tabla += `${numero} × ${i} = ${resultado}\n`;
        suma += resultado;
    }

    // al salir del bucle, los acumuladores tienen el total
    salidaTabla.textContent = tabla;
    salidaSuma.textContent = `La suma de todos los resultados es ${suma}`;
}
