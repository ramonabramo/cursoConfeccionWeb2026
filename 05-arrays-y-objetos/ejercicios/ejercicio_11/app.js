/* ==============================================================================
   EJERCICIO 11 · Una configuración congelada

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
// TAREA: const CONFIG = Object.freeze({ … });


// funciones
function escribir(id, valor) {
    document.querySelector(`#${id}`).textContent = valor;
}

// procesamiento y salidas
// TAREA: los cinco intentos con CONFIG


// TAREA: CONFIG2, congelado también por dentro

