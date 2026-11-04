/* ==============================================================================
   EJERCICIO 08 · Guardar y cargar la partida (SOLUCIÓN)

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
// 1. = con un array NO copia: las dos variables apuntan al MISMO array
const inventario = ['espada', 'poción'];
const alias = inventario;
alias.push('escudo');
exp1.textContent = inventario.join(', ');          // ¡espada, poción, escudo!

// 2. spread crea un array NUEVO
const copia = [...inventario];
copia.push('mapa');
exp2.textContent = inventario.join(', ');          // sin 'mapa'

// 3. copia superficial de un objeto: el primer nivel es independiente
const partida = { jugador: 'Aria', nivel: 3, inventario: ['espada', 'poción'] };
const superficial = { ...partida };
superficial.nivel = 4;
exp3.textContent = partida.nivel;                  // 3

// 4. …pero el array de dentro se COMPARTE (solo se copió la referencia)
superficial.inventario.push('llave');
exp4.textContent = partida.inventario.join(', ');  // ¡espada, poción, llave!

// 5. copia profunda: copia también todo lo que hay dentro
const profunda = structuredClone(partida);
profunda.inventario.push('gema');
exp5.textContent = partida.inventario.join(', ');  // sin 'gema'

// 6. === compara REFERENCIAS: dos arrays distintos nunca son "iguales"
exp6.textContent = [1, 2] === [1, 2];              // false

// guardar: objeto → texto JSON (null, 2 = con sangría de 2 espacios)
const guardado = JSON.stringify(partida, null, 2);
salidaJson.textContent = guardado;

// cargar: texto JSON → objeto NUEVO
const cargada = JSON.parse(guardado);
salidaCarga.textContent = `Partida cargada: ${cargada.jugador}, nivel ${cargada.nivel}. ¿Es el mismo objeto? ${cargada === partida}`;
