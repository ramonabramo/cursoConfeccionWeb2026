# Solución · Ejercicio 02 · Conversor en tiempo real

[← Volver al enunciado](../../ejercicios/ejercicio_02/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Convertir la temperatura mientras el usuario escribe, sin botón, y recalcular también al cambiar el número de decimales.

## Adiós a `prompt()`

A partir de este bloque, los datos se leen de los **campos de la página**:

```javascript
const texto = campoCelsius.value;
```

La propiedad `value` de un `<input>` contiene lo que hay escrito, y es **siempre un texto** [1], incluso en un `<input type="number">`. La regla del bloque 01 sigue valiendo: convertid antes de calcular.

¿Y por qué compruebo primero si está vacío? Porque `Number('')` es `0`, como visteis en el bloque 04. Sin esa comprobación, al borrar el campo aparecería «0 °C = 32 °F».

## `input`: con cada cambio

```javascript
campoCelsius.addEventListener('input', actualizar);
```

El evento `input` se dispara cada vez que el valor del campo cambia por una acción del usuario [2]: con cada letra que escribe, borra o pega. Es el evento perfecto para los resultados en tiempo real y las búsquedas mientras se escribe.

## `change`: cambio confirmado

```javascript
selectDecimales.addEventListener('change', actualizar);
```

`change` se dispara cuando el usuario **confirma** un cambio [3]. En un `<select>`, al elegir una opción. En un campo de texto, en cambio, no salta con cada letra, sino cuando el campo pierde el foco después de haber cambiado [3].

| Evento | En un campo de texto | En un `<select>` |
| --- | --- | --- |
| `input` | Con cada letra | Al elegir una opción |
| `change` | Al salir del campo, si cambió | Al elegir una opción |

Para un `<select>`, los dos funcionan igual. Para un campo donde queréis reaccionar mientras se escribe, `input`.

## Una función, dos eventos

Los dos escuchadores llaman a la misma función, `actualizar`, porque hacen lo mismo: leer los dos controles y recalcular. Si escribierais dos funciones flecha distintas con el mismo código dentro, cualquier cambio habría que hacerlo dos veces.

Fijaos en que `actualizar` lee **los dos** controles cada vez, sin importar cuál ha cambiado. Así el resultado siempre es coherente con lo que se ve en pantalla.

### Fuentes y Documentación Oficial

1. [HTMLInputElement: value property (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/value)
2. [Element: input event (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event)
3. [HTMLElement: change event (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
