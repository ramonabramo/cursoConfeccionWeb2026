# Solución · Ejercicio 02 · Muchos elementos a la vez: NodeList

[← Volver al enunciado](../../ejercicios/ejercicio_02/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Trabajar con varios elementos a la vez: seleccionarlos, contarlos, recorrerlos y convertirlos en un array.

## `querySelectorAll`

```javascript
const todas = document.querySelectorAll('.tarea');
const hechas = document.querySelectorAll('.tarea.hecha');
const pendientes = document.querySelectorAll('.tarea:not(.hecha)');
```

`querySelectorAll()` devuelve **todos** los elementos que encajan con el selector, en una `NodeList` [1]. Si no hay ninguno, la lista está vacía: `length` vale 0. No hay `null` que vigilar.

Los selectores son CSS de nuevo:

- `.tarea.hecha` (sin espacio): elementos con **las dos** clases.
- `.tarea:not(.hecha)`: elementos con la clase `tarea` que **no** tienen `hecha`.

## Una NodeList se parece a un array… pero no lo es

| Puedo usar | ✔ / ✘ |
| --- | --- |
| `lista.length`, `lista[0]` | ✔ |
| `lista.forEach(…)` | ✔ |
| `for (const el of lista)` | ✔ |
| `lista.map(…)`, `lista.filter(…)`, `lista.reduce(…)` | ✘ `TypeError` |

`NodeList` no es un `Array`, pero se puede recorrer con `forEach()` y se puede convertir en un array de verdad con `Array.from()` [2]:

```javascript
Array.from(pendientes).map((li) => li.textContent);
```

`Array.from()` crea un array nuevo a partir de cualquier cosa que se pueda recorrer [3]. A partir de ahí, tenéis todos los métodos del bloque 05.

## Recorrer y modificar

```javascript
todas.forEach((li, indice) => {
    li.textContent = `${indice + 1}. ${li.textContent}`;
});
```

Igual que el `forEach` de los arrays: un *callback* con el elemento y su índice. Aquí lo uso para modificar cada `li` de la página.

> [!NOTE]
> La `NodeList` de `querySelectorAll` es **estática**: es una foto de cómo estaba la página en el momento de buscar [1]. Si después añadís otra tarea, la lista no se actualiza sola. Habría que volver a buscar.

## Qué tenéis que observar

- Resumen: 3 de 6 tareas hechas (50 %).
- Las seis tareas aparecen numeradas, y las hechas siguen tachadas, porque solo he cambiado el texto, no las clases.
- Pendientes: 2. Llamar al taller · 4. Estudiar el bloque 06 · 5. Regar las plantas. Salen ya numeradas porque el `forEach` de arriba se ejecutó antes.

### Fuentes y Documentación Oficial

1. [Document: querySelectorAll() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)
2. [NodeList (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/NodeList)
3. [Array.from() (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
