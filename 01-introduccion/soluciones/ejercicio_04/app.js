/* ==============================================================================
   EJERCICIO 04 · Los tres canales de salida (SOLUCIÓN)

   OBJETIVO:
   Usar los tres canales de salida del bloque (console.log, alert y
   textContent) con el mismo mensaje y comparar quién ve cada uno y cómo se
   comporta.

   PASOS A REALIZAR:
   1. Crear una constante mensaje con el texto "Bienvenidos al curso de
      JavaScript".
   2. Crear la constante al DOM salida apuntando a #salida.
   3. Mostrar el mensaje en la consola con console.log().
   4. Mostrar el mensaje en un cuadro de aviso con alert().
   5. Escribir el mensaje en el párrafo con textContent.
   6. Probad también console.warn('Esto es un aviso') y console.error('Esto
      es un error') y fijaos en cómo los muestra la consola.
   7. Responded en un comentario: ¿el párrafo cambia antes o después de
      cerrar el alert? ¿Por qué?
   ============================================================================== */

// estructura del programa principal
const mensaje = 'Bienvenidos al curso de JavaScript';

// constantes al DOM
const salida = document.querySelector('#salida');

// entradas
// (en este ejercicio no hay entradas)

// procesamiento
// (en este ejercicio no hay cálculos: el mensaje ya está listo)

// salidas
// canal 1 → la consola: solo lo ve quien programa
console.log(mensaje);

// canal 2 → cuadro de aviso: lo ve el usuario y bloquea la página
alert(mensaje);

// canal 3 → la página: lo ve el usuario, integrado en el diseño
salida.textContent = mensaje;

// variantes de la consola: cambian el color y el icono del mensaje
console.warn('Esto es un aviso');
console.error('Esto es un error');

// ¿Antes o después del alert?
// Después. alert() detiene el programa hasta que el usuario pulsa Aceptar.
// La línea de textContent no se ejecuta hasta entonces.
