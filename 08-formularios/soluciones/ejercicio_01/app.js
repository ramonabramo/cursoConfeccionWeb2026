/* ==============================================================================
   EJERCICIO 01 · Pedido en la pizzería: leer cada control (SOLUCIÓN)

   OBJETIVO:
   Escuchar el envío de un formulario con el evento submit, evitar que
   recargue la página con preventDefault y leer los valores de seis tipos de
   control distintos: texto, número, select, checkbox, radio y textarea.

   PASOS A REALIZAR:
   1. Crear las constantes de precios: PRECIOS = { mediana: 9, familiar: 14
      }, EXTRA_QUESO = 1.5 y DOMICILIO = 3.
   2. Seleccionar el formulario y cada uno de sus controles.
   3. Escuchar el evento submit del FORMULARIO (no el click del botón) y
      llamar a e.preventDefault() lo primero.
   4. Leer: el nombre (value), la cantidad (value convertido a número), el
      tamaño (value del select), el extra de queso (checked), la entrega (el
      radio marcado: querySelector('[name="entrega"]:checked').value) y las
      notas.
   5. Calcular el total: (precio del tamaño + queso si lo lleva) × cantidad
      + domicilio si lo pide.
   6. Mostrar en el resumen un ticket con todos los datos, el total con dos
      decimales y, en una última línea, typeof de cantidad.value para
      comprobar que llega como texto.
   ============================================================================== */

// estructura del programa principal
const PRECIOS = { mediana: 9, familiar: 14 };
const EXTRA_QUESO = 1.5;
const DOMICILIO = 3;

// constantes al DOM que queremos escuchar
const formulario = document.querySelector('#pedido');
const campoNombre = document.querySelector('#nombre');
const campoCantidad = document.querySelector('#cantidad');
const selectTamano = document.querySelector('#tamano');
const casillaQueso = document.querySelector('#extraQueso');
const campoNotas = document.querySelector('#notas');
const resumen = document.querySelector('#resumen');

// colocar escuchadores de eventos
// el escuchador va en el FORMULARIO: así funciona con el botón y con la tecla Enter
formulario.addEventListener('submit', (e) => {
    e.preventDefault();   // ¡lo primero! sin esto, la página se recarga

    // entradas: cada tipo de control se lee a su manera
    const nombre = campoNombre.value.trim();                 // texto
    const cantidad = Number(campoCantidad.value);            // texto → número
    const tamano = selectTamano.value;                       // value de la opción elegida
    const conQueso = casillaQueso.checked;                   // true / false
    const entrega = formulario.querySelector('[name="entrega"]:checked').value;
    const notas = campoNotas.value.trim();

    // procesamiento
    const precioPizza = PRECIOS[tamano] + (conQueso ? EXTRA_QUESO : 0);
    const gastosEnvio = entrega === 'domicilio' ? DOMICILIO : 0;
    const total = precioPizza * cantidad + gastosEnvio;

    // salidas
    resumen.textContent = `Pedido de: ${nombre || '(sin nombre)'}
Pizzas:     ${cantidad} × ${tamano}${conQueso ? ' con extra de queso' : ''}
Entrega:    ${entrega}
Notas:      ${notas || '—'}
-----------------------------------------
TOTAL:      ${total.toFixed(2)} €

(typeof campoCantidad.value → "${typeof campoCantidad.value}")`;
});
