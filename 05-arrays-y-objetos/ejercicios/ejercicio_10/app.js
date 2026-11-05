/* ==============================================================================
   EJERCICIO 10 · Ficha técnica con for...in

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
// TAREA: for (const clave in movil) { … una fila … }


// TAREA: for...in con un array

