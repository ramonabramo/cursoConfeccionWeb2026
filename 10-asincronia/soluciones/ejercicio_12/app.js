/* ==============================================================================
   EJERCICIO 12 · Carrusel que se pausa (SOLUCIÓN)

   OBJETIVO:
   Construir un carrusel automático con setInterval que se pausa con
   mouseenter y se reanuda con mouseleave, con botones de anterior y
   siguiente y puntos para saltar a cada elemento.

   PASOS A REALIZAR:
   1. Declarar el array TESTIMONIOS, let actual = 0 y let idIntervalo =
      null.
   2. Declarar mostrar(i): da la vuelta con el resto (%), escribe la cita y
      el autor, y marca el punto actual con aria-current.
   3. Declarar arrancar() (solo si idIntervalo es null, un setInterval cada
      3 s que muestra el siguiente) y pausar() (clearInterval y null). Cada
      una actualiza #estado.
   4. Escuchar mouseenter en el carrusel → pausar y mouseleave → arrancar.
      Haced lo mismo con focusin y focusout para el teclado.
   5. Crear un botón por testimonio en #puntos (delegación) y conectar las
      flechas.
   ============================================================================== */

// estructura del programa principal
const TESTIMONIOS = [
    { cita: 'Por fin entiendo qué hace cada línea de mi código.', autor: 'Lucía, alumna de 2025' },
    { cita: 'Los ejercicios explicados son oro.', autor: 'Andrés, desarrollador junior' },
    { cita: 'El bloque de asincronía me cambió la forma de pensar.', autor: 'Marta, diseñadora web' },
    { cita: 'Ahora mis formularios son accesibles de verdad.', autor: 'Jorge, maquetador' },
];
const PAUSA_MS = 3000;
let actual = 0;
let idIntervalo = null;

// funciones
function mostrar(i) {
    actual = (i + TESTIMONIOS.length) % TESTIMONIOS.length;   // da la vuelta en los dos sentidos
    cita.textContent = `«${TESTIMONIOS[actual].cita}»`;
    autor.textContent = TESTIMONIOS[actual].autor;
    puntos.querySelectorAll('button').forEach((p, n) => p.setAttribute('aria-current', n === actual ? 'true' : 'false'));
}

function arrancar() {
    if (idIntervalo !== null) {
        return;                                   // ya está en marcha: nunca dos
    }
    idIntervalo = setInterval(() => mostrar(actual + 1), PAUSA_MS);
    estado.textContent = '▶ En marcha';
}

function pausar() {
    clearInterval(idIntervalo);
    idIntervalo = null;
    estado.textContent = '⏸ En pausa';
}

// constantes al DOM que queremos escuchar
const carrusel = document.querySelector('#carrusel');
const cita = document.querySelector('#cita');
const autor = document.querySelector('#autor');
const puntos = document.querySelector('#puntos');
const estado = document.querySelector('#estado');
const btnAnterior = document.querySelector('#btnAnterior');
const btnSiguiente = document.querySelector('#btnSiguiente');

// los puntos, uno por testimonio
TESTIMONIOS.forEach((t, n) => {
    const punto = document.createElement('button');
    punto.dataset.indice = n;
    punto.setAttribute('aria-label', `Testimonio ${n + 1}`);
    puntos.append(punto);
});

// colocar escuchadores de eventos
carrusel.addEventListener('mouseenter', pausar);
carrusel.addEventListener('mouseleave', arrancar);
carrusel.addEventListener('focusin', pausar);       // también con el teclado
carrusel.addEventListener('focusout', arrancar);

btnAnterior.addEventListener('click', () => mostrar(actual - 1));
btnSiguiente.addEventListener('click', () => mostrar(actual + 1));

puntos.addEventListener('click', (e) => {
    const punto = e.target.closest('[data-indice]');
    if (punto) {
        mostrar(Number(punto.dataset.indice));
    }
});

mostrar(0);
arrancar();
