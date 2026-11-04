/* ==============================================================================
   EJERCICIO 07 · Formulario dinámico: campos que aparecen (SOLUCIÓN)

   OBJETIVO:
   Adaptar un formulario a lo que elige el usuario: recalcular el total con
   input y change, mostrar u ocultar un grupo de campos con el atributo
   hidden, hacerlos obligatorios solo cuando son visibles y reiniciar el
   formulario devolviendo la interfaz a su estado inicial.

   PASOS A REALIZAR:
   1. Declarar las constantes PRECIO_CAJA = 19.9 y ENVIOS = { estandar:
      3.95, urgente: 7.95, recogida: 0 }.
   2. Declarar calcularTotal(): leer la cantidad y el envío marcado con
      FormData, y devolver cantidad × precio + envío.
   3. Declarar actualizar(): escribe el total y, según la casilla de
      factura, muestra u oculta #datosFactura (propiedad hidden) y pone o
      quita required en nif y razonSocial.
   4. Escuchar input y change en el FORMULARIO entero (delegación: los
      eventos de los campos suben hasta él) con la función actualizar.
   5. Escuchar click en #btnLimpiar: formulario.reset() y después
      actualizar(), para que la interfaz vuelva al estado inicial.
   6. Escuchar submit: evitar la recarga; si reportValidity() falla, salir;
      si no, mostrar un resumen del pedido (con los datos de factura solo si
      los ha pedido).
   7. Llamar a actualizar() al cargar.
   ============================================================================== */

// estructura del programa principal
const PRECIO_CAJA = 19.9;
const ENVIOS = { estandar: 3.95, urgente: 7.95, recogida: 0 };

// funciones
function calcularTotal() {
    const datos = new FormData(formulario);
    const cantidad = Number(datos.get('cantidad')) || 0;
    const envio = ENVIOS[datos.get('envio')];
    return cantidad * PRECIO_CAJA + envio;
}

// sincroniza la interfaz con lo que hay elegido en el formulario
function actualizar() {
    total.textContent = `${calcularTotal().toFixed(2)} €`;

    const conFactura = quieroFactura.checked;
    datosFactura.hidden = !conFactura;      // mostrar u ocultar el grupo entero
    nif.required = conFactura;              // obligatorios SOLO si están visibles
    razonSocial.required = conFactura;
}

// constantes al DOM que queremos escuchar
const formulario = document.querySelector('#pedido');
const quieroFactura = document.querySelector('#quieroFactura');
const datosFactura = document.querySelector('#datosFactura');
const nif = document.querySelector('#nif');
const razonSocial = document.querySelector('#razonSocial');
const total = document.querySelector('#total');
const btnLimpiar = document.querySelector('#btnLimpiar');
const resumen = document.querySelector('#resumen');

// colocar escuchadores de eventos
// un escuchador en el formulario recibe los eventos de TODOS sus campos (burbuja)
formulario.addEventListener('input', actualizar);
formulario.addEventListener('change', actualizar);

btnLimpiar.addEventListener('click', () => {
    formulario.reset();    // vuelve a los valores iniciales del HTML…
    actualizar();          // …y la interfaz se pone a juego
    resumen.textContent = '…';
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!formulario.reportValidity()) {
        return;
    }
    const datos = new FormData(formulario);
    let texto = `Cajas:   ${datos.get('cantidad')}
Envío:   ${datos.get('envio')}
Total:   ${calcularTotal().toFixed(2)} €`;
    if (quieroFactura.checked) {
        texto += `
Factura: ${datos.get('razonSocial')} (${datos.get('nif').toUpperCase()})`;
    }
    resumen.textContent = texto;
});

// estado inicial
actualizar();
