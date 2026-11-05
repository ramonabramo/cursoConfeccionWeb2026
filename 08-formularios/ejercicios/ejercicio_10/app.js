/* ==============================================================================
   EJERCICIO 10 · Cuestionario con nota

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

// constantes al DOM que queremos escuchar
const formulario = document.querySelector('#cuestionario');
const btnOtraVez = document.querySelector('#btnOtraVez');
const nota = document.querySelector('#nota');

// colocar escuchadores de eventos
// TAREA: submit → corregir cada pregunta y calcular la nota


// TAREA: click en Volver a empezar → reset y limpiar

