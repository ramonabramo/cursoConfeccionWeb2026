/* ==============================================================================
   EJERCICIO 02 · FormData: el formulario entero de una vez (SOLUCIÓN)

   OBJETIVO:
   Leer todos los datos de un formulario de una sola vez con FormData,
   obtener valores sueltos con get, valores múltiples con getAll y convertir
   el formulario en un objeto con Object.fromEntries.

   PASOS A REALIZAR:
   1. Seleccionar el formulario y los dos pre de salida.
   2. Escuchar submit, evitar la recarga y crear const datos = new
      FormData(formulario).
   3. Con datos.get(…), leer nombre, email, taller y modalidad. Fijaos: se
      usa el atributo name, no el id.
   4. Con datos.getAll('intereses'), obtener un ARRAY con todos los
      intereses marcados.
   5. Mostrar en #salidaGet una línea por dato, con los intereses unidos con
      join.
   6. Convertir todo el formulario en un objeto con
      Object.fromEntries(datos) y mostrarlo con JSON.stringify(objeto, null,
      2) en #salidaObjeto.
   7. Comparad las dos salidas: ¿qué le pasa a intereses en el objeto?
      Explicadlo en un comentario.
   ============================================================================== */

// estructura del programa principal

// constantes al DOM que queremos escuchar
const formulario = document.querySelector('#inscripcion');
const salidaGet = document.querySelector('#salidaGet');
const salidaObjeto = document.querySelector('#salidaObjeto');

// colocar escuchadores de eventos
formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    // entradas: TODO el formulario de una vez (se usan los atributos name)
    const datos = new FormData(formulario);

    // get: el valor de un campo
    const nombre = datos.get('nombre');
    const email = datos.get('email');
    const taller = datos.get('taller');
    const modalidad = datos.get('modalidad');       // el radio marcado
    // getAll: TODOS los valores con ese name (las casillas marcadas)
    const intereses = datos.getAll('intereses');    // array

    // salidas
    salidaGet.textContent = `nombre:     ${nombre}
email:      ${email}
taller:     ${taller}
modalidad:  ${modalidad}
intereses:  ${intereses.join(', ') || '(ninguno)'}  ← array de ${intereses.length}`;

    // Object.fromEntries: de FormData a un objeto normal
    const objeto = Object.fromEntries(datos);
    salidaObjeto.textContent = JSON.stringify(objeto, null, 2);

    // ¿Qué le pasa a intereses en el objeto?
    // Un objeto solo puede tener UNA propiedad "intereses", así que se queda
    // con un único valor (el último). Para campos con varios valores, usad getAll.
});
