/* ==============================================================================
   EJERCICIO 03 · Saludos con valores por defecto (SOLUCIÓN)

   OBJETIVO:
   Dar valores por defecto a los parámetros de una función y descubrir
   cuándo se aplican: si falta el argumento o vale undefined, pero no si
   vale null.

   PASOS A REALIZAR:
   1. Declarar la función saludar(nombre = 'invitado', idioma = 'es').
   2. Dentro, con un switch sobre idioma, elegir la palabra: es → Hola, en →
      Hello, fr → Bonjour, it → Ciao, pt → Olá. Para cualquier otro idioma,
      usar Hola.
   3. Devolver el texto: Hola, Lucía.
   4. Crear las constantes al DOM de las seis celdas.
   5. Escribir en cada celda el resultado de la llamada que aparece en su
      fila.
   6. Explicad en un comentario por qué la fila 5 no muestra invitado.
   ============================================================================== */

// estructura del programa principal
// funciones
// si falta un argumento (o llega undefined), se usa el valor por defecto
function saludar(nombre = 'invitado', idioma = 'es') {
    let palabra;

    switch (idioma) {
        case 'en':
            palabra = 'Hello';
            break;
        case 'fr':
            palabra = 'Bonjour';
            break;
        case 'it':
            palabra = 'Ciao';
            break;
        case 'pt':
            palabra = 'Olá';
            break;
        default:
            // 'es' y cualquier idioma que no conozca
            palabra = 'Hola';
    }

    return `${palabra}, ${nombre}`;
}

// constantes al DOM
const llamada1 = document.querySelector('#llamada1');
const llamada2 = document.querySelector('#llamada2');
const llamada3 = document.querySelector('#llamada3');
const llamada4 = document.querySelector('#llamada4');
const llamada5 = document.querySelector('#llamada5');
const llamada6 = document.querySelector('#llamada6');

// entradas
// (en este ejercicio no hay entradas: los argumentos van en las llamadas)

// procesamiento y salidas
llamada1.textContent = saludar('Lucía', 'en');     // Hello, Lucía
llamada2.textContent = saludar('Lucía');           // Hola, Lucía      → idioma por defecto
llamada3.textContent = saludar();                  // Hola, invitado   → los dos por defecto
llamada4.textContent = saludar(undefined, 'fr');   // Bonjour, invitado
llamada5.textContent = saludar(null, 'it');        // Ciao, null  ⚠
llamada6.textContent = saludar('Lucía', 'de');     // Hola, Lucía      → default del switch

// ¿Por qué la fila 5 no muestra 'invitado'?
// El valor por defecto solo se aplica si el argumento falta o vale undefined.
// null es un valor que se ha pasado a propósito, así que se respeta.
