/* ==============================================================================
   EJERCICIO 12 · El mismo reto con cinco bucles

   OBJETIVO:
   Resolver el mismo problema con for, while, for...of, forEach y for...in,
   comparar cómo se escribe cada uno y elegir el más adecuado para buscar el
   primer elemento que cumple una condición.

   PASOS A REALIZAR:
   1. Con el array productos ([{ nombre, unidades }, …]), calcular el total
      de unidades y la lista de agotados (unidades === 0) con un for
      clásico.
   2. Repetir con while (gestionando vosotros el índice), con for...of y con
      forEach. Las cuatro deben dar Total: 42 · agotados: ratón, webcam.
   3. Con el objeto stock ({ teclado: 12, raton: 0, … }), hacer lo mismo con
      for...in.
   4. Encontrar el PRIMER producto con menos de 5 unidades con for...of y
      break, y escribirlo en #primero. ¿Por qué no se puede hacer con
      forEach?
   ============================================================================== */

// estructura del programa principal
const productos = [
    { nombre: 'teclado', unidades: 12 },
    { nombre: 'ratón', unidades: 0 },
    { nombre: 'monitor', unidades: 3 },
    { nombre: 'webcam', unidades: 0 },
    { nombre: 'auriculares', unidades: 27 },
];
const stock = { teclado: 12, raton: 0, monitor: 3, webcam: 0, auriculares: 27 };

// funciones
function escribir(id, total, agotados) {
    document.querySelector(`#${id}`).textContent = `Total: ${total} · agotados: ${agotados.join(', ')}`;
}

// procesamiento y salidas
// TAREA: 1. for clásico


// TAREA: 2. while


// TAREA: 3. for...of


// TAREA: 4. forEach


// TAREA: 5. for...in sobre stock


// TAREA: el primero con menos de 5 unidades, con for...of y break

