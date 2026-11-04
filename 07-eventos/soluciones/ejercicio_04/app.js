/* ==============================================================================
   EJERCICIO 04 · Galería con eventos de ratón (SOLUCIÓN)

   OBJETIVO:
   Escuchar varios eventos de ratón (click, dblclick, mouseover y mouseout)
   en un grupo de elementos, y usar las propiedades type y currentTarget del
   objeto evento para saber qué ha pasado y en qué elemento.

   PASOS A REALIZAR:
   1. Seleccionar todas las fotos con querySelectorAll.
   2. Declarar registrar(e): crea un li con el tipo de evento (e.type) y el
      nombre de la foto (e.currentTarget.dataset.nombre), lo pone el primero
      de la lista y, si hay más de 5, quita el último.
   3. Recorrer las fotos con forEach y, en cada una, escuchar cuatro
      eventos:
   4. mouseover: mostrar en #info el nombre y el data-info de la foto.
   5. mouseout: volver a mostrar Pasa el ratón por una foto….
   6. dblclick: alternar la clase favorito y actualizar el contador de
      favoritas (contad las .favorito con querySelectorAll).
   7. Los cuatro eventos, además, llaman a registrar(e).
   ============================================================================== */

// estructura del programa principal
const MAX_REGISTRO = 5;

// funciones
// apunta en el registro qué evento ha ocurrido y en qué foto
function registrar(e) {
    const li = document.createElement('li');
    // currentTarget: el elemento que tiene el escuchador (la foto entera)
    li.textContent = `${e.type} · ${e.currentTarget.dataset.nombre}`;
    registro.prepend(li);
    if (registro.children.length > MAX_REGISTRO) {
        registro.lastElementChild.remove();
    }
}

// constantes al DOM que queremos escuchar
const fotos = document.querySelectorAll('.foto');
const info = document.querySelector('#info');
const favoritas = document.querySelector('#favoritas');
const registro = document.querySelector('#registro');

// colocar escuchadores de eventos
fotos.forEach((foto) => {
    foto.addEventListener('mouseover', (e) => {
        info.textContent = `📷 ${foto.dataset.nombre} — ${foto.dataset.info}`;
        registrar(e);
    });

    foto.addEventListener('mouseout', (e) => {
        info.textContent = 'Pasa el ratón por una foto…';
        registrar(e);
    });

    foto.addEventListener('dblclick', (e) => {
        foto.classList.toggle('favorito');
        const total = document.querySelectorAll('.foto.favorito').length;
        favoritas.textContent = `Favoritas: ${total}`;
        registrar(e);
    });

    foto.addEventListener('click', registrar);
});
