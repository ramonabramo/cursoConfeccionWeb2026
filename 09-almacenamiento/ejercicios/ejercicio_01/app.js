/* ==============================================================================
   EJERCICIO 01 · Mi primer almacén

   OBJETIVO:
   Usar los métodos básicos de localStorage (setItem, getItem, removeItem y
   clear) y recorrer su contenido con length y key(), comprobando que los
   datos siguen ahí después de recargar la página.

   PASOS A REALIZAR:
   1. Seleccionar los dos campos, los cuatro botones, el mensaje, el título
      y la lista.
   2. Declarar mostrarContenido(): vacía la lista y, con un for de 0 a
      localStorage.length, crea un li por clave con el texto clave → valor
      (usad localStorage.key(i) y getItem). Actualiza el título con el
      número de elementos.
   3. Guardar: si la clave no está vacía, setItem(clave, valor), mensaje
      Guardado: color → azul y mostrarContenido().
   4. Leer: getItem(clave). Si devuelve null, mensaje No hay nada guardado
      con la clave color; si no, mostrar su valor y ponerlo en el campo
      valor.
   5. Borrar: removeItem(clave), mensaje y mostrarContenido().
   6. Vaciar todo: pedir confirmación con confirm y, si acepta, clear() y
      mostrarContenido().
   7. Llamar a mostrarContenido() al cargar. Guardad algo, recargad la
      página… y comprobad que sigue ahí.
   ============================================================================== */

// estructura del programa principal

// funciones
// TAREA: mostrarContenido()


// constantes al DOM que queremos escuchar
// TAREA: campos, botones, mensaje, título y lista


// colocar escuchadores de eventos
// TAREA: guardar, leer, borrar y vaciar


// TAREA: mostrar el contenido al cargar

