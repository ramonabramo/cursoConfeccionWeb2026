/* ==============================================================================
   EJERCICIO 10 · Ficha técnica con for...in (SOLUCIÓN)

   OBJETIVO:
   Recorrer las propiedades de un objeto con for...in para generar una tabla
   automáticamente, y comprobar por qué no conviene usar for...in con
   arrays.

   PASOS A REALIZAR:
   1. Declarar el objeto movil con modelo, marca, pantalla, memoria, bateria
      y precio.
   2. Con for (const clave in movil), crear una fila por propiedad: en la
      primera celda, la clave; en la segunda, movil[clave].
   3. Contar las propiedades y escribir: 6 características.
   4. Recorrer con for...in el array ['rojo', 'verde'] y mostrar en #aviso
      qué da: las posiciones como texto ('0', '1').
   ============================================================================== */

// estructura del programa principal
const movil = {
    modelo: 'Nébula X',
    marca: 'Astra',
    pantalla: '6,1 pulgadas',
    memoria: '128 GB',
    bateria: '4500 mAh',
    precio: '399 €',
};

// constantes al DOM
const ficha = document.querySelector('#ficha');
const resumen = document.querySelector('#resumen');
const aviso = document.querySelector('#aviso');

// procesamiento y salidas
let total = 0;
for (const clave in movil) {               // clave: 'modelo', 'marca', …
    const fila = document.createElement('tr');
    const celdaClave = document.createElement('td');
    const celdaValor = document.createElement('td');
    celdaClave.textContent = clave;
    celdaValor.textContent = movil[clave];  // corchetes: la clave está en una variable
    fila.append(celdaClave, celdaValor);
    ficha.append(fila);
    total++;
}
resumen.textContent = `${total} características`;

// for...in con un array: da las POSICIONES, y como texto
const colores = ['rojo', 'verde'];
const claves = [];
for (const posicion in colores) {
    claves.push(`${JSON.stringify(posicion)} (${typeof posicion})`);
}
aviso.textContent = `for...in con un array da: ${claves.join(', ')}. Para arrays, mejor for...of.`;
