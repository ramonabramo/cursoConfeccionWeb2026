/* ==============================================================================
   EJERCICIO 11 · Mi propio filter (SOLUCIÓN)

   OBJETIVO:
   Escribir una función de orden superior que recibe una lista y un callback
   que decide qué elementos se quedan, y comprobar que hace lo mismo que el
   método filter de los arrays.

   PASOS A REALIZAR:
   1. Declarar filtrar(lista, decide): crea un array vacío, recorre la lista
      con for...of y, si decide(elemento) devuelve true, lo añade. Devuelve
      el array nuevo.
   2. Declarar dos funciones que deciden: esPar(n) y empiezaPorA(texto) (sin
      distinguir mayúsculas).
   3. Con numeros = [3, 8, 15, 22, 7, 10] y nombres = ['Ana', 'luis',
      'alba', 'Teo'], rellenar las tres primeras filas.
   4. En la cuarta, usar el filter de los arrays con esPar y comprobar que
      da lo mismo que vuestra función.
   ============================================================================== */

// estructura del programa principal
const numeros = [3, 8, 15, 22, 7, 10];
const nombres = ['Ana', 'luis', 'alba', 'Teo'];

// funciones
// de orden superior: recibe una función (decide) y la llama por cada elemento
function filtrar(lista, decide) {
    const resultado = [];
    for (const elemento of lista) {
        if (decide(elemento)) {
            resultado.push(elemento);
        }
    }
    return resultado;          // un array NUEVO: la lista original no cambia
}

// funciones que deciden: devuelven true o false
const esPar = (n) => n % 2 === 0;
const empiezaPorA = (texto) => texto.toLowerCase().startsWith('a');

// constantes al DOM
const res1 = document.querySelector('#res1');
const res2 = document.querySelector('#res2');
const res3 = document.querySelector('#res3');
const res4 = document.querySelector('#res4');

// salidas
res1.textContent = filtrar(numeros, esPar).join(', ');
res2.textContent = filtrar(numeros, (n) => n > 10).join(', ');
res3.textContent = filtrar(nombres, empiezaPorA).join(', ');
res4.textContent = numeros.filter(esPar).join(', ');      // el de verdad: mismo resultado
