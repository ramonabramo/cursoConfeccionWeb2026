/* ==============================================================================
   EJERCICIO 04 · localStorage frente a sessionStorage

   OBJETIVO:
   Comparar en la práctica localStorage y sessionStorage con dos contadores
   de visitas, convirtiendo a número lo que se lee del almacén.

   PASOS A REALIZAR:
   1. Declarar las claves CLAVE_LOCAL = 'curso-js:b09e04:visitas' y
      CLAVE_SESION = 'curso-js:b09e04:visitas-sesion'.
   2. Declarar contarVisita(almacen, clave): lee el valor (getItem), lo
      convierte a número, le suma 1, lo guarda y lo devuelve. La misma
      función sirve para los dos almacenes: recibe localStorage o
      sessionStorage como parámetro.
   3. Al cargar, llamar a contarVisita con cada almacén y escribir los
      resultados en la tabla.
   4. Cada botón Reiniciar borra la clave de su almacén y pone su celda a 0.
   5. Haced el experimento de la ayuda y explicad en un comentario qué
      ocurre con cada contador.
   ============================================================================== */

// estructura del programa principal
const CLAVE_LOCAL = 'curso-js:b09e04:visitas';
const CLAVE_SESION = 'curso-js:b09e04:visitas-sesion';

// funciones
// TAREA: contarVisita(almacen, clave)


// constantes al DOM que queremos escuchar
const visitasLocal = document.querySelector('#visitasLocal');
const visitasSesion = document.querySelector('#visitasSesion');
const btnResetLocal = document.querySelector('#btnResetLocal');
const btnResetSesion = document.querySelector('#btnResetSesion');

// colocar escuchadores de eventos
// TAREA: botones de reiniciar


// TAREA: contar una visita en cada almacén al cargar


// TAREA: ¿qué pasa con cada contador en el experimento?

