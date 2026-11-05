/* ==============================================================================
   EJERCICIO 06 · Modelo, vista y controlador (SOLUCIÓN)

   OBJETIVO:
   Separar responsabilidades: un modelo con los datos y las reglas, que no
   toca el DOM; una vista que solo pinta; y un controlador que escucha al
   usuario y los coordina. La vista y casi todo el controlador ya están
   hechos: os toca escribir el modelo.

   PASOS A REALIZAR:
   1. Leed vista.js y app.js antes de empezar. Fijaos en qué métodos y
      getters del modelo usan.
   2. En modelo.js, declarar los campos privados #articulos = [] y
      #siguienteId = 1.
   3. agregar(nombre, cantidad): limpiar el nombre; si está vacío, throw new
      Error('Escribe el nombre del artículo.'); si la cantidad no es un
      entero mayor que 0, otro Error. Añadir { id, nombre, cantidad,
      comprado: false } e incrementar #siguienteId.
   4. alternar(id) con find, eliminar(id) y vaciarComprados() con filter.
   5. get articulos devuelve una copia de cada artículo con map y { ...a };
      get pendientes cuenta los no comprados.
   6. En app.js, completar el escuchador de Quitar los comprados.
   7. Comprobad la regla de oro: en modelo.js no puede aparecer document, y
      en vista.js no puede aparecer lista.
   ============================================================================== */

// estructura del programa principal
// el CONTROLADOR: conecta lo que hace el usuario con el modelo y la vista
import { ListaCompra } from './modelo.js';
import { pintarLista, pintarResumen, mostrarMensaje } from './vista.js';

const lista = new ListaCompra();

// funciones
function actualizar() {
    const articulos = lista.articulos;
    pintarLista(contenedor, articulos);
    pintarResumen(resumen, articulos.length, lista.pendientes);
}

// constantes al DOM que queremos escuchar
const formulario = document.querySelector('#formArticulo');
const contenedor = document.querySelector('#articulos');
const resumen = document.querySelector('#resumen');
const mensaje = document.querySelector('#mensaje');
const btnVaciar = document.querySelector('#btnVaciar');

// colocar escuchadores de eventos
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    // entradas
    const nombre = formulario.nombre.value;
    const cantidad = Number(formulario.cantidad.value);
    // procesamiento: el modelo valida
    try {
        lista.agregar(nombre, cantidad);
        mostrarMensaje(mensaje, '');
        formulario.reset();
        formulario.nombre.focus();
    } catch (error) {
        mostrarMensaje(mensaje, `✘ ${error.message}`);
    }
    // salidas
    actualizar();
});

contenedor.addEventListener('click', (e) => {
    const boton = e.target.closest('[data-accion]');
    if (!boton) {
        return;
    }
    const id = Number(boton.dataset.id);
    if (boton.dataset.accion === 'alternar') {
        lista.alternar(id);
    } else {
        lista.eliminar(id);
    }
    actualizar();
});

btnVaciar.addEventListener('click', () => {
    lista.vaciarComprados();
    actualizar();
});

actualizar();
