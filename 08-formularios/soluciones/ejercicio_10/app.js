/* ==============================================================================
   EJERCICIO 10 · Cuestionario con nota (SOLUCIÓN)

   OBJETIVO:
   Corregir un cuestionario de grupos de botones de opción leyendo cada
   respuesta con FormData.get, dando la corrección junto a cada pregunta,
   calculando la nota y reiniciándolo con reset.

   PASOS A REALIZAR:
   1. Declarar PREGUNTAS: un array con { name, correcta, texto } (por
      ejemplo { name: 'p1', correcta: 'b', texto: 'null' }).
   2. Al enviar, con preventDefault, crear un FormData y, por cada pregunta,
      leer la respuesta con get(name).
   3. En el fieldset de cada pregunta: clase acierto o fallo y, en su
      .correccion, ✔ Correcta, ✘ La respuesta era: null, o ⚠️ Sin contestar.
   4. Escribir la nota en #nota: 3 de 4 aciertos · nota 7.5. Sin contestar
      cuenta como fallo.
   5. El botón Volver a empezar llama a formulario.reset() y borra las
      correcciones y las clases.
   ============================================================================== */

// estructura del programa principal
const PREGUNTAS = [
    { name: 'p1', correcta: 'b', texto: 'null' },
    { name: 'p2', correcta: 'a', texto: 'Texto' },
    { name: 'p3', correcta: 'c', texto: 'preventDefault()' },
    { name: 'p4', correcta: 'a', texto: 'required' },
];

// funciones
function limpiar() {
    formulario.querySelectorAll('.pregunta').forEach((fieldset) => {
        fieldset.classList.remove('acierto', 'fallo');
        fieldset.querySelector('.correccion').textContent = '';
    });
    nota.textContent = '…';
}

// constantes al DOM que queremos escuchar
const formulario = document.querySelector('#cuestionario');
const btnOtraVez = document.querySelector('#btnOtraVez');
const nota = document.querySelector('#nota');

// colocar escuchadores de eventos
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    // entradas
    const datos = new FormData(formulario);
    // procesamiento y salidas, pregunta a pregunta
    let aciertos = 0;
    PREGUNTAS.forEach((pregunta) => {
        const elegida = datos.get(pregunta.name);          // 'a', 'b', 'c' o null
        const fieldset = formulario.querySelector(`[data-pregunta="${pregunta.name}"]`);
        const correccion = fieldset.querySelector('.correccion');
        const acierto = elegida === pregunta.correcta;

        fieldset.classList.toggle('acierto', acierto);
        fieldset.classList.toggle('fallo', !acierto);
        if (acierto) {
            aciertos++;
            correccion.textContent = '✔ Correcta';
        } else if (elegida === null) {
            correccion.textContent = `⚠️ Sin contestar. La respuesta era: ${pregunta.texto}`;
        } else {
            correccion.textContent = `✘ La respuesta era: ${pregunta.texto}`;
        }
    });
    const calificacion = (aciertos / PREGUNTAS.length) * 10;
    nota.textContent = `${aciertos} de ${PREGUNTAS.length} aciertos · nota ${calificacion}`;
});

btnOtraVez.addEventListener('click', () => {
    formulario.reset();               // todos los campos como al cargar
    limpiar();
});
