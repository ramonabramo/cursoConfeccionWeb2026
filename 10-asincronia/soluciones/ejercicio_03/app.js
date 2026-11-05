/* ==============================================================================
   EJERCICIO 03 · Cuenta atrás con barra de progreso (SOLUCIÓN)

   OBJETIVO:
   Construir una cuenta atrás con setInterval que se detiene sola al llegar
   a cero, actualizar una barra de progreso con style.width y bloquear los
   controles que no tienen sentido mientras corre.

   PASOS A REALIZAR:
   1. Declarar el estado: idIntervalo = null, total = 0 y restante = 0.
   2. Declarar pintar(): escribe restante en la pantalla y pone la anchura
      del relleno al porcentaje transcurrido ((total - restante) / total ×
      100).
   3. Declarar terminar(mensaje): clearInterval, idIntervalo = null,
      reactiva Empezar y el campo, desactiva Parar y escribe el mensaje.
   4. Declarar tic(): resta 1 a restante y pinta; si llega a 0, pone la
      clase terminado a la pantalla y llama a terminar('🎉 ¡Tiempo!').
   5. Botón Empezar: lee los segundos (si no es un número entre 1 y 600,
      avisa y sale), prepara total y restante, quita la clase terminado,
      pinta, desactiva Empezar y el campo, activa Parar y arranca
      setInterval(tic, 1000).
   6. Botón Parar: terminar('Cuenta atrás detenida').
   ============================================================================== */

// estructura del programa principal
let idIntervalo = null;
let total = 0;
let restante = 0;

// funciones
function pintar() {
    pantalla.textContent = restante;
    const porcentaje = total === 0 ? 0 : (total - restante) / total * 100;
    relleno.style.width = `${porcentaje}%`;   // un valor calculado: aquí style SÍ tiene sentido
}

function terminar(texto) {
    clearInterval(idIntervalo);
    idIntervalo = null;
    btnEmpezar.disabled = false;
    campoSegundos.disabled = false;
    btnParar.disabled = true;
    mensaje.textContent = texto;
}

// se ejecuta una vez por segundo
function tic() {
    restante--;
    pintar();
    if (restante <= 0) {
        pantalla.classList.add('terminado');
        terminar('🎉 ¡Tiempo!');
    }
}

// constantes al DOM que queremos escuchar
const campoSegundos = document.querySelector('#segundos');
const btnEmpezar = document.querySelector('#btnEmpezar');
const btnParar = document.querySelector('#btnParar');
const pantalla = document.querySelector('#pantalla');
const relleno = document.querySelector('#relleno');
const mensaje = document.querySelector('#mensaje');

// colocar escuchadores de eventos
btnEmpezar.addEventListener('click', () => {
    // entradas
    const segundos = Number(campoSegundos.value);
    if (!Number.isInteger(segundos) || segundos < 1 || segundos > 600) {
        mensaje.textContent = 'Escribe un número entero de segundos entre 1 y 600.';
        return;
    }

    // procesamiento: preparar el estado
    total = segundos;
    restante = segundos;
    pantalla.classList.remove('terminado');

    // salidas
    pintar();
    btnEmpezar.disabled = true;      // mientras corre, no se puede empezar otra
    campoSegundos.disabled = true;
    btnParar.disabled = false;
    mensaje.textContent = 'En marcha…';

    idIntervalo = setInterval(tic, 1000);
});

btnParar.addEventListener('click', () => {
    terminar('Cuenta atrás detenida.');
});
