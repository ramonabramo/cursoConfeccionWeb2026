/* ==============================================================================
   EJERCICIO 02 · Conversor en tiempo real (SOLUCIÓN)

   OBJETIVO:
   Reaccionar a lo que el usuario escribe en un campo con el evento input, y
   a una elección en un desplegable con el evento change, reutilizando la
   misma función para los dos.

   PASOS A REALIZAR:
   1. Declarar la función celsiusAFahrenheit(celsius) del bloque 04.
   2. Declarar la función actualizar(): leer el valor del campo y el número
      de decimales del select; si el campo está vacío, mostrar Escribe una
      temperatura.; si no, mostrar 25 °C = 77.0 °F con los decimales
      elegidos.
   3. Crear las constantes al DOM del campo, el select y el resultado.
   4. Escuchar el evento input del campo con actualizar.
   5. Escuchar el evento change del select con la misma función actualizar.
   ============================================================================== */

// estructura del programa principal
// funciones
function celsiusAFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}

// la uso para DOS eventos distintos: por eso es una función con nombre
function actualizar() {
    // entradas
    const texto = campoCelsius.value;              // .value SIEMPRE es texto
    const decimales = Number(selectDecimales.value);

    // procesamiento y salidas
    if (texto.trim() === '') {
        resultado.textContent = 'Escribe una temperatura.';
        return;
    }
    const celsius = Number(texto);
    const fahrenheit = celsiusAFahrenheit(celsius);
    resultado.textContent = `${celsius} °C = ${fahrenheit.toFixed(decimales)} °F`;
}

// constantes al DOM que queremos escuchar
const campoCelsius = document.querySelector('#celsius');
const selectDecimales = document.querySelector('#decimales');
const resultado = document.querySelector('#resultado');

// colocar escuchadores de eventos
campoCelsius.addEventListener('input', actualizar);      // con cada tecla
selectDecimales.addEventListener('change', actualizar);  // al elegir otra opción
