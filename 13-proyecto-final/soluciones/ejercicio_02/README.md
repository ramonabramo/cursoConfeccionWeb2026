# Solución · Fase 2 · La vista: pintar el tablero

[← Volver al enunciado](../../ejercicios/ejercicio_02/) · [← Volver al proyecto](../../README.md)

## Qué pedía esta fase

Escribir `vista.js`: las funciones que convierten las tareas en elementos de la página.

## Las reglas de la vista

| La vista sí… | La vista no… |
| --- | --- |
| Recibe datos y crea elementos | Importa el modelo ni modifica tareas |
| Exporta funciones con un nombre claro | Escucha eventos |
| Decide cómo se ve cada cosa | Decide qué tareas se muestran |

Esto es lo que visteis en el bloque 12 con la lista de la compra. `app.js` (el controlador) decide **qué** pintar llamando a `tareasVisibles()`; la vista decide **cómo**.

## `crearTarea`: un elemento por tarea

```javascript
li.classList.toggle('hecha', tarea.completada);
li.classList.toggle('vencida', tarea.vencida);
li.dataset.id = tarea.id;
```

Es el patrón crear + renderizar del bloque 06. Tres detalles:

- **`classList.toggle(clase, condición)`** añade o quita la clase según el valor. Una línea en lugar de un `if`.
- **`dataset.id`** guarda el id de la tarea en el propio elemento [1]. En la fase 3, al pulsar una casilla, sabremos de qué tarea se trata.
- **`data-accion`** en la casilla y en el botón dice qué hace cada control, para la delegación de la fase 3.

Todo el texto entra con `textContent`, nunca con `innerHTML`: si un título trae etiquetas HTML (y en la fase 6 vendrán títulos de Internet), se muestran como texto y no se ejecutan.

## Un aviso para el estado vacío

```javascript
if (tareas.length === 0) {
    li.textContent = '📭 No hay tareas que mostrar.';
```

Es uno de los cuatro estados del bloque 11: una lista vacía sin explicación parece un error.

## `pintarTareas` empieza vaciando

`contenedor.replaceChildren()` sin argumentos elimina todos los hijos [2]. Así, `actualizar()` puede llamar a `pintarTareas` tantas veces como quiera y el resultado siempre refleja el estado actual, sin duplicados.

## Las etiquetas de los botones

Cada casilla y cada botón llevan un `aria-label` con el título de su tarea: `Eliminar «Preparar la presentación final»`. Un lector de pantalla que recorre los botones oye así **qué** se va a eliminar, en lugar de un «Eliminar, Eliminar, Eliminar» que no dice nada.

### Fuentes y Documentación Oficial

1. [HTMLElement: dataset property (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)
2. [Element: replaceChildren() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Element/replaceChildren)
