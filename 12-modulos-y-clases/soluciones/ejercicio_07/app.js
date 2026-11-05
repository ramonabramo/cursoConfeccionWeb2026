/* ==============================================================================
   EJERCICIO 07 · Depuración: cuatro fallos escondidos (SOLUCIÓN)

   OBJETIVO:
   Encontrar fallos que no producen errores usando las herramientas de
   desarrollo: puntos de interrupción, ejecución paso a paso, inspección de
   variables y la instrucción debugger.

   PASOS A REALIZAR:
   1. Pulsad Calcular y comparad el resultado con el esperado. Apuntad qué
      está mal.
   2. Abrid las herramientas de desarrollo (F12) → Fuentes (Sources) →
      app.js. Poned un punto de interrupción en la primera línea dentro del
      escuchador submit, pulsando en su número.
   3. Pulsad Calcular: la ejecución se detiene. Avanzad línea a línea con
      «Pasar a la siguiente» (F10) y entrad en las funciones con «Entrar»
      (F11).
   4. En cada paso, mirad el panel Ámbito (Scope) o pasad el ratón por
      encima de las variables. ¿Qué hay en notas? ¿Son números?
   5. Dentro de calcularMedia, vigilad i y suma en cada vuelta. ¿Cuántas
      vueltas da el bucle?
   6. Escribid la palabra debugger; en la primera línea de notaMaxima y
      volved a calcular: el navegador se detiene ahí solo.
   7. Corregid los cuatro fallos (uno en cada función) y quitad los debugger
      antes de terminar.
   ============================================================================== */

// estructura del programa principal

// funciones
function leerNotas(texto) {
    // FALLO 1 corregido: split devuelve textos (' 4.5'). Hay que convertirlos a número.
    return texto.split(',').map((parte) => Number(parte));
}

function calcularMedia(notas) {
    let suma = 0;
    // FALLO 2 corregido: con <= se leía notas[5], que no existe (undefined → NaN).
    for (let i = 0; i < notas.length; i++) {
        suma = suma + notas[i];
    }
    return suma / notas.length;
}

function contarAprobados(notas) {
    // FALLO 3 corregido: un 5 es un aprobado. Hacía falta >=.
    return notas.filter((nota) => nota >= 5).length;
}

function notaMaxima(notas) {
    // FALLO 4 corregido: Math.max no acepta un array. Hay que separar sus elementos con ...
    return Math.max(...notas);
}

// constantes al DOM que queremos escuchar
const formulario = document.querySelector('#formNotas');
const salida = document.querySelector('#salida');

// colocar escuchadores de eventos
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    // entradas
    const notas = leerNotas(formulario.notas.value);
    // procesamiento
    const media = calcularMedia(notas);
    const aprobados = contarAprobados(notas);
    const maxima = notaMaxima(notas);
    // salidas
    salida.textContent = `Media: ${Number(media).toFixed(2)} · Aprobados: ${aprobados} de ${notas.length} · Máxima: ${maxima}`;
});
