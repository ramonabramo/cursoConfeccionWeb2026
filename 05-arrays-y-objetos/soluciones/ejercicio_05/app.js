/* ==============================================================================
   EJERCICIO 05 · La ficha de un producto (SOLUCIÓN)

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
const producto = {
    nombre: 'Teclado mecánico',
    precio: 59.9,
    stock: 12,
    colores: ['negro', 'blanco'],
    // método: una propiedad cuyo valor es una función
    conIva() {
        return this.precio * 1.21;   // this = el propio objeto
    },
};

// constantes al DOM
const salidaConsulta = document.querySelector('#consulta');
const salidaFicha = document.querySelector('#ficha');
const salidaResumen = document.querySelector('#resumen');

// entradas
const clave = (prompt('¿Qué propiedad quieres consultar?', 'precio') || '').trim();

// procesamiento y salidas
// 1. corchetes: la única forma de leer una propiedad cuyo nombre está en una variable
const valor = producto[clave];
if (valor === undefined) {
    salidaConsulta.textContent = `El producto no tiene la propiedad "${clave}".`;
} else {
    salidaConsulta.textContent = `producto.${clave} → ${valor}`;
}

// 2. modificar, añadir y borrar
producto.stock -= 2;          // modificar una existente
producto.oferta = true;       // añadir: basta con asignarla
delete producto.colores;      // borrar

// 3. recorrer las propiedades
let ficha = '';
for (const prop in producto) {
    if (typeof producto[prop] === 'function') {
        continue;             // me salto los métodos
    }
    ficha += `${prop}: ${producto[prop]}\n`;
}
salidaFicha.textContent = ficha;

// 4. Object.keys devuelve un ARRAY con los nombres de las propiedades
const numPropiedades = Object.keys(producto).length;
salidaResumen.textContent = `${numPropiedades} propiedades (incluido el método) · Precio con IVA: ${producto.conIva().toFixed(2)} €`;
