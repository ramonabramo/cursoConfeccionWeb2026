/* ==============================================================================
   EJERCICIO 01 · Mi primer fetch: leer un JSON (SOLUCIÓN)

   OBJETIVO:
   Pedir un fichero JSON con fetch, convertir la respuesta en datos de
   JavaScript con response.json() y usar esos datos en la página,
   gestionando el error que aparece si la página no se sirve desde un
   servidor.

   PASOS A REALIZAR:
   1. Declarar la función async pedirConsejos() que haga const respuesta =
      await fetch('consejos.json'), después const consejos = await
      respuesta.json(), y devuelva consejos.
   2. Al pulsar el botón: mostrar ⏳ Buscando un consejo…, desactivar el
      botón y, dentro de un try, obtener los consejos con await
      pedirConsejos().
   3. Elegir uno al azar (bloque 02) y mostrar su texto. En #info, escribir
      Consejo 3 de 6 · leído de consejos.json.
   4. En el catch, mostrar: No he podido leer consejos.json. ¿Has abierto la
      página con Live Server? y escribir el error en la consola.
   5. En el finally, reactivar el botón.
   6. Probad a abrir la página con doble clic (sin Live Server) y pulsad el
      botón: ¿qué error aparece en la consola?
   ============================================================================== */

// estructura del programa principal

// funciones
// pide el fichero y devuelve su contenido ya convertido en datos de JavaScript
async function pedirConsejos() {
    const respuesta = await fetch('consejos.json');   // 1. llega la respuesta
    const consejos = await respuesta.json();          // 2. se lee su contenido (JSON → array)
    return consejos;
}

// constantes al DOM que queremos escuchar
const btnConsejo = document.querySelector('#btnConsejo');
const salidaConsejo = document.querySelector('#consejo');
const info = document.querySelector('#info');

// colocar escuchadores de eventos
btnConsejo.addEventListener('click', async () => {
    salidaConsejo.textContent = '⏳ Buscando un consejo…';
    btnConsejo.disabled = true;
    try {
        // entradas: los datos llegan de fuera
        const consejos = await pedirConsejos();

        // procesamiento
        const posicion = Math.floor(Math.random() * consejos.length);
        const consejo = consejos[posicion];

        // salidas
        salidaConsejo.textContent = `💡 ${consejo.texto}`;
        info.textContent = `Consejo ${posicion + 1} de ${consejos.length} · leído de consejos.json`;
    } catch (error) {
        salidaConsejo.textContent = 'No he podido leer consejos.json. ¿Has abierto la página con Live Server?';
        console.error(error);   // con doble clic: TypeError: Failed to fetch
    } finally {
        btnConsejo.disabled = false;
    }
});
