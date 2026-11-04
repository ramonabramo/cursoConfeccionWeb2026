/* ==============================================================================
   EJERCICIO 07 · Desestructuración y spread

   OBJETIVO:
   Extraer valores de objetos y arrays con desestructuración (con valores
   por defecto, renombrado y resto) y crear arrays y objetos nuevos
   combinando otros con la sintaxis spread.

   PASOS A REALIZAR:
   1. Desestructurar el objeto usuario en las constantes nombre y ciudad,
      renombrar edad como edadUsuario y añadir pais con valor por defecto
      'España'.
   2. Desestructurar el array participantes en oro, plata, bronce y
      ...resto.
   3. Intercambiar los valores de las variables a y b en una sola línea con
      [a, b] = [b, a].
   4. Declarar presentar({ nombre, ciudad }) que reciba un objeto y devuelva
      Lucía vive en Zaragoza. Llamadla con usuario.
   5. Con spread, crear cesta uniendo frutas, verduras y 'pan'.
   6. Con spread, calcular el máximo de numeros con Math.max(...numeros).
   7. Con spread, crear config combinando configPorDefecto y configUsuario
      (el del usuario, el último, para que gane).
   8. Rellenar las tablas. Para mostrar config, usad JSON.stringify(config).
   ============================================================================== */

// estructura del programa principal
const usuario = { nombre: 'Lucía', edad: 28, ciudad: 'Zaragoza' };
const participantes = ['Ana', 'Luis', 'Marta', 'Pablo', 'Hugo'];
let a = 1;
let b = 2;
const frutas = ['manzana', 'pera'];
const verduras = ['tomate', 'lechuga'];
const numeros = [14, 3, 27, 8];
const configPorDefecto = { tema: 'claro', idioma: 'es', tamanoLetra: 16 };
const configUsuario = { tema: 'oscuro', tamanoLetra: 18 };

// funciones
// TAREA: presentar({ nombre, ciudad })


// constantes al DOM
const datosUsuario = document.querySelector('#datosUsuario');
const celdaPodio = document.querySelector('#podio');
const celdaResto = document.querySelector('#resto');
const celdaIntercambio = document.querySelector('#intercambio');
const celdaPresentacion = document.querySelector('#presentacion');
const celdaCesta = document.querySelector('#cesta');
const celdaMaximo = document.querySelector('#maximo');
const celdaConfig = document.querySelector('#config');

// procesamiento
// TAREA: desestructuración del objeto (con renombrado y valor por defecto)


// TAREA: desestructuración del array (con ...resto)


// TAREA: intercambio de a y b


// TAREA: spread → cesta, máximo y config


// salidas
// TAREA: rellena las tablas

