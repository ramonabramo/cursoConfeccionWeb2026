/* ==============================================================================
   EJERCICIO 06 · Promesas que pueden fallar: then, catch y finally (SOLUCIÓN)

   OBJETIVO:
   Consumir una función que devuelve una promesa que puede cumplirse o
   rechazarse, tratar los dos casos con then y catch, limpiar con finally, y
   comprobar que el código posterior no espera al resultado.

   PASOS A REALIZAR:
   1. Usar el objeto STOCK y la función consultarStock(producto) que ya
      están escritos: devuelve una promesa que se cumple con el stock o se
      rechaza con un Error.
   2. Al enviar el formulario: evitar la recarga, leer el producto (en
      minúsculas y sin espacios), desactivar el botón, mostrar ⏳
      Consultando… y anotar 1. Pido el stock.
   3. Llamar a consultarStock(producto) y encadenar:
   4. then(stock): anotar 3. Ha llegado la respuesta y mostrar ✔ Quedan 12
      unidades de teclado (o ⚠ Agotado si es 0).
   5. catch(error): anotar 3. Ha llegado un error y mostrar ✘ y
      error.message.
   6. finally: reactivar el botón y anotar 4. Fin (finally).
   7. Justo DESPUÉS de la cadena, anotar 2. Mientras tanto, la página sigue
      viva. ¿En qué posición aparece?
   ============================================================================== */

// estructura del programa principal
const STOCK = {
    teclado: 12,
    raton: 0,
    monitor: 4,
    auriculares: 20,
};
let inicio = 0;

// funciones
// simula una consulta a un servidor: tarda 700 ms y puede fallar
function consultarStock(producto) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Object.keys(STOCK).includes(producto)) {
                resolve(STOCK[producto]);                        // ✔ cumplida con un valor
            } else {
                reject(new Error(`No existe el producto «${producto}».`));   // ✘ rechazada
            }
        }, 700);
    });
}

function anotar(texto) {
    const li = document.createElement('li');
    li.textContent = `[+${Date.now() - inicio} ms] ${texto}`;
    registro.append(li);
}

// constantes al DOM que queremos escuchar
const formConsulta = document.querySelector('#formConsulta');
const campoProducto = document.querySelector('#producto');
const btnConsultar = document.querySelector('#btnConsultar');
const resultado = document.querySelector('#resultado');
const registro = document.querySelector('#registro');

// colocar escuchadores de eventos
formConsulta.addEventListener('submit', (e) => {
    e.preventDefault();
    registro.replaceChildren();
    inicio = Date.now();

    // entradas
    const producto = campoProducto.value.trim().toLowerCase();

    // salidas inmediatas: el usuario sabe que estamos en ello
    btnConsultar.disabled = true;
    resultado.textContent = '⏳ Consultando…';
    anotar('1. Pido el stock');

    consultarStock(producto)
        .then((stock) => {
            // solo si la promesa se CUMPLE
            anotar('3. Ha llegado la respuesta');
            resultado.textContent = stock > 0
                ? `✔ Quedan ${stock} unidades de ${producto}.`
                : `⚠ ${producto}: agotado.`;
        })
        .catch((error) => {
            // solo si la promesa se RECHAZA
            anotar('3. Ha llegado un error');
            resultado.textContent = `✘ ${error.message}`;
        })
        .finally(() => {
            // SIEMPRE, vaya bien o mal
            btnConsultar.disabled = false;
            anotar('4. Fin (finally)');
        });

    // esta línea NO espera a la consulta
    anotar('2. Mientras tanto, la página sigue viva');
});
