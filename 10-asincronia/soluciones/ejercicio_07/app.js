/* ==============================================================================
   EJERCICIO 07 · async y await: el mismo código, más claro (SOLUCIÓN)

   OBJETIVO:
   Reescribir código con promesas usando funciones async, await y
   try...catch...finally, y comparar el tiempo de esperar varias promesas
   una detrás de otra frente a esperarlas a la vez con Promise.all.

   PASOS A REALIZAR:
   1. Usar STOCK y consultarStock del ejercicio 06, que ya están escritos.
   2. Declarar la función async mostrarStock(producto): muestra ⏳
      Consultando…; dentro de un try, const stock = await
      consultarStock(producto) y muestra el resultado; en el catch, muestra
      el error; en el finally, escribe en la consola Consulta terminada.
   3. Al enviar el formulario, llamar a mostrarStock con el producto
      escrito.
   4. Declarar la función async carreraSecuencial(): recorre la lista de
      productos con for...of haciendo await de cada consulta, y mide el
      tiempo total con Date.now().
   5. Declarar la función async carreraParalela(): lanza las cuatro
      consultas a la vez con map, las espera con await Promise.all(promesas)
      y mide el tiempo.
   6. Mostrar en #carrera los stocks y los milisegundos de cada versión.
      ¿Cuál gana y por cuánto?
   ============================================================================== */

// estructura del programa principal
const STOCK = {
    teclado: 12,
    raton: 0,
    monitor: 4,
    auriculares: 20,
};
const PRODUCTOS = ['teclado', 'raton', 'monitor', 'auriculares'];

// funciones
// simula una consulta a un servidor: tarda 700 ms y puede fallar (igual que en el ejercicio 06)
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

// async: dentro se puede usar await
async function mostrarStock(producto) {
    resultado.textContent = '⏳ Consultando…';
    try {
        // await PAUSA esta función hasta que la promesa se resuelve…
        const stock = await consultarStock(producto);
        // …y continúa aquí con el valor, como si fuera código normal
        resultado.textContent = `✔ ${producto}: ${stock} unidades.`;
    } catch (error) {
        // si la promesa se rechaza, el error salta aquí
        resultado.textContent = `✘ ${error.message}`;
    } finally {
        console.log('Consulta terminada');
    }
}

// cada consulta espera a que termine la anterior
async function carreraSecuencial() {
    const inicio = Date.now();
    const stocks = [];
    for (const producto of PRODUCTOS) {
        stocks.push(await consultarStock(producto));
    }
    return { stocks, ms: Date.now() - inicio };
}

// las cuatro consultas arrancan a la vez; Promise.all espera a que terminen todas
async function carreraParalela() {
    const inicio = Date.now();
    const promesas = PRODUCTOS.map((producto) => consultarStock(producto));
    const stocks = await Promise.all(promesas);
    return { stocks, ms: Date.now() - inicio };
}

async function correr(tipo, funcion) {
    btnSecuencial.disabled = true;
    btnParalelo.disabled = true;
    carrera.textContent = `${tipo}: corriendo…`;
    const { stocks, ms } = await funcion();
    carrera.textContent = `${tipo}
Stocks: ${PRODUCTOS.map((p, i) => `${p} ${stocks[i]}`).join(' · ')}
Tiempo: ${ms} ms`;
    btnSecuencial.disabled = false;
    btnParalelo.disabled = false;
}

// constantes al DOM que queremos escuchar
const formConsulta = document.querySelector('#formConsulta');
const campoProducto = document.querySelector('#producto');
const resultado = document.querySelector('#resultado');
const btnSecuencial = document.querySelector('#btnSecuencial');
const btnParalelo = document.querySelector('#btnParalelo');
const carrera = document.querySelector('#carrera');

// colocar escuchadores de eventos
formConsulta.addEventListener('submit', (e) => {
    e.preventDefault();
    mostrarStock(campoProducto.value.trim().toLowerCase());
});

btnSecuencial.addEventListener('click', () => correr('Uno detrás de otro', carreraSecuencial));
btnParalelo.addEventListener('click', () => correr('Todos a la vez', carreraParalela));
