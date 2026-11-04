/* ==============================================================================
   EJERCICIO 05 · La ficha de un producto

   OBJETIVO:
   Crear un objeto literal con propiedades y un método, leer propiedades con
   punto y con corchetes (también con una clave guardada en una variable),
   añadir, modificar y borrar propiedades, y recorrerlo con for...in y
   Object.keys().

   PASOS A REALIZAR:
   1. Crear el objeto producto con nombre ('Teclado mecánico'), precio
      (59.9), stock (12), colores (['negro', 'blanco']) y un método conIva()
      que devuelva this.precio * 1.21.
   2. Pedir con prompt el nombre de una propiedad (por defecto "precio").
      Leerla con corchetes: producto[clave]. Si es undefined, mostrar que no
      existe; si no, mostrar su valor.
   3. Modificar el stock: restarle 2 (se han vendido dos).
   4. Añadir una propiedad nueva: oferta con el valor true.
   5. Borrar la propiedad colores con delete.
   6. Con for...in, construir la ficha: una línea clave: valor por cada
      propiedad. Saltaos el método con un if (typeof producto[clave] ===
      'function').
   7. Mostrar en resumen cuántas propiedades tiene (Object.keys) y el precio
      con IVA llamando a producto.conIva().
   ============================================================================== */

// estructura del programa principal
// TAREA: el objeto producto (con el método conIva)


// constantes al DOM
const salidaConsulta = document.querySelector('#consulta');
const salidaFicha = document.querySelector('#ficha');
const salidaResumen = document.querySelector('#resumen');

// entradas
// TAREA: nombre de la propiedad a consultar


// procesamiento y salidas
// TAREA: consulta con corchetes


// TAREA: modificar stock, añadir oferta, borrar colores


// TAREA: for...in → ficha


// TAREA: resumen con Object.keys y conIva()

