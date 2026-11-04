/* ==============================================================================
   EJERCICIO 08 · Dividir la cuenta del restaurante (SOLUCIÓN)

   OBJETIVO:
   Usar el objeto Math (round, ceil, floor, max, min y random) junto con
   toFixed() para resolver un problema real con dinero y un sorteo.

   PASOS A REALIZAR:
   1. Crear las constantes al DOM salidaResumen (#resumen) y salidaSorteo
      (#sorteo).
   2. Pedir con prompt el total de la cuenta (87.40), el número de personas
      (4) y el porcentaje de propina (10). Convertid los tres a número.
   3. Calcular importePropina, totalConPropina y porPersona.
   4. Calcular porPersonaRedondeada: lo que paga cada uno redondeado HACIA
      ARRIBA al céntimo. Pista: Math.ceil(porPersona * 100) / 100.
   5. Calcular porPersonaEuros: lo que paga cada uno redondeado hacia arriba
      al euro entero, para quien no quiera pagar con monedas.
   6. Calcular el bote: lo que sobra si todos pagan porPersonaEuros
      (porPersonaEuros × personas − totalConPropina).
   7. Sortear quién invita a los cafés: un número entero aleatorio entre 1 y
      el número de personas. Pista: Math.floor(Math.random() * personas) +
      1.
   8. Mostrar el resumen en #resumen (todos los importes con toFixed(2)) y
      el resultado del sorteo en #sorteo.
   ============================================================================== */

// estructura del programa principal

// constantes al DOM
const salidaResumen = document.querySelector('#resumen');
const salidaSorteo = document.querySelector('#sorteo');

// entradas
const total = Number(prompt('Total de la cuenta (€):', '87.40'));
const personas = Number(prompt('Número de personas:', '4'));
const propina = Number(prompt('Propina (%):', '10'));

// procesamiento
const importePropina = total * propina / 100;
const totalConPropina = total + importePropina;
const porPersona = totalConPropina / personas;

// redondeo HACIA ARRIBA al céntimo: así nunca falta dinero
// 24.035 → 2403.5 → Math.ceil → 2404 → 24.04
const porPersonaRedondeada = Math.ceil(porPersona * 100) / 100;

// redondeo hacia arriba al euro entero
const porPersonaEuros = Math.ceil(porPersona);

// lo que sobra si todos pagan en euros enteros
const bote = porPersonaEuros * personas - totalConPropina;

// número aleatorio entero entre 1 y personas (ambos incluidos)
const invitaCafes = Math.floor(Math.random() * personas) + 1;

const resumen = `Total de la cuenta:   ${total.toFixed(2)} €
Propina (${propina}%):        ${importePropina.toFixed(2)} €
Total con propina:    ${totalConPropina.toFixed(2)} €
-------------------------------------
Personas:             ${personas}
Cada uno (exacto):    ${porPersona.toFixed(4)} €
Cada uno (céntimo ↑): ${porPersonaRedondeada.toFixed(2)} €
Cada uno (euro ↑):    ${porPersonaEuros.toFixed(2)} €
Bote si pagáis euros: ${bote.toFixed(2)} €`;

// salidas
salidaResumen.textContent = resumen;
salidaSorteo.textContent = `☕ Los cafés los paga la persona número ${invitaCafes}`;

// comprobaciones en consola de otros métodos de Math
console.log('Math.round(2.5) =', Math.round(2.5));  // 3
console.log('Math.floor(2.9) =', Math.floor(2.9));  // 2
console.log('Math.ceil(2.1)  =', Math.ceil(2.1));   // 3
console.log('Math.max(4, 9, 2) =', Math.max(4, 9, 2)); // 9
console.log('Math.min(4, 9, 2) =', Math.min(4, 9, 2)); // 2
