/* ==============================================================================
   EJERCICIO 01 · Contador de clics (SOLUCIÓN)

   OBJETIVO:
   Reaccionar a los clics del usuario con addEventListener usando funciones
   con nombre y funciones flecha, mantener un estado entre clic y clic, y
   retirar un escuchador con removeEventListener.

   PASOS A REALIZAR:
   1. Declarar la constante LIMITE = 10 y la variable contador = 0.
   2. Declarar la función pintar(): escribe el contador en la página y le
      pone la clase negativo solo si es menor que 0 (classList.toggle con
      segundo argumento).
   3. Declarar la función sumar(): suma 1 y pinta. Si llega al límite,
      retira su propio escuchador con removeEventListener('click', sumar),
      desactiva el botón (disabled = true) y avisa.
   4. Crear las constantes al DOM de los tres botones, el contador y el
      aviso.
   5. Escuchar el clic de btnMas con la función sumar (sin paréntesis).
   6. Escuchar el clic de btnMenos con una función flecha que reste 1 y
      pinte.
   7. Escuchar el clic de btnReiniciar: poner el contador a 0, pintar,
      reactivar el botón +1 y volver a añadirle el escuchador sumar.
   ============================================================================== */

// estructura del programa principal
const LIMITE = 10;
let contador = 0;   // el ESTADO: sobrevive entre un clic y el siguiente

// funciones
// muestra el estado actual en la página
function pintar() {
    salidaContador.textContent = contador;
    // toggle con segundo argumento: true → la pone, false → la quita
    salidaContador.classList.toggle('negativo', contador < 0);
}

// función con nombre: así puedo retirarla después con removeEventListener
function sumar() {
    // procesamiento
    contador++;
    // salidas
    pintar();

    if (contador >= LIMITE) {
        btnMas.removeEventListener('click', sumar);
        btnMas.disabled = true;
        aviso.textContent = `Has llegado a ${LIMITE}: el botón +1 ya no escucha.`;
    }
}

// constantes al DOM que queremos escuchar
const btnMenos = document.querySelector('#btnMenos');
const btnMas = document.querySelector('#btnMas');
const btnReiniciar = document.querySelector('#btnReiniciar');
const salidaContador = document.querySelector('#contador');
const aviso = document.querySelector('#aviso');

// colocar escuchadores de eventos
// 1. con una función con nombre (¡sin paréntesis!)
btnMas.addEventListener('click', sumar);

// 2. con una función flecha anónima
btnMenos.addEventListener('click', () => {
    contador--;
    pintar();
});

// 3. reiniciar el estado y volver a escuchar
btnReiniciar.addEventListener('click', () => {
    contador = 0;
    pintar();
    btnMas.disabled = false;
    btnMas.addEventListener('click', sumar);   // si ya estaba, no se duplica
    aviso.textContent = `El botón +1 se bloquea al llegar a ${LIMITE}.`;
});
