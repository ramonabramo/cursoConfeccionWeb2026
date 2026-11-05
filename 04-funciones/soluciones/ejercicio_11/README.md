# Solución · Ejercicio 11 · Mi propio filter

[← Volver al enunciado](../../ejercicios/ejercicio_11/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Construir a mano una versión de `filter` para entender cómo funciona por dentro.

## Una función que recibe una función

```javascript
function filtrar(lista, decide) {
    const resultado = [];
    for (const elemento of lista) {
        if (decide(elemento)) {
            resultado.push(elemento);
        }
    }
    return resultado;
}
```

`filtrar` no sabe **qué** elementos quiere: solo sabe recorrer y guardar. La decisión la delega en `decide`, una función que recibe por parámetro. Las funciones que reciben o devuelven otras funciones se llaman **de orden superior**. Es la idea de los *callbacks* de este bloque, llevada a su uso más típico.

## Una sola función, muchos filtros

| Llamada | Resultado |
| --- | --- |
| `filtrar(numeros, esPar)` | `8, 22, 10` |
| `filtrar(numeros, (n) => n > 10)` | `15, 22` |
| `filtrar(nombres, empiezaPorA)` | `Ana, alba` |
| `numeros.filter(esPar)` | `8, 22, 10` |

Para cambiar el criterio no toco `filtrar`: le paso otra función. Puede ser una con nombre (`esPar`) o una flecha escrita en el momento (`(n) => n > 10`).

## Así es el `filter` de verdad

La última fila da lo mismo que la primera. El método `filter` de los arrays hace exactamente esto: llama a vuestra función con cada elemento y se queda con los que devuelven `true`, en un array **nuevo** [1]. Ahora que lo habéis escrito vosotros, ya no es magia.

`empiezaPorA` pasa el texto a minúsculas antes de preguntar con `startsWith`: así `'alba'` y `'Ana'` entran las dos.

### Fuentes y Documentación Oficial

1. [Array.prototype.filter() (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
