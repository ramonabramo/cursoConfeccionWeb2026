/* ==============================================================================
   EJERCICIO 11 · Rectángulo: HTML con plantillas (SOLUCIÓN)

   OBJETIVO:
   Convertir dos entradas en números, hacer cálculos con ellas y generar un
   bloque de HTML completo con una plantilla de texto de varias líneas e
   innerHTML.

   PASOS A REALIZAR:
   1. Pedir la base y la altura con prompt() y convertirlas con Number().
   2. Calcular el área (base × altura) y el perímetro (2 × (base + altura)).
   3. Construir con comillas invertidas una lista <ul> con tres <li>:
      medidas, área y perímetro, con los números en <strong>.
   4. Asignar la plantilla a resultado.innerHTML.
   5. ¿Qué pasaría si no convirtierais con Number()? Probad a quitarlo y
      calculad el perímetro de 3 y 4.
   ============================================================================== */

// estructura del programa principal

// constantes al DOM
const resultado = document.querySelector('#resultado');

// entradas: prompt() devuelve texto; para operar, número
const base = Number(prompt('Base del rectángulo', '3'));
const altura = Number(prompt('Altura del rectángulo', '4'));

// procesamiento
const area = base * altura;
const perimetro = 2 * (base + altura);

// salidas: una plantilla de varias líneas con etiquetas dentro
resultado.innerHTML = `
    <ul>
        <li>Medidas: <strong>${base} × ${altura}</strong></li>
        <li>Área: <strong>${area}</strong></li>
        <li>Perímetro: <strong>${perimetro}</strong></li>
    </ul>`;
