/* ==============================================================================
   EJERCICIO 02 · Precio de la entrada de cine (SOLUCIÓN)

   OBJETIVO:
   Escribir una función con varios parámetros que usa return anticipados
   (early return) para salir en cuanto conoce la respuesta, y devolver null
   cuando los datos no son válidos.

   PASOS A REALIZAR:
   1. Declarar la función precioEntrada(edad, dia) que devuelva el precio en
      euros siguiendo las normas de la página.
   2. Dentro, usar un return en cuanto se sepa el precio, sin else: primero
      los datos no válidos (edad NaN o negativa → return null), después
      menores de 4, después 65 o más, después miércoles y, al final, el
      precio normal.
   3. Declarar la función formatearPrecio(precio) que devuelva Gratis si el
      precio es 0, Datos no válidos si es null y, en otro caso, el precio
      con dos decimales y el símbolo €.
   4. Crear las constantes al DOM.
   5. Pedir la edad (por defecto "30") y el día (por defecto "miércoles");
      limpiad el día con trim(). Cuidado: si el usuario cancela,
      Number(null) vale 0, ¡y la entrada saldría gratis! Haced que en ese
      caso la edad sea NaN.
   6. Mostrar en salida: Tu entrada cuesta: 5.00 €.
   7. Rellenar la tabla de pruebas llamando a precioEntrada con los cinco
      casos y formateando cada resultado.
   ============================================================================== */

// estructura del programa principal
// funciones
// devuelve el precio en euros, o null si los datos no son válidos
function precioEntrada(edad, dia) {
    // return anticipado: en cuanto sé la respuesta, salgo
    if (Number.isNaN(edad) || edad < 0) {
        return null;
    }
    if (edad < 4) {
        return 0;
    }
    if (edad >= 65) {
        return 4;
    }
    if (dia === 'miércoles') {
        return 5;
    }
    // si he llegado hasta aquí, ninguna excepción se cumple
    return 8;
}

// convierte un precio en un texto listo para mostrar
function formatearPrecio(precio) {
    if (precio === null) {
        return 'Datos no válidos';
    }
    if (precio === 0) {
        return 'Gratis';
    }
    return `${precio.toFixed(2)} €`;
}

// constantes al DOM
const salida = document.querySelector('#salida');
const prueba1 = document.querySelector('#prueba1');
const prueba2 = document.querySelector('#prueba2');
const prueba3 = document.querySelector('#prueba3');
const prueba4 = document.querySelector('#prueba4');
const prueba5 = document.querySelector('#prueba5');

// entradas
// ojo: Number(null) y Number('') valen 0. Si cancela o lo deja vacío, uso NaN
const textoEdad = prompt('¿Qué edad tienes?', '30');
const edad = textoEdad === null || textoEdad.trim() === '' ? NaN : Number(textoEdad);
const dia = (prompt('¿Qué día vas al cine?', 'miércoles') || '').trim();

// procesamiento y salidas
const precio = precioEntrada(edad, dia);
salida.textContent = `Tu entrada cuesta: ${formatearPrecio(precio)}`;

// la misma función, probada con cinco casos
prueba1.textContent = formatearPrecio(precioEntrada(3, 'lunes'));       // Gratis
prueba2.textContent = formatearPrecio(precioEntrada(70, 'miércoles'));  // 4.00 €
prueba3.textContent = formatearPrecio(precioEntrada(30, 'miércoles'));  // 5.00 €
prueba4.textContent = formatearPrecio(precioEntrada(30, 'sábado'));     // 8.00 €
prueba5.textContent = formatearPrecio(precioEntrada(-5, 'lunes'));      // Datos no válidos
