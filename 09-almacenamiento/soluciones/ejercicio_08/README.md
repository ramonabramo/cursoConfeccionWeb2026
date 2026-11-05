# Solución · Ejercicio 08 · Un carrito que sobrevive

[← Volver al enunciado](../../ejercicios/ejercicio_08/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Un carrito de la compra persistente, preparado para lo que puede salir mal con los datos guardados y sincronizado entre pestañas.

## Regla 1: guardad lo mínimo, nunca precios

```javascript
carrito = [{ id: 3, cantidad: 2 }, { id: 1, cantidad: 1 }];
```

El almacén solo guarda **qué** productos y **cuántos**. El nombre y el precio salen siempre del array `productos`, que está en el código.

¿Por qué? Porque el usuario puede abrir las herramientas de desarrollo y **cambiar lo que hay guardado**. Si guardarais `{ id: 3, precio: 45 }` y usarais ese precio, bastaría con editarlo a `0.01` para comprar unos auriculares a céntimo. Lo que hay en el navegador es del usuario: tratadlo como información que os da él, no como una verdad.

> [!NOTE]
> En una tienda de verdad, ni siquiera el precio del código sería definitivo: el servidor volvería a calcular el total. Pero el principio es el mismo: no os fiéis de lo que llega del navegador.

## Regla 2: cargad a la defensiva

```javascript
let datos;
try {
    datos = JSON.parse(texto);
} catch (error) {
    return [];
}
```

Si alguien cambia el valor guardado por `hola`, `JSON.parse` no puede interpretarlo y **lanza un error** (`SyntaxError`) [1]. Sin protección, el script se detendría y la tienda dejaría de funcionar.

`try...catch` permite **intentar** un código y, si falla, **capturar** el error y decidir qué hacer [2]: aquí, empezar con el carrito vacío. Lo veréis con calma en el bloque 10, pero este es su uso más típico.

Y aunque el texto sea JSON válido, puede no ser lo que esperáis:

```javascript
if (!Array.isArray(datos)) {
    return [];
}
return datos.filter((linea) => buscarProducto(linea.id) !== undefined && …);
```

- `Array.isArray()` comprueba que lo leído es de verdad un array [3]. Un `JSON.parse('42')` es válido, pero no es un carrito.
- El `filter` descarta líneas de productos que ya no existen (quizá los retirasteis del catálogo) o con cantidades sin sentido.

Probadlo: escribid `hola`, `42` o `[{"id":99,"cantidad":1}]` en la clave desde las herramientas de desarrollo y recargad. La tienda sigue funcionando.

## Regla 3: sincronizad las pestañas

```javascript
window.addEventListener('storage', (e) => {
    if (e.key === CLAVE) {
        carrito = cargarCarrito();
        renderizar();
    }
});
```

El evento `storage` se dispara cuando **otro documento** del mismo origen cambia el almacén [4]. Ojo: no salta en la pestaña que hace el cambio, sino en las demás. `e.key` dice qué clave ha cambiado.

Abrid la tienda en dos pestañas, añadid algo en una y mirad la otra: se actualiza sola. Sin esto, el usuario tendría dos carritos distintos en pantalla y, según la pestaña desde la que siguiera comprando, perdería productos.

## Lo de siempre, que ya domináis

- Delegación: un escuchador por zona, porque los botones se recrean en cada renderizado. De hecho, **la misma función** `manejarClic` sirve para el catálogo y para el carrito, porque cada botón dice en `data-accion` lo que quiere.
- Estado → guardar → renderizar, como en el ejercicio 07.

### Fuentes y Documentación Oficial

1. [JSON.parse() (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
2. [try...catch (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)
3. [Array.isArray() (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
4. [Window: storage event (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Window/storage_event)
