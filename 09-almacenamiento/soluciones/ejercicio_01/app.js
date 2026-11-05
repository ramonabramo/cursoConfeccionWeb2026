/* ==============================================================================
   EJERCICIO 01 · Mi primer almacén (SOLUCIÓN)

   OBJETIVO:
   Usar los métodos básicos de localStorage (setItem, getItem, removeItem y
   clear) y recorrer su contenido con length y key(), comprobando que los
   datos siguen ahí después de recargar la página.

   PASOS A REALIZAR:
   1. Seleccionar los dos campos, los cuatro botones, el mensaje, el título
      y la lista.
   2. Declarar mostrarContenido(): vacía la lista y, con un for de 0 a
      localStorage.length, crea un li por clave con el texto clave → valor
      (usad localStorage.key(i) y getItem). Actualiza el título con el
      número de elementos.
   3. Guardar: si la clave no está vacía, setItem(clave, valor), mensaje
      Guardado: color → azul y mostrarContenido().
   4. Leer: getItem(clave). Si devuelve null, mensaje No hay nada guardado
      con la clave color; si no, mostrar su valor y ponerlo en el campo
      valor.
   5. Borrar: removeItem(clave), mensaje y mostrarContenido().
   6. Vaciar todo: pedir confirmación con confirm y, si acepta, clear() y
      mostrarContenido().
   7. Llamar a mostrarContenido() al cargar. Guardad algo, recargad la
      página… y comprobad que sigue ahí.
   ============================================================================== */

// estructura del programa principal

// funciones
// recorre TODO el almacén del origen y lo pinta
function mostrarContenido() {
    lista.replaceChildren();
    for (let i = 0; i < localStorage.length; i++) {
        const clave = localStorage.key(i);          // la clave que ocupa la posición i
        const li = document.createElement('li');
        li.textContent = `${clave} → ${localStorage.getItem(clave)}`;
        lista.append(li);
    }
    tituloLista.textContent = `Contenido del almacén (${localStorage.length} elementos)`;
}

// constantes al DOM que queremos escuchar
const campoClave = document.querySelector('#clave');
const campoValor = document.querySelector('#valor');
const btnGuardar = document.querySelector('#btnGuardar');
const btnLeer = document.querySelector('#btnLeer');
const btnBorrar = document.querySelector('#btnBorrar');
const btnVaciar = document.querySelector('#btnVaciar');
const mensaje = document.querySelector('#mensaje');
const tituloLista = document.querySelector('#tituloLista');
const lista = document.querySelector('#lista');

// colocar escuchadores de eventos
btnGuardar.addEventListener('click', () => {
    const clave = campoClave.value.trim();
    if (clave === '') {
        mensaje.textContent = 'Escribe una clave.';
        return;
    }
    localStorage.setItem(clave, campoValor.value);
    mensaje.textContent = `Guardado: ${clave} → ${campoValor.value}`;
    mostrarContenido();
});

btnLeer.addEventListener('click', () => {
    const clave = campoClave.value.trim();
    const valor = localStorage.getItem(clave);      // null si no existe
    if (valor === null) {
        mensaje.textContent = `No hay nada guardado con la clave «${clave}».`;
    } else {
        mensaje.textContent = `«${clave}» vale «${valor}».`;
        campoValor.value = valor;
    }
});

btnBorrar.addEventListener('click', () => {
    const clave = campoClave.value.trim();
    localStorage.removeItem(clave);
    mensaje.textContent = `Borrada la clave «${clave}».`;
    mostrarContenido();
});

btnVaciar.addEventListener('click', () => {
    if (confirm('Se borrará TODO lo guardado por este origen. ¿Seguro?')) {
        localStorage.clear();
        mensaje.textContent = 'Almacén vacío.';
        mostrarContenido();
    }
});

// al cargar: lo que se guardó en visitas anteriores sigue aquí
mostrarContenido();
