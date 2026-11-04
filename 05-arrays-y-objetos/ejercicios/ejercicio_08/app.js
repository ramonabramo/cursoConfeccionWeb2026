/* ==============================================================================
   EJERCICIO 08 · Guardar y cargar la partida

   OBJETIVO:
   Entender la diferencia entre copiar un valor y copiar una referencia,
   hacer copias superficiales con spread y profundas con structuredClone(),
   y convertir objetos a texto JSON y de vuelta con JSON.stringify() y
   JSON.parse().

   PASOS A REALIZAR:
   1. Experimento 1: crear inventario = ['espada', 'poción'] y alias =
      inventario. Hacer alias.push('escudo') y mostrar inventario. ¿Qué ha
      pasado?
   2. Experimento 2: crear copia = [...inventario], hacer copia.push('mapa')
      y mostrar inventario.
   3. Experimento 3: crear el objeto partida (jugador 'Aria', nivel 3,
      inventario ['espada', 'poción']). Hacer superficial = { ...partida },
      cambiar superficial.nivel = 4 y mostrar partida.nivel.
   4. Experimento 4: hacer superficial.inventario.push('llave') y mostrar
      partida.inventario. ¿Por qué ha cambiado?
   5. Experimento 5: hacer profunda = structuredClone(partida),
      profunda.inventario.push('gema') y mostrar partida.inventario.
   6. Experimento 6: mostrar el resultado de [1, 2] === [1, 2].
   7. Guardar la partida como texto con JSON.stringify(partida, null, 2) y
      mostrarlo.
   8. Cargarla de nuevo con JSON.parse y mostrar: Partida cargada: Aria,
      nivel 3. ¿Es el mismo objeto? false.
   ============================================================================== */

// estructura del programa principal

// constantes al DOM
const exp1 = document.querySelector('#exp1');
const exp2 = document.querySelector('#exp2');
const exp3 = document.querySelector('#exp3');
const exp4 = document.querySelector('#exp4');
const exp5 = document.querySelector('#exp5');
const exp6 = document.querySelector('#exp6');
const salidaJson = document.querySelector('#json');
const salidaCarga = document.querySelector('#carga');

// procesamiento y salidas
// TAREA: experimento 1 · alias = inventario


// TAREA: experimento 2 · copia = [...inventario]


// TAREA: experimento 3 · copia superficial de un objeto


// TAREA: experimento 4 · el array de dentro de la copia superficial


// TAREA: experimento 5 · structuredClone


// TAREA: experimento 6 · [1, 2] === [1, 2]


// TAREA: guardar con JSON.stringify y cargar con JSON.parse

