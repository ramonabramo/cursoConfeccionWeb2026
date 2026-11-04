/* ==============================================================================
   EJERCICIO 05 · Detective del ámbito

   OBJETIVO:
   Entender los tres ámbitos de JavaScript (global, de función y de bloque),
   qué ocurre cuando una variable interior tiene el mismo nombre que una
   exterior (shadowing) y por qué una variable local no existe fuera de su
   función.

   PASOS A REALIZAR:
   1. Leed el código ya escrito y apuntad en papel qué valor creéis que
      tendrá lugar en cada fila de la primera tabla.
   2. Dentro del if, escribid el valor de lugar en la celda enBloque.
   3. Dentro de la función, pero fuera del if, escribid lugar en enFuncion.
   4. Fuera de la función, escribid lugar en enGlobal.
   5. Llamad a la función tres veces y escribid en llamadasFinal el valor de
      llamadas.
   6. Escribid en tipoSecreto el resultado de typeof secreto, fuera de la
      función.
   7. Por último, intentad hacer console.log(secreto) fuera de la función.
      Copiad el error en un comentario y dejad la línea comentada.
   ============================================================================== */

// estructura del programa principal
const lugar = 'global';
let llamadas = 0;

// constantes al DOM (globales: se ven desde dentro de la función)
const enBloque = document.querySelector('#enBloque');
const enFuncion = document.querySelector('#enFuncion');
const enGlobal = document.querySelector('#enGlobal');
const llamadasFinal = document.querySelector('#llamadasFinal');
const tipoSecreto = document.querySelector('#tipoSecreto');

// funciones
function investigar() {
    const lugar = 'función';
    const secreto = 'solo existo aquí dentro';
    llamadas++;

    if (llamadas > 0) {
        const lugar = 'bloque';
        // TAREA: escribe lugar en enBloque

    }

    // TAREA: escribe lugar en enFuncion

}

// procesamiento y salidas
// TAREA: llama tres veces a investigar()


// TAREA: escribe lugar en enGlobal


// TAREA: escribe llamadas en llamadasFinal


// TAREA: escribe typeof secreto en tipoSecreto


// TAREA: intenta console.log(secreto), copia el error y comenta la línea

