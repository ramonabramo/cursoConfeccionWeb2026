/* ==============================================================================
   EJERCICIO 04 · Galería con eventos de ratón

   OBJETIVO:
   Escuchar varios eventos de ratón (click, dblclick, mouseover y mouseout)
   en un grupo de elementos, y usar las propiedades type y currentTarget del
   objeto evento para saber qué ha pasado y en qué elemento.

   PASOS A REALIZAR:
   1. Seleccionar todas las fotos con querySelectorAll.
   2. Declarar registrar(e): crea un li con el tipo de evento (e.type) y el
      nombre de la foto (e.currentTarget.dataset.nombre), lo pone el primero
      de la lista y, si hay más de 5, quita el último.
   3. Recorrer las fotos con forEach y, en cada una, escuchar cuatro
      eventos:
   4. mouseover: mostrar en #info el nombre y el data-info de la foto.
   5. mouseout: volver a mostrar Pasa el ratón por una foto….
   6. dblclick: alternar la clase favorito y actualizar el contador de
      favoritas (contad las .favorito con querySelectorAll).
   7. Los cuatro eventos, además, llaman a registrar(e).
   ============================================================================== */

// estructura del programa principal
const MAX_REGISTRO = 5;

// funciones
// TAREA: registrar(e)


// constantes al DOM que queremos escuchar
// TAREA: fotos (todas), info, favoritas y registro


// colocar escuchadores de eventos
// TAREA: forEach sobre las fotos con click, dblclick, mouseover y mouseout

