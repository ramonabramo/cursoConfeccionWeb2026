/* ==============================================================================
   EJERCICIO 05 · Encapsulación: la cuenta bancaria

   OBJETIVO:
   Proteger los datos de un objeto con campos privados (#), exponerlos de
   forma controlada con getters y setters, validar en los métodos lanzando
   errores y usar una propiedad estática de la clase.

   PASOS A REALIZAR:
   1. Declarar la clase CuentaBancaria con los campos privados #saldo = 0,
      #movimientos = [] y #titular = '', y static LIMITE_RETIRADA = 600.
   2. Declarar los getters saldo, movimientos (que devuelve una copia con
      [...]) y titular, y el setter titular, que lanza un Error si el nombre
      limpio tiene menos de 3 letras. El constructor(titular) asigna
      this.titular = titular.
   3. Declarar los métodos privados #validar(cantidad) (Error si no es un
      número mayor que 0), #redondear(numero) a 2 decimales y
      #registrar(tipo, importe).
   4. Declarar ingresar(cantidad) y retirar(cantidad). Retirar lanza un
      Error si se supera LIMITE_RETIRADA o si no hay saldo suficiente.
   5. En el formulario de operación, averiguar qué botón se ha pulsado con
      e.submitter.dataset.operacion y llamar al método dentro de un try. En
      el catch, mostrar error.message.
   6. Renderizar: titular, saldo con 2 decimales y un li por movimiento
      (verde si es ingreso, rojo si es retirada).
   7. El botón de trampa hace cuenta.saldo = 1000000 y
      cuenta.movimientos.push(…). Escribid después cuál es el saldo. ¿Ha
      funcionado la trampa?
   ============================================================================== */

// estructura del programa principal

// clases
class CuentaBancaria {
    // TAREA: static LIMITE_RETIRADA y los campos privados #saldo, #movimientos y #titular

    // TAREA: constructor(titular)

    // TAREA: get saldo, get movimientos, get titular y set titular

    // TAREA: ingresar(cantidad) y retirar(cantidad)

    // TAREA: #validar(cantidad), #redondear(numero) y #registrar(tipo, importe)
}

const cuenta = new CuentaBancaria('Lucía Martín');

// funciones
function formatear(cantidad) {
    return `${cantidad.toFixed(2).replace('.', ',')} €`;
}

function renderizar() {
    // TAREA: titular, saldo y movimientos
}

// constantes al DOM que queremos escuchar
const formOperacion = document.querySelector('#formOperacion');
const formTitular = document.querySelector('#formTitular');
const salidaTitular = document.querySelector('#titular');
const salidaSaldo = document.querySelector('#saldo');
const mensaje = document.querySelector('#mensaje');
const listaMovimientos = document.querySelector('#movimientos');
const btnTrampa = document.querySelector('#btnTrampa');

// colocar escuchadores de eventos
// TAREA: submit en formOperacion → ingresar o retirar según e.submitter

// TAREA: submit en formTitular → cuenta.titular = …

// TAREA: click en btnTrampa

renderizar();
