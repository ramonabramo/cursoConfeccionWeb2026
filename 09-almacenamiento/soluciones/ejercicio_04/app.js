/* ==============================================================================
   EJERCICIO 04 · localStorage frente a sessionStorage (SOLUCIÓN)

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
// funciona con CUALQUIER almacén: los dos tienen los mismos métodos
function contarVisita(almacen, clave) {
    // getItem devuelve texto o null; Number(null) es 0, así que la primera vez cuenta desde 0
    const anteriores = Number(almacen.getItem(clave));
    const total = anteriores + 1;
    almacen.setItem(clave, total);   // se guarda como texto: '1', '2'…
    return total;
}

// constantes al DOM que queremos escuchar
const visitasLocal = document.querySelector('#visitasLocal');
const visitasSesion = document.querySelector('#visitasSesion');
const btnResetLocal = document.querySelector('#btnResetLocal');
const btnResetSesion = document.querySelector('#btnResetSesion');

// colocar escuchadores de eventos
btnResetLocal.addEventListener('click', () => {
    localStorage.removeItem(CLAVE_LOCAL);
    visitasLocal.textContent = 0;
});

btnResetSesion.addEventListener('click', () => {
    sessionStorage.removeItem(CLAVE_SESION);
    visitasSesion.textContent = 0;
});

// cada carga de la página es una visita
visitasLocal.textContent = contarVisita(localStorage, CLAVE_LOCAL);
visitasSesion.textContent = contarVisita(sessionStorage, CLAVE_SESION);

// El experimento:
// · Recargar: suben los DOS. sessionStorage sobrevive a las recargas.
// · Otra pestaña: localStorage sigue sumando (es el mismo almacén para todo el origen);
//   sessionStorage empieza en 1, porque cada pestaña tiene su propia sesión.
// · Cerrar y volver: localStorage recuerda; sessionStorage vuelve a empezar.
