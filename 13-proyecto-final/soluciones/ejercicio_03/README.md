# Solución · Fase 3 · Eventos de ratón: completar, eliminar, editar y filtrar

[← Volver al enunciado](../../ejercicios/ejercicio_03/) · [← Volver al proyecto](../../README.md)

## Qué pedía esta fase

Conectar los controles del tablero con el modelo usando delegación de eventos: casillas, botones de eliminar, edición con doble clic y filtros.

## Tres escuchadores para todas las tareas

| Evento | En | Qué hace |
| --- | --- | --- |
| `change` | `#tareas` | Una casilla cambia → `tablero.alternar(id)` [1] |
| `click` | `#tareas` | Botón Eliminar → `tablero.eliminar(id)` |
| `dblclick` | `#tareas` | Doble clic en un título → `editarTarea(li)` [2] |

Las tareas se recrean en cada `actualizar()`, así que no tiene sentido poner escuchadores en cada una. Pongo uno en la lista y, con `closest`, averiguo qué control se ha pulsado y a qué `li` pertenece [3]:

```javascript
const casilla = e.target.closest('[data-accion="alternar"]');
tablero.alternar(Number(casilla.closest('li').dataset.id));
```

Es la delegación del bloque 07. Para la casilla uso `change`, no `click`: `change` es el evento que indica que el valor ha cambiado, se cambie con el ratón o con la barra espaciadora.

## Editar con doble clic

```javascript
const campo = activarEdicion(li);
campo.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') { terminar(true); } else if (e.key === 'Escape') { terminar(false); }
});
campo.addEventListener('blur', () => terminar(true));
```

`activarEdicion`, en la vista, cambia el título por un campo con `replaceWith` [4] y le da el foco. Desde ahí, tres salidas: **Enter** guarda, **Escape** cancela y **salir del campo** (`blur`) también guarda [5], como en la mayoría de aplicaciones.

### El guardado doble

Pulsar Enter guarda y llama a `actualizar()`, que borra el campo de la página. Según el navegador, eso puede provocar también un `blur`, que intentaría guardar otra vez. La variable `terminada` lo evita:

```javascript
if (terminada) {
    return;
}
terminada = true;
```

Es un problema clásico cuando dos eventos pueden llegar por el mismo motivo. La solución también es clásica: una bandera que dice «esto ya está hecho».

### Si el título no es válido

`tablero.renombrar` usa la misma validación que al crear la tarea. Si borráis el título y pulsáis Enter, el modelo lanza un `Error`, el `catch` lo muestra en `#mensaje` y la tarea conserva su título anterior. La vista no tiene que saber cuántos caracteres son válidos.

## Los filtros

```javascript
filtro = boton.dataset.filtro;
marcarFiltro();
actualizar();
```

El estado cambia, se marca el botón activo y se repinta. `marcarFiltro` actualiza la clase `activo` y el atributo `aria-pressed`, que indica a los lectores de pantalla qué botón está «pulsado» [6]. El filtrado en sí lo hace el modelo con `tablero.filtrar(filtro)`: la regla de qué es una tarea vencida está en un solo sitio.

### Fuentes y Documentación Oficial

1. [HTMLElement: change event (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
2. [Element: dblclick event (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event)
3. [Element: closest() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Element/closest)
4. [Element: replaceWith() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Element/replaceWith)
5. [Element: blur event (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event)
6. [ARIA: aria-pressed attribute (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed)
