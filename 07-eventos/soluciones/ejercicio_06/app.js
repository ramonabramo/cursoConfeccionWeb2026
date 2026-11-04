/* ==============================================================================
   EJERCICIO 06 · Propagación: ¿quién se entera del clic? (SOLUCIÓN)

   OBJETIVO:
   Comprobar cómo un evento se propaga desde el elemento donde ocurre hacia
   sus antepasados (burbuja), distinguir e.target de e.currentTarget y
   detener la propagación con stopPropagation.

   PASOS A REALIZAR:
   1. Declarar registrar(e): añadir al registro un li con el texto escucha:
      padre · target: hijo, usando e.currentTarget.id y e.target.id.
   2. Escuchar click en abuelo, padre e hijo con la misma función registrar.
   3. Añadir un SEGUNDO escuchador de click al hijo: si la casilla #parar
      está marcada (checked), llamar a e.stopPropagation().
   4. Escuchar click en #limpiar para vaciar el registro con
      replaceChildren().
   5. Probad: clic en el botón, en la zona verde y en la azul. Después
      marcad la casilla y repetid.
   ============================================================================== */

// estructura del programa principal

// funciones
// la MISMA función escucha en los tres elementos
function registrar(e) {
    const li = document.createElement('li');
    // currentTarget: quién escucha AHORA · target: dónde se hizo clic
    li.textContent = `escucha: ${e.currentTarget.id} · target: ${e.target.id}`;
    registro.append(li);
}

// constantes al DOM que queremos escuchar
const abuelo = document.querySelector('#abuelo');
const padre = document.querySelector('#padre');
const hijo = document.querySelector('#hijo');
const parar = document.querySelector('#parar');
const limpiar = document.querySelector('#limpiar');
const registro = document.querySelector('#registro');

// colocar escuchadores de eventos
abuelo.addEventListener('click', registrar);
padre.addEventListener('click', registrar);
hijo.addEventListener('click', registrar);

// segundo escuchador en el hijo: decide si la burbuja sigue subiendo
hijo.addEventListener('click', (e) => {
    if (parar.checked) {
        e.stopPropagation();
        const li = document.createElement('li');
        li.textContent = '✋ stopPropagation(): la burbuja se para aquí';
        registro.append(li);
    }
});

limpiar.addEventListener('click', () => {
    registro.replaceChildren();
});
