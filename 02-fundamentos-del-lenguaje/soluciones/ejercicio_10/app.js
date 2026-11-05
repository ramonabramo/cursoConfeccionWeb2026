/* ==============================================================================
   EJERCICIO 10 · Datos de registro limpios (SOLUCIÓN)

   OBJETIVO:
   Normalizar datos escritos por el usuario encadenando métodos de texto:
   espacios fuera, mayúscula inicial, correo en minúsculas y código postal
   de cinco cifras con padStart.

   PASOS A REALIZAR:
   1. Pedir el nombre (por defecto '   aNA  '), el correo (por defecto '
      Ana.Garcia@Correo.COM ') y el código postal (por defecto '8001').
   2. Mostrar cada dato tal como llega, entre comillas «» para que se vean
      los espacios.
   3. Nombre: quitar espacios y poner la primera letra en mayúscula y el
      resto en minúscula (at(0), slice(1)).
   4. Correo: quitar espacios y pasar a minúsculas, encadenando los dos
      métodos.
   5. Código postal: quitar espacios y rellenar con ceros por la izquierda
      hasta 5 cifras con padStart(5, '0').
   ============================================================================== */

// estructura del programa principal

// funciones
function escribir(id, valor) {
    document.querySelector(`#${id}`).textContent = valor;
}

// entradas
const nombre = prompt('Nombre', '   aNA  ');
const correo = prompt('Correo electrónico', '  Ana.Garcia@Correo.COM ');
const cp = prompt('Código postal', '8001');

// procesamiento
const nombreSinEspacios = nombre.trim();
const nombreLimpio = nombreSinEspacios.at(0).toUpperCase() + nombreSinEspacios.slice(1).toLowerCase();
const correoLimpio = correo.trim().toLowerCase();          // métodos encadenados
const cpLimpio = cp.trim().padStart(5, '0');                // '8001' → '08001'

// salidas
escribir('nombreOriginal', `«${nombre}»`);
escribir('correoOriginal', `«${correo}»`);
escribir('cpOriginal', `«${cp}»`);
escribir('nombreLimpio', nombreLimpio);
escribir('correoLimpio', correoLimpio);
escribir('cpLimpio', cpLimpio);
