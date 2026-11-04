/* ==============================================================================
   EJERCICIO 04 · Estilos: style frente a classList (SOLUCIÓN)

   OBJETIVO:
   Cambiar el aspecto de los elementos de dos formas, con estilos en línea
   (style) y con clases CSS (classList: add, remove, toggle y contains), y
   saber cuándo conviene cada una.

   PASOS A REALIZAR:
   1. Crear las constantes al DOM de las cuatro tarjetas, el relleno de la
      barra y el informe.
   2. Tarjeta 1: poner el fondo en 'gold' con style.backgroundColor.
   3. Tarjeta 2: añadir la clase destacada (ya definida en style.css) con
      classList.add.
   4. Tarjeta 3: ocultarla con classList.toggle('oculta'). Guardad lo que
      devuelve toggle.
   5. Tarjeta 4: quitarle la clase borde con classList.remove.
   6. Pedir con prompt el número de bloques terminados (por defecto 6) y
      poner la anchura del relleno de la barra al porcentaje sobre 13
      bloques con style.width.
   7. En el informe, mostrar para cada tarjeta su atributo style
      (getAttribute('style')) y su className, y si la tarjeta 3 contiene la
      clase oculta (contains).
   ============================================================================== */

// estructura del programa principal
const TOTAL_BLOQUES = 13;
let informe = '';

// constantes al DOM
const tarjeta1 = document.querySelector('#tarjeta1');
const tarjeta2 = document.querySelector('#tarjeta2');
const tarjeta3 = document.querySelector('#tarjeta3');
const tarjeta4 = document.querySelector('#tarjeta4');
const relleno = document.querySelector('#relleno');
const salidaInforme = document.querySelector('#informe');

// entradas
const terminados = Number(prompt(`¿Cuántos bloques has terminado? (0-${TOTAL_BLOQUES})`, '6'));

// procesamiento
// 1. style: estilo EN LÍNEA (las propiedades CSS se escriben en camelCase)
tarjeta1.style.backgroundColor = 'gold';

// 2. classList.add: el diseño está en style.css, JS solo pone la clase
tarjeta2.classList.add('destacada');

// 3. toggle: si no la tiene, la pone (y devuelve true); si la tiene, la quita (false)
const ocultaAhora = tarjeta3.classList.toggle('oculta');

// 4. remove
tarjeta4.classList.remove('borde');

// 5. un caso donde style SÍ tiene sentido: un valor calculado al momento
const porcentaje = Math.min(100, Math.max(0, terminados / TOTAL_BLOQUES * 100)) || 0;
relleno.style.width = `${porcentaje}%`;

// salidas
informe += `tarjeta1 · style="${tarjeta1.getAttribute('style')}" · class="${tarjeta1.className}"\n`;
informe += `tarjeta2 · style="${tarjeta2.getAttribute('style')}" · class="${tarjeta2.className}"\n`;
informe += `tarjeta3 · class="${tarjeta3.className}" · toggle devolvió ${ocultaAhora}\n`;
informe += `tarjeta4 · class="${tarjeta4.className}"\n`;
informe += `¿tarjeta3 contiene 'oculta'? ${tarjeta3.classList.contains('oculta')}\n`;
informe += `barra · ${porcentaje.toFixed(0)} % del curso`;
salidaInforme.textContent = informe;
