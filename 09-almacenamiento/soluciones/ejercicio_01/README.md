# Solución · Ejercicio 01 · Mi primer almacén

[← Volver al enunciado](../../ejercicios/ejercicio_01/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Guardar, leer y borrar datos en `localStorage` y comprobar que sobreviven a una recarga.

## Los cuatro métodos

```javascript
localStorage.setItem('color', 'azul');   // guardar (o sobrescribir)
localStorage.getItem('color');           // leer → 'azul'
localStorage.removeItem('color');        // borrar una clave
localStorage.clear();                    // borrar TODO
```

`localStorage` es un almacén de pares **clave → valor** que el navegador guarda para vuestro origen y que no caduca: sobrevive a recargar la página y a cerrar el navegador [1].

| Método | Qué hace |
| --- | --- |
| `setItem(clave, valor)` | Crea la clave o, si ya existía, cambia su valor [2] |
| `getItem(clave)` | Devuelve el valor, o **`null`** si esa clave no existe [3] |
| `removeItem(clave)` | Borra esa clave [4] |
| `clear()` | Borra todas las claves del almacén [5] |

Fijaos en el `null` de `getItem`: es vuestra forma de saber si había algo guardado. Lo usaréis en casi todos los ejercicios.

## Recorrer el almacén

```javascript
for (let i = 0; i < localStorage.length; i++) {
    const clave = localStorage.key(i);
    …
}
```

`length` dice cuántos elementos hay [6] y `key(i)` devuelve el nombre de la clave que ocupa la posición `i` [7]. No contéis con ningún orden concreto: depende del navegador.

## Una sorpresa: claves que no son vuestras

Si ya habéis hecho otros ejercicios de este bloque, en la lista aparecen claves como `curso-js:b09e02:nombre`. ¿Por qué? Porque `localStorage` se comparte **por origen** [1]: todas las páginas del mismo sitio ven el mismo almacén. Con Live Server, todas las páginas de `http://127.0.0.1:5500` comparten almacén; abriendo los ficheros con doble clic, Chrome comparte uno para todos los ficheros locales.

Dos consecuencias prácticas:

- Por eso, en el resto del bloque, cada ejercicio usa claves con **un prefijo propio**: `curso-js:b09e03:tema`. Así no se pisan.
- **`clear()` es un martillo:** borra también lo de los demás ejercicios. Por eso pido confirmación. En una aplicación real, casi siempre preferiréis `removeItem` con las claves que son vuestras.

## Comprobadlo en las herramientas de desarrollo

Pestaña **Aplicación** en Chrome y Edge, o **Almacenamiento** en Firefox, apartado *Local Storage*. Veréis vuestras claves, podéis editarlas a mano y borrarlas. Recordadlo para el ejercicio 08: si vosotros podéis tocarlo, el usuario también.

### Fuentes y Documentación Oficial

1. [Window: localStorage property (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
2. [Storage: setItem() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem)
3. [Storage: getItem() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem)
4. [Storage: removeItem() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Storage/removeItem)
5. [Storage: clear() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Storage/clear)
6. [Storage: length property (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Storage/length)
7. [Storage: key() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Storage/key)
