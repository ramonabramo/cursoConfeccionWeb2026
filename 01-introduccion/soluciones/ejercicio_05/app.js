/* ==============================================================================
   EJERCICIO 05 · textContent frente a innerHTML (SOLUCIÓN)

   OBJETIVO:
   Ver la diferencia entre textContent, que escribe texto tal cual, e
   innerHTML, que interpreta las etiquetas HTML, y entender por qué nunca
   debemos usar innerHTML con textos que escribe el usuario.

   PASOS A REALIZAR:
   1. Crear la constante frase con el texto: Esto es <strong>muy</strong>
      importante
   2. Crear las tres constantes al DOM: salidaTexto, salidaHtml y
      salidaComentario.
   3. Escribir frase en salidaTexto usando textContent.
   4. Escribir frase en salidaHtml usando innerHTML. Comparad los dos
      párrafos en el navegador.
   5. Crear la constante comentario con el texto <img src="x"
      onerror="alert('¡Te he colado código!')"> y escribirla en
      salidaComentario con textContent.
   6. Solo como experimento: cambiad temporalmente ese último textContent
      por innerHTML, recargad y observad qué pasa. Después dejadlo otra vez
      con textContent.
   ============================================================================== */

// estructura del programa principal
const frase = 'Esto es <strong>muy</strong> importante';

// simula un comentario escrito por un usuario malintencionado
const comentario = '<img src="x" onerror="alert(\'¡Te he colado código!\')">';

// constantes al DOM
const salidaTexto = document.querySelector('#salidaTexto');
const salidaHtml = document.querySelector('#salidaHtml');
const salidaComentario = document.querySelector('#salidaComentario');

// entradas
// (en este ejercicio no hay entradas)

// procesamiento
// (en este ejercicio no hay cálculos)

// salidas
// textContent escribe el texto tal cual: las etiquetas se ven como caracteres
salidaTexto.textContent = frase;

// innerHTML interpreta las etiquetas: "muy" aparece en negrita
salidaHtml.innerHTML = frase;

// un texto que viene del usuario SIEMPRE con textContent:
// así la etiqueta <img> se muestra como texto y no se ejecuta nada
salidaComentario.textContent = comentario;
