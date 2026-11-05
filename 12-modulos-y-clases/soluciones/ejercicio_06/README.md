# Solución · Ejercicio 06 · Modelo, vista y controlador

[← Volver al enunciado](../../ejercicios/ejercicio_06/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Escribir el modelo de una lista de la compra cuya vista y cuyo controlador ya estaban hechos, respetando qué le toca a cada fichero.

## Tres ficheros, tres responsabilidades

| Fichero | Papel | Sabe… | No sabe… |
| --- | --- | --- | --- |
| `modelo.js` | **Modelo** | Qué artículos hay y qué reglas cumplen | Que existe una página |
| `vista.js` | **Vista** | Cómo se pinta un artículo | De dónde vienen los datos ni cómo se cambian |
| `app.js` | **Controlador** | Qué hacer cuando el usuario pulsa algo | Cómo se valida ni cómo se pinta |

La prueba de que está bien repartido es sencilla: en `modelo.js` no aparece `document`, y en `vista.js` no aparece `lista`. Cada módulo exporta solo lo que los demás necesitan [1] y esconde el resto.

## Por qué merece la pena

- **Se puede cambiar una parte sin tocar las otras.** Si mañana la lista se pinta como tabla, solo cambia `vista.js`. Si la cantidad máxima pasa a ser 99, solo cambia `modelo.js`.
- **Los fallos se buscan en un sitio.** ¿Se añade un artículo vacío? Es el modelo. ¿Se ve mal? Es la vista.
- **El modelo se puede reutilizar.** `ListaCompra` funcionaría igual en otra página, o con otra vista, porque no depende del HTML.

## El modelo

```javascript
export class ListaCompra {
    #articulos = [];
    #siguienteId = 1;
    agregar(nombre, cantidad) { … throw new Error(…) … }
    get articulos() {
        return this.#articulos.map((a) => ({ ...a }));
    }
    …
}
```

Es todo lo del ejercicio 05 aplicado a un caso real: los datos son **privados** [2], las reglas lanzan un `Error` cuando algo no se puede hacer [3], y el getter devuelve **copias** para que nadie modifique los artículos por la puerta de atrás.

Cada artículo tiene un `id` propio que nunca se repite, porque `#siguienteId` solo crece. Así, eliminar el artículo 2 no confunde al 3, cosa que sí pasaría si usarais su posición en el array.

## El controlador: el ciclo de siempre

```javascript
lista.agregar(nombre, cantidad);    // 1. el usuario actúa → se cambia el modelo
actualizar();                        // 2. se repinta la vista con los datos nuevos
```

Es el patrón **estado → renderizar** del bloque 07. La diferencia es que ahora el estado tiene su propio fichero y sus propias reglas, y la vista también.

### Fuentes y Documentación Oficial

1. [JavaScript modules (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
2. [Private elements (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_elements)
3. [Error (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
