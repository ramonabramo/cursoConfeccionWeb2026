/* ==============================================================================
   EJERCICIO 02 · El script que llegó demasiado pronto (SOLUCIÓN)

   OBJETIVO:
   Entender por qué un script colocado en el <head> no encuentra los
   elementos de la página y arreglarlo con el atributo defer.

   PASOS A REALIZAR:
   1. Abrid index.html en el navegador y comprobad que el título NO cambia.
   2. Abrid la consola y leed el error en rojo. Fijaos en qué línea de
      app.js os indica.
   3. Añadid un console.log(titulo) justo después de declarar la constante
      titulo y recargad. ¿Qué valor muestra?
   4. Explicad con vuestras palabras, en un comentario, por qué titulo vale
      null.
   5. Arreglad el problema SIN mover el <script> de sitio: añadid el
      atributo defer a la etiqueta <script> de index.html.
   ============================================================================== */

// estructura del programa principal

// constantes al DOM
const titulo = document.querySelector('#titulo');
const salida = document.querySelector('#salida');

// sin defer mostraba null; con defer ya muestra el <h1>
console.log(titulo);

// entradas
// (en este ejercicio no hay entradas)

// procesamiento
const mensaje = '¡El script ya encuentra los elementos!';

// salidas
titulo.textContent = 'Título cambiado desde JavaScript';
salida.textContent = mensaje;

// ¿Por qué valía null?
// El navegador lee el HTML de arriba abajo. Al encontrar el <script> en el <head>
// sin defer, se para, descarga app.js y lo ejecuta en ese momento. El <body> todavía
// no se ha leído, así que el <h1 id="titulo"> aún no existe: querySelector no lo
// encuentra y devuelve null. Al intentar hacer null.textContent salta el error.
// Con defer, el script se ejecuta cuando el HTML ya se ha leído entero.
