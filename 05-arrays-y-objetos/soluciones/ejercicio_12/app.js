/* ==============================================================================
   EJERCICIO 12 · El mismo reto con cinco bucles (SOLUCIÓN)

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
// 1. for clásico: el índice lo controla la cabecera
let total1 = 0;
const agotados1 = [];
for (let i = 0; i < productos.length; i++) {
    total1 += productos[i].unidades;
    if (productos[i].unidades === 0) agotados1.push(productos[i].nombre);
}
escribir('resFor', total1, agotados1);

// 2. while: el índice lo controlo yo (¡que no se me olvide el i++!)
let total2 = 0;
const agotados2 = [];
let i = 0;
while (i < productos.length) {
    total2 += productos[i].unidades;
    if (productos[i].unidades === 0) agotados2.push(productos[i].nombre);
    i++;
}
escribir('resWhile', total2, agotados2);

// 3. for...of: directamente cada producto, sin índice
let total3 = 0;
const agotados3 = [];
for (const producto of productos) {
    total3 += producto.unidades;
    if (producto.unidades === 0) agotados3.push(producto.nombre);
}
escribir('resForOf', total3, agotados3);

// 4. forEach: un callback por producto
let total4 = 0;
const agotados4 = [];
productos.forEach((producto) => {
    total4 += producto.unidades;
    if (producto.unidades === 0) agotados4.push(producto.nombre);
});
escribir('resForEach', total4, agotados4);

// 5. for...in: los nombres de las propiedades de un OBJETO
let total5 = 0;
const agotados5 = [];
for (const nombre in stock) {
    total5 += stock[nombre];
    if (stock[nombre] === 0) agotados5.push(nombre);
}
escribir('resForIn', total5, agotados5);

// el PRIMERO con menos de 5: en cuanto lo encuentro, break
let primero = null;
for (const producto of productos) {
    if (producto.unidades < 5) {
        primero = producto;
        break;                       // forEach no se puede interrumpir
    }
}
document.querySelector('#primero').textContent = `Primero con menos de 5 unidades: ${primero.nombre} (${primero.unidades})`;
