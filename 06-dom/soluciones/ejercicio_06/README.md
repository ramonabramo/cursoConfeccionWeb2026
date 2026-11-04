# Solución · Ejercicio 06 · Tarjetas de producto desde datos

[← Volver al enunciado](../../ejercicios/ejercicio_06/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Generar un catálogo de tarjetas a partir de un array de objetos, repartiendo el trabajo en dos funciones.

## Dos funciones, dos responsabilidades

| Función | Recibe | Hace | Devuelve |
| --- | --- | --- | --- |
| `crearTarjeta(producto)` | Un objeto | Construye el HTML de **un** producto | El elemento, sin colgar |
| `renderizar(lista)` | Un array | Vacía el contenedor y pinta **todos** | Nada |

Esta separación es la del bloque 04, «una función, una tarea», aplicada al DOM. Y tiene premio: en el bloque 07, cuando el usuario cambie un filtro con un botón, os bastará con volver a llamar a `renderizar` con otra lista. Nada más.

## `crearTarjeta`: construir sin colgar

```javascript
function crearTarjeta(producto) {
    const tarjeta = document.createElement('article');
    …
    tarjeta.append(titulo, precio, chip);
    return tarjeta;
}
```

La función crea cuatro elementos y los ensambla: el `h3`, el `p` y el `span` dentro del `article`. Fijaos en que `append()` admite **varios** elementos a la vez [1].

Y fijaos en que **no la cuelga en la página**: la devuelve. Así, quien la llama decide dónde ponerla. Hoy va en el catálogo; mañana podría ir en una lista de favoritos, y la función no cambiaría.

El `dataset.id` no se ve, pero queda guardado en el HTML (`data-id="3"`). En el bloque 07 os servirá para saber sobre qué producto ha hecho clic el usuario.

## `renderizar`: vaciar y pintar

```javascript
function renderizar(lista) {
    catalogo.replaceChildren();
    lista.forEach((producto) => {
        catalogo.append(crearTarjeta(producto));
    });
}
```

`replaceChildren()` sin argumentos **vacía** el elemento [2]. Es imprescindible: si llamáis a `renderizar` dos veces sin vaciar, tendríais las tarjetas duplicadas. La regla es «borrar y pintar desde cero».

## El caso vacío

```javascript
if (lista.length === 0) {
    … 'No hay productos en ese rango de precio.'
    return;
}
```

Un buen detalle de interfaz: si no hay nada que mostrar, decidlo. Un hueco en blanco hace pensar al usuario que la página se ha roto.

## Con distintos precios

| Máximo | Se muestran |
| --- | --- |
| 100 | 5 de 6 (todos menos el monitor) |
| 300 | 6 de 6 |
| 5 | Ninguno: aparece el aviso |
| Cancelar | 6 de 6, sin límite de precio |

### Fuentes y Documentación Oficial

1. [Element: append() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Element/append)
2. [Element: replaceChildren() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Element/replaceChildren)
