/* ==============================================================================
   EJERCICIO 01 · Ficha de personaje: let y const (SOLUCIÓN)

   OBJETIVO:
   Decidir cuándo usar const y cuándo let, reasignar una variable declarada
   con let y comprobar qué pasa si intentamos reasignar una constante.

   PASOS A REALIZAR:
   1. Declarar con const el nombre del personaje ("Aria") y su clase
      ("Maga"). Estos datos no cambiarán en toda la partida.
   2. Declarar con let el nivel (1) y la vida (100). Estos sí cambiarán.
   3. Crear las constantes al DOM fichaInicial y fichaFinal.
   4. Escribir en fichaInicial: Aria · Maga · Nivel 1 · Vida 100 (usando las
      variables, no escribiendo los valores a mano).
   5. Tras la batalla, reasignar: el nivel pasa a 2 y la vida a 65.
   6. Escribir en fichaFinal la ficha con los valores nuevos.
   7. Al final, intentad cambiar el nombre: nombre = 'Otra'. Leed el error
      de la consola, copiadlo en un comentario y después comentad esa línea
      para que el programa vuelva a funcionar.
   ============================================================================== */

// estructura del programa principal
// datos que NO cambian en toda la partida → const
const nombre = 'Aria';
const clase = 'Maga';

// datos que SÍ cambian durante la partida → let
let nivel = 1;
let vida = 100;

// constantes al DOM
const fichaInicial = document.querySelector('#fichaInicial');
const fichaFinal = document.querySelector('#fichaFinal');

// entradas
// (en este ejercicio no hay entradas)

// procesamiento y salidas
// ficha al empezar
fichaInicial.textContent = `${nombre} · ${clase} · Nivel ${nivel} · Vida ${vida}`;

// la batalla: reasigno las variables declaradas con let
nivel = 2;
vida = 65;

// ficha después de la batalla: mismas variables, valores nuevos
fichaFinal.textContent = `${nombre} · ${clase} · Nivel ${nivel} · Vida ${vida}`;

// intento de reasignar una constante:
// nombre = 'Otra';
// En Chrome/Edge: TypeError: Assignment to constant variable.
// Una constante no se puede reasignar. La dejo comentada para que el programa funcione.
