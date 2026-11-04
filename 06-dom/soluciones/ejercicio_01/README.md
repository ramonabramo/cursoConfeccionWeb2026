# Solución · Ejercicio 01 · Explorador del árbol DOM

[← Volver al enunciado](../../ejercicios/ejercicio_01/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Localizar elementos de una página con `querySelector` y distintos selectores CSS, y moverse por el árbol del DOM.

## El DOM en una frase

Cuando el navegador carga vuestro HTML, construye en memoria un **árbol de objetos** que representa la página: el DOM [1]. Cada etiqueta es un nodo, y los nodos están unos dentro de otros como en vuestro código. JavaScript no toca el fichero HTML: trabaja con ese árbol [2]. Lo tenéis dibujado en la [infografía de la teoría](../../img/arbol-dom.svg).

## La solución paso a paso

### 1. `querySelector` acepta cualquier selector CSS

`querySelector()` devuelve el **primer** elemento que encaja con el selector, o `null` si no encuentra ninguno [3]. Y el selector es CSS normal y corriente, el mismo que usaríais en `style.css`:

| Selector | Tipo | Encuentra |
| --- | --- | --- |
| `'h2'` | Etiqueta | `<H2>` «Tortilla de patatas» (el primero de la página) |
| `'#ingredientes'` | Id | `<UL>` con los cuatro ingredientes |
| `'.importante'` | Clase | `<LI>` «Huevos» |
| `'#ingredientes li'` | Descendiente | `<LI>` «Patatas»: el primer `li` dentro de la lista |
| `'li:last-child'` | Pseudoclase | `<LI>` «Aceite de oliva» |
| `'[data-tiempo]'` | Atributo | `<P>` «Tiempo: 40 minutos» |
| `'#noExiste'` | Id | `null` |

Fijaos en el caso de `'h2'`: la página tiene **dos** `h2`, el de la receta y el de «Informe del explorador». `querySelector` se queda con el primero que aparece en el documento.

### 2. Comprobar el `null`

```javascript
if (elemento === null) {
    return `${selector} → null`;
}
```

Si intentáis leer `null.textContent`, tenéis el `TypeError` del bloque 01. Cuando no estéis seguros de que un elemento exista, comprobadlo antes.

### 3. `tagName`

`tagName` devuelve el nombre de la etiqueta en **mayúsculas** en los documentos HTML [4]. Por eso el informe muestra `<UL>` y no `<ul>`.

### 4. Navegar por el árbol

```javascript
lista.children.length               // 4
lista.children[0].textContent       // 'Patatas'
importante.parentElement.id         // 'ingredientes'
```

- `children` es la colección de **elementos hijos** de un elemento [5].
- `parentElement` es su **elemento padre** [6].

Una vez que tenéis un elemento, podéis llegar a sus vecinos sin volver a buscar desde `document`.

### Dos extras de formato

- `selector.padEnd(18)` rellena el texto con espacios hasta 18 caracteres, para que las flechas del informe salgan alineadas.
- El `textContent` de la lista incluye los saltos de línea y la sangría del HTML. `replace(/\s+/g, ' ')` usa una expresión regular para convertir cada grupo de espacios en uno solo. No hace falta que la memoricéis: solo deja el informe más limpio.

### Fuentes y Documentación Oficial

1. [Modelo de Objetos del Documento (DOM) (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model)
2. [DOM scripting introduction (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/DOM_scripting)
3. [Document: querySelector() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
4. [Element: tagName property (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Element/tagName)
5. [Element: children property (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Element/children)
6. [Node: parentElement property (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Node/parentElement)
