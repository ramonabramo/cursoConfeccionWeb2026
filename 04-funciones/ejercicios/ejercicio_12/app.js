/* ==============================================================================
   EJERCICIO 12 · Un monedero con saldo privado

   OBJETIVO:
   Usar un closure para crear un dato privado: una función fábrica devuelve
   un objeto con métodos que leen y modifican un saldo al que nadie más
   puede acceder.

   PASOS A REALIZAR:
   1. Declarar crearMonedero(titular, saldoInicial = 0). Dentro, let saldo =
      saldoInicial.
   2. Devolver un objeto con tres métodos: ingresar(cantidad),
      gastar(cantidad) y consultar(). Ingresar y gastar devuelven un texto
      con lo ocurrido; gastar rechaza el gasto si no hay saldo suficiente, y
      los dos rechazan cantidades que no sean positivas.
   3. Crear el monedero de Lucía con 50 € y hacer: ingresar 20, gastar 35,
      gastar 100, ingresar -5. Cada resultado, en un li.
   4. Escribir el saldo final con consultar().
   5. Intentar hacer trampa con monedero.saldo = 1000000 y comprobar con
      consultar() que el saldo no ha cambiado.
   ============================================================================== */

// estructura del programa principal
// funciones
// TAREA: function crearMonedero(titular, saldoInicial = 0)


// constantes al DOM
const movimientos = document.querySelector('#movimientos');
const saldoFinal = document.querySelector('#saldoFinal');
const trampa = document.querySelector('#trampa');

function apuntar(texto) {
    const li = document.createElement('li');
    li.textContent = texto;
    movimientos.append(li);
}

// procesamiento y salidas
// TAREA

