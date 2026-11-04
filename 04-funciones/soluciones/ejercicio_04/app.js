/* ==============================================================================
   EJERCICIO 04 · Tres formas de escribir una función (SOLUCIÓN)

   OBJETIVO:
   Escribir la misma idea con las tres sintaxis de función de JavaScript
   (declaración, expresión y flecha), usar el retorno implícito de las
   funciones flecha y comprobar qué es el hoisting.

   PASOS A REALIZAR:
   1. ANTES de declarar ninguna función, llamar a areaRectangulo(4, 3) y
      mostrar el resultado en la consola. (Sí, antes. Confiad en mí.)
   2. Declarar la función areaRectangulo(base, altura) con una declaración
      de función.
   3. Crear la constante areaTriangulo con una expresión de función: const
      areaTriangulo = function (base, altura) { … };
   4. Crear la constante areaCirculo con una función flecha de una sola
      línea y retorno implícito (sin llaves ni return). Usad Math.PI.
   5. Crear las constantes al DOM y pedir base (4), altura (3) y radio (2)
      con prompt.
   6. Escribir las tres áreas en la tabla con dos decimales.
   7. Mostrar en salida cuál de las tres figuras tiene mayor área (usad
      Math.max).
   8. Por último, probad a llamar a areaTriangulo ANTES de su definición.
      Copiad el error en un comentario y dejad la línea comentada.
   ============================================================================== */

// estructura del programa principal
// hoisting: una DECLARACIÓN de función se puede usar antes de la línea donde está escrita
console.log('Área del rectángulo 4 × 3:', areaRectangulo(4, 3));

// con una EXPRESIÓN no funciona:
// console.log(areaTriangulo(4, 3));
// ReferenceError: Cannot access 'areaTriangulo' before initialization

// funciones
// 1. declaración de función
function areaRectangulo(base, altura) {
    return base * altura;
}

// 2. expresión de función: la función se guarda en una constante
const areaTriangulo = function (base, altura) {
    return base * altura / 2;
};

// 3. función flecha con retorno implícito: sin llaves, sin return
const areaCirculo = (radio) => Math.PI * radio ** 2;

// constantes al DOM
const areaRect = document.querySelector('#areaRect');
const areaTri = document.querySelector('#areaTri');
const areaCirc = document.querySelector('#areaCirc');
const salida = document.querySelector('#salida');

// entradas
const base = Number(prompt('Base:', '4'));
const altura = Number(prompt('Altura:', '3'));
const radio = Number(prompt('Radio del círculo:', '2'));

// procesamiento
const rect = areaRectangulo(base, altura);
const tri = areaTriangulo(base, altura);
const circ = areaCirculo(radio);
const mayor = Math.max(rect, tri, circ);

let figuraMayor;
if (mayor === rect) {
    figuraMayor = 'el rectángulo';
} else if (mayor === tri) {
    figuraMayor = 'el triángulo';
} else {
    figuraMayor = 'el círculo';
}

// salidas
areaRect.textContent = rect.toFixed(2);
areaTri.textContent = tri.toFixed(2);
areaCirc.textContent = circ.toFixed(2);
salida.textContent = `La figura con más área es ${figuraMayor}: ${mayor.toFixed(2)}`;
