/* ==============================================================================
   EJERCICIO 07 · Fábrica de contadores (SOLUCIÓN)

   OBJETIVO:
   Crear funciones que devuelven otras funciones y comprobar que la función
   devuelta recuerda las variables del lugar donde se creó (closure), de
   forma independiente para cada copia.

   PASOS A REALIZAR:
   1. Declarar la función crearContador(inicio = 0, paso = 1). Dentro,
      declarar let valor = inicio y DEVOLVER una función flecha que sume
      paso a valor y devuelva el nuevo valor.
   2. Fabricar dos contadores: visitas = crearContador() y puntos =
      crearContador(100, 10).
   3. Crear las constantes al DOM.
   4. Llamar a visitas() tres veces, a puntos() dos veces y a visitas() otra
      vez, escribiendo cada resultado en su celda.
   5. Declarar la función crearMultiplicador(factor) que devuelva una flecha
      (n) => n * factor.
   6. Fabricar doble y triple, y escribir doble(7) y triple(7) en la segunda
      tabla.
   7. Intentad leer valor desde fuera con console.log(valor). Copiad el
      error en un comentario y dejad la línea comentada.
   ============================================================================== */

// estructura del programa principal
// funciones
// una función que FABRICA y devuelve otra función
function crearContador(inicio = 0, paso = 1) {
    let valor = inicio;   // variable local de crearContador

    // la función devuelta sigue viendo "valor" aunque crearContador ya haya terminado
    return () => {
        valor += paso;
        return valor;
    };
}

function crearMultiplicador(factor) {
    return (n) => n * factor;   // recuerda su "factor"
}

// cada llamada fabrica una función nueva con SU PROPIO valor
const visitas = crearContador();          // empieza en 0, sube de 1 en 1
const puntos = crearContador(100, 10);    // empieza en 100, sube de 10 en 10
const doble = crearMultiplicador(2);
const triple = crearMultiplicador(3);

// constantes al DOM
const visitas1 = document.querySelector('#visitas1');
const visitas2 = document.querySelector('#visitas2');
const visitas3 = document.querySelector('#visitas3');
const puntos1 = document.querySelector('#puntos1');
const puntos2 = document.querySelector('#puntos2');
const visitas4 = document.querySelector('#visitas4');
const celdaDoble = document.querySelector('#doble');
const celdaTriple = document.querySelector('#triple');

// procesamiento y salidas
visitas1.textContent = visitas();   // 1
visitas2.textContent = visitas();   // 2
visitas3.textContent = visitas();   // 3
puntos1.textContent = puntos();     // 110
puntos2.textContent = puntos();     // 120
visitas4.textContent = visitas();   // 4: no le afecta lo que haya pasado con puntos

celdaDoble.textContent = doble(7);    // 14
celdaTriple.textContent = triple(7);  // 21

// console.log(valor);
// ReferenceError: valor is not defined → solo existe dentro de cada contador
