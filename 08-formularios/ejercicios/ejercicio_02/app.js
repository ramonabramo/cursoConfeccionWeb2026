/* ==============================================================================
   EJERCICIO 02 · FormData: el formulario entero de una vez

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
// TAREA: formulario, salidaGet y salidaObjeto


// colocar escuchadores de eventos
// TAREA: submit
    // TAREA: preventDefault y new FormData(formulario)

    // TAREA: get de cada campo y getAll de intereses

    // TAREA: Object.fromEntries + JSON.stringify

    // TAREA: ¿qué le pasa a intereses en el objeto?
