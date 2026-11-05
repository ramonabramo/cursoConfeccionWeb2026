/* ==============================================================================
   EJERCICIO 11 · Una configuración congelada (SOLUCIÓN)

   OBJETIVO:
   Proteger un objeto de configuración con Object.freeze, comprobar que no
   se pueden cambiar, añadir ni borrar propiedades, y descubrir que la
   congelación no alcanza a los objetos que contiene.

   PASOS A REALIZAR:
   1. Declarar CONFIG con Object.freeze({ vidas: 3, nivel: 'fácil', colores:
      ['rojo', 'azul'] }).
   2. Intentar cambiar vidas, añadir trucos y borrar nivel. Después de cada
      intento, escribir el valor resultante (CONFIG.vidas, CONFIG.trucos,
      CONFIG.nivel).
   3. Escribir el resultado de Object.isFrozen(CONFIG).
   4. Hacer CONFIG.colores.push('negro') y escribir el array: ¿ha cambiado?
   5. Crear CONFIG2 congelando también su array interior, intentar el mismo
      push dentro de un try…catch y escribir lo que pase.
   ============================================================================== */

// estructura del programa principal
const CONFIG = Object.freeze({
    vidas: 3,
    nivel: 'fácil',
    colores: ['rojo', 'azul'],
});

// funciones
function escribir(id, valor) {
    document.querySelector(`#${id}`).textContent = valor;
}

// procesamiento y salidas
CONFIG.vidas = 99;                 // script normal: se ignora sin avisar
escribir('resCambiar', `vidas sigue valiendo ${CONFIG.vidas}`);

CONFIG.trucos = true;              // no se pueden añadir propiedades
escribir('resAnadir', `trucos vale ${CONFIG.trucos}`);

delete CONFIG.nivel;               // ni borrarlas
escribir('resBorrar', `nivel sigue valiendo '${CONFIG.nivel}'`);

escribir('resCongelado', Object.isFrozen(CONFIG));

// la congelación es SUPERFICIAL: el array de dentro no está congelado
CONFIG.colores.push('negro');
escribir('resInterior', `colores: ${CONFIG.colores.join(', ')} (¡ha cambiado!)`);

// para proteger el interior, hay que congelarlo también
const CONFIG2 = Object.freeze({
    vidas: 3,
    colores: Object.freeze(['rojo', 'azul']),
});
try {
    CONFIG2.colores.push('negro');
} catch (error) {
    escribir('resProfundo', `${error.name}: ${error.message}`);
}
