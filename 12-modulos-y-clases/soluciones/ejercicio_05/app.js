/* ==============================================================================
   EJERCICIO 05 · Encapsulación: la cuenta bancaria (SOLUCIÓN)

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
    // static: pertenece a la clase, no a cada cuenta
    static LIMITE_RETIRADA = 600;

    // privados: solo el código de esta clase puede tocarlos
    #saldo = 0;
    #movimientos = [];
    #titular = '';

    constructor(titular) {
        this.titular = titular;        // pasa por el setter, que valida
    }

    // getters: se leen como propiedades (cuenta.saldo), sin paréntesis
    get saldo() {
        return this.#saldo;
    }

    get movimientos() {
        return [...this.#movimientos];  // una copia: el original no sale de aquí
    }

    get titular() {
        return this.#titular;
    }

    // setter: se usa como una asignación (cuenta.titular = '…'), pero valida
    set titular(nombre) {
        const limpio = String(nombre).trim();
        if (limpio.length < 3) {
            throw new Error('El titular debe tener al menos 3 letras.');
        }
        this.#titular = limpio;
    }

    ingresar(cantidad) {
        this.#validar(cantidad);
        this.#saldo = this.#redondear(this.#saldo + cantidad);
        this.#registrar('Ingreso', cantidad);
    }

    retirar(cantidad) {
        this.#validar(cantidad);
        if (cantidad > CuentaBancaria.LIMITE_RETIRADA) {
            throw new Error(`No se pueden retirar más de ${CuentaBancaria.LIMITE_RETIRADA} € de una vez.`);
        }
        if (cantidad > this.#saldo) {
            throw new Error('Saldo insuficiente.');
        }
        this.#saldo = this.#redondear(this.#saldo - cantidad);
        this.#registrar('Retirada', -cantidad);
    }

    // métodos privados: herramientas internas
    #validar(cantidad) {
        if (!Number.isFinite(cantidad) || cantidad <= 0) {
            throw new Error('La cantidad debe ser un número mayor que 0.');
        }
    }

    #redondear(numero) {
        return Math.round(numero * 100) / 100;
    }

    #registrar(tipo, importe) {
        this.#movimientos.push({ tipo, importe, saldo: this.#saldo });
    }
}

const cuenta = new CuentaBancaria('Lucía Martín');

// funciones
function formatear(cantidad) {
    return `${cantidad.toFixed(2).replace('.', ',')} €`;
}

function crearMovimiento(movimiento) {
    const li = document.createElement('li');
    const importe = document.createElement('span');
    importe.classList.add(movimiento.importe > 0 ? 'importe-positivo' : 'importe-negativo');
    importe.textContent = `${movimiento.importe > 0 ? '+' : ''}${formatear(movimiento.importe)}`;
    li.append(`${movimiento.tipo} · `, importe, ` · saldo ${formatear(movimiento.saldo)}`);
    return li;
}

function renderizar() {
    salidaTitular.textContent = `Titular: ${cuenta.titular}`;
    salidaSaldo.textContent = formatear(cuenta.saldo);       // getter: sin paréntesis
    listaMovimientos.replaceChildren();
    cuenta.movimientos.forEach((m) => listaMovimientos.append(crearMovimiento(m)));
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
formOperacion.addEventListener('submit', (e) => {
    e.preventDefault();
    // entradas
    const operacion = e.submitter.dataset.operacion;     // 'ingresar' o 'retirar'
    const cantidad = Number(formOperacion.cantidad.value);
    // procesamiento: la clase decide si se puede
    try {
        if (operacion === 'ingresar') {
            cuenta.ingresar(cantidad);
        } else {
            cuenta.retirar(cantidad);
        }
        mensaje.textContent = '';
        formOperacion.cantidad.value = '';
    } catch (error) {
        mensaje.textContent = `✘ ${error.message}`;
    }
    // salidas
    renderizar();
});

formTitular.addEventListener('submit', (e) => {
    e.preventDefault();
    try {
        cuenta.titular = formTitular.nuevoTitular.value;   // parece una asignación, pero pasa por el setter
        mensaje.textContent = '';
        formTitular.nuevoTitular.value = '';
    } catch (error) {
        mensaje.textContent = `✘ ${error.message}`;
    }
    renderizar();
});

btnTrampa.addEventListener('click', () => {
    cuenta.saldo = 1000000;                                          // no hay setter: se ignora
    cuenta.movimientos.push({ tipo: 'Regalo', importe: 1000000, saldo: 1000000 });  // es una copia
    mensaje.textContent = `🕵️ Trampa intentada. El saldo sigue siendo ${formatear(cuenta.saldo)}.`;
    renderizar();
});

renderizar();
