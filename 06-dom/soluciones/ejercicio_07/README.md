# Solución · Ejercicio 07 · Clasificación: mover y eliminar

[← Volver al enunciado](../../ejercicios/ejercicio_07/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Limpiar y ordenar una lista que ya existe en la página sin crear ningún elemento nuevo.

## La solución paso a paso

### 1. De NodeList a array

```javascript
const equipos = Array.from(clasificacion.querySelectorAll('li'));
```

Necesito `filter` y `sort`, así que convierto la `NodeList` en array, como en el ejercicio 02. Fijaos también en que busco con `clasificacion.querySelectorAll`, no con `document.querySelectorAll`: así solo busco **dentro** de la lista.

### 2. Leer los datos de cada elemento

```javascript
const puntosDe = (li) => Number(li.dataset.puntos);
```

Cada `li` guarda sus puntos en `data-puntos`. Como `dataset` devuelve siempre texto, convierto con `Number()`. Lo meto en una pequeña función flecha porque lo uso en cuatro sitios.

### 3. Eliminar: `remove()`

```javascript
li.remove();
```

`remove()` quita el elemento del árbol del DOM [1]. Desaparece de la página al momento. Es la operación contraria a `append`.

### 4. Mover: `append` de algo que ya existe

```javascript
siguen.forEach((li) => {
    clasificacion.append(li);
});
```

Aquí está la clave del ejercicio. Si hacéis `append` de un elemento que **ya está en el documento**, no se crea una copia: el elemento **se mueve** de su posición actual a la nueva [2].

Así que recorro el array ya ordenado y voy mandando cada equipo al final de la lista: primero Tiburones, después Águilas, después Leones… Cuando termino, la lista está en orden, y sigue teniendo exactamente los mismos cuatro `li`.

> [!NOTE]
> MDN lo documenta en `appendChild()`, la versión clásica de `append` [2]. Las dos se comportan igual en este aspecto.

### 5. Retoques

```javascript
siguen[0].classList.add('primero');
```

Como el array está ordenado, el primero es el líder. Le pongo una clase y CSS hace el resto.

## El resultado

```
1. Tiburones · 21 pts   ← resaltado
2. Águilas · 15 pts
3. Leones · 12 pts
4. Lobos · 7 pts
```

Halcones y Búhos han desaparecido. Y si inspeccionáis la lista con las herramientas de desarrollo, veréis cuatro `li`, ni uno más.

### Fuentes y Documentación Oficial

1. [Element: remove() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Element/remove)
2. [Node: appendChild() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)
