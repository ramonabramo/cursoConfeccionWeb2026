/* ==============================================================================
   EJERCICIO 11 · Cuenta atrás hasta una fecha (SOLUCIÓN)

   OBJETIVO:
   Calcular cuánto falta hasta una fecha restando instantes de Date,
   descomponer los milisegundos en días, horas, minutos y segundos, y
   actualizarlo cada segundo con un único setInterval.

   PASOS A REALIZAR:
   1. Al cargar, poner en el campo la fecha del próximo 1 de enero (valor
      AAAA-MM-DD) y arrancar la cuenta.
   2. Al enviar el formulario, leer la fecha y crear el instante de destino
      a las 00:00 en hora local: new Date(año, mes - 1, día).
   3. Declarar actualizar(): ms = destino - Date.now(). Si es 0 o menos,
      parar el intervalo y escribir 🎉 ¡Ya ha llegado!.
   4. Descomponer ms en días, horas, minutos y segundos (Math.floor y %),
      mostrarlos con padStart(2, '0') y el título: Faltan para el viernes, 1
      de enero de 2027.
   5. Antes de arrancar un intervalo nuevo, parar el anterior (nunca dos a
      la vez).
   ============================================================================== */

// estructura del programa principal
const MS_SEGUNDO = 1000;
const MS_MINUTO = 60 * MS_SEGUNDO;
const MS_HORA = 60 * MS_MINUTO;
const MS_DIA = 24 * MS_HORA;
let destino = null;
let idIntervalo = null;

// funciones
function dosCifras(n) {
    return String(n).padStart(2, '0');
}

function escribir(id, valor) {
    document.querySelector(`#${id}`).textContent = valor;
}

function actualizar() {
    const ms = destino.getTime() - Date.now();
    if (ms <= 0) {
        clearInterval(idIntervalo);
        idIntervalo = null;
        ['dias', 'horas', 'minutos', 'segundos'].forEach((id) => escribir(id, '00'));
        estado.textContent = '🎉 ¡Ya ha llegado!';
        return;
    }
    // de milisegundos a días, horas, minutos y segundos
    escribir('dias', Math.floor(ms / MS_DIA));
    escribir('horas', dosCifras(Math.floor((ms % MS_DIA) / MS_HORA)));
    escribir('minutos', dosCifras(Math.floor((ms % MS_HORA) / MS_MINUTO)));
    escribir('segundos', dosCifras(Math.floor((ms % MS_MINUTO) / MS_SEGUNDO)));
    estado.textContent = '';
}

function empezar(fechaTexto) {
    const [anio, mes, dia] = fechaTexto.split('-').map(Number);
    destino = new Date(anio, mes - 1, dia);            // ¡los meses empiezan en 0!
    titulo.textContent = `Faltan para el ${destino.toLocaleDateString('es-ES', { dateStyle: 'full' })}`;

    clearInterval(idIntervalo);                        // nunca dos intervalos a la vez
    actualizar();
    idIntervalo = setInterval(actualizar, 1000);
}

// constantes al DOM que queremos escuchar
const formulario = document.querySelector('#formFecha');
const campoDestino = document.querySelector('#destino');
const titulo = document.querySelector('#titulo');
const estado = document.querySelector('#estado');

// colocar escuchadores de eventos
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    empezar(campoDestino.value);
});

// al cargar: el próximo 1 de enero
const proximoAnio = new Date().getFullYear() + 1;
campoDestino.value = `${proximoAnio}-01-01`;
empezar(campoDestino.value);
