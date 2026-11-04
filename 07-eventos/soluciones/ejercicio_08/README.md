# Solución · Ejercicio 08 · Catálogo interactivo

[← Volver al enunciado](../../ejercicios/ejercicio_08/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Una tienda con filtro por categoría, búsqueda, orden y carrito. Junta todo lo que habéis visto en los bloques 05, 06 y 07.

## La arquitectura: estado → renderizar

```javascript
const estado = {
    categoria: 'todas',
    busqueda: '',
    orden: 'nombre',
    carrito: [],
};
```

Todo lo que puede cambiar en la aplicación está en **un solo objeto**. Los cuatro escuchadores hacen siempre lo mismo: **cambiar el estado y llamar a `renderizar()`**. Ninguno toca las tarjetas directamente.

| Evento | Cambia | Después |
| --- | --- | --- |
| Clic en un filtro | `estado.categoria` | `renderizar()` |
| `input` en la búsqueda | `estado.busqueda` | `renderizar()` |
| `change` en el orden | `estado.orden` | `renderizar()` |
| Clic en «Añadir» | `estado.carrito` | `renderizar()` |

¿La ventaja? `renderizar()` siempre tiene en cuenta **los tres filtros a la vez**. Si el usuario elige «Periféricos», escribe «ra» y ordena por precio, todo encaja sin código extra.

## `productosVisibles()`: los datos a la carta

```javascript
productos
    .filter((p) => estado.categoria === 'todas' || p.categoria === estado.categoria)
    .filter((p) => p.nombre.toLowerCase().includes(texto));
```

Dos `filter` encadenados, uno por criterio. Fijaos en el primero: si la categoría es `'todas'`, la condición es `true` para cualquier producto y no se descarta ninguno.

La búsqueda convierte los dos textos a minúsculas antes de comparar, para que «MONITOR» encuentre «Monitor 27"». Era el reto que os dejé en el bloque 05.

Para ordenar por nombre uso `localeCompare`, que compara textos respetando el orden alfabético del idioma. Con el `a - b` de los números no funcionaría.

## Dos delegaciones

```javascript
filtros.addEventListener('click', (e) => {
    const boton = e.target.closest('button');
    …
});

catalogo.addEventListener('click', (e) => {
    const boton = e.target.closest('button[data-id]');
    …
});
```

- **En los filtros**, por comodidad: un escuchador en lugar de cuatro.
- **En el catálogo**, por **necesidad**: las tarjetas se borran y se recrean en cada `renderizar()`. Un escuchador puesto en un botón desaparecería con él. El del catálogo, que nunca se borra, sigue funcionando [1].

`closest` con un selector de atributo, `button[data-id]`, me asegura que el clic ha sido en un botón de producto [2].

## El botón activo

```javascript
filtros.querySelectorAll('button').forEach((b) => {
    b.classList.toggle('activo', b === boton);
});
```

Recorro los cuatro botones y le pongo la clase `activo` solo al pulsado, quitándosela al resto. Una línea gracias al `toggle` con condición del ejercicio 01.

## Prueba completa

1. Pulsad «Periféricos»: 3 productos.
2. Escribid «r» en el buscador: quedan «Alfombrilla XL» y «Ratón inalámbrico».
3. Ordenad por precio de menor a mayor: la alfombrilla primero.
4. Añadid la alfombrilla dos veces: 🛒 2 productos · 31.90 €.

Ese recorrido son cuatro tipos de evento distintos trabajando sobre un mismo estado. Si lo entendéis, tenéis la base de cualquier aplicación web.

### Fuentes y Documentación Oficial

1. [Event bubbling (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Event_bubbling)
2. [Element: closest() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Element/closest)
