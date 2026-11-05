# Solución · Ejercicio 09 · Marcar todas las casillas

[← Volver al enunciado](../../ejercicios/ejercicio_09/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Una casilla que marca o desmarca todas las de un grupo, y que refleja si el grupo está completo, vacío o a medias.

## Dos direcciones

| Cuando cambia… | Hay que actualizar… |
| --- | --- |
| La maestra | Todas las casillas del grupo |
| Una del grupo | La maestra |

```javascript
maestra.addEventListener('change', () => {
    casillas.forEach((c) => { c.checked = maestra.checked; });
    actualizarMaestra();
});
```

De la maestra al grupo basta con copiar su `checked` a todas [1]. Fijaos en que cambiar `checked` desde JavaScript **no** dispara el evento `change` de esas casillas: solo los cambios del usuario lo hacen. Por eso llamo yo a `actualizarMaestra()`.

## El estado indeterminado

```javascript
maestra.checked = marcadas === casillas.length;
maestra.indeterminate = marcadas > 0 && marcadas < casillas.length;
```

| Marcadas | `checked` | `indeterminate` | Se ve |
| --- | --- | --- | --- |
| 0 de 4 | `false` | `false` | ☐ |
| 2 de 4 | `false` | `true` | ⊟ (una raya) |
| 4 de 4 | `true` | `false` | ☑ |

`indeterminate` solo existe como propiedad de JavaScript [2] [3]: no hay atributo HTML para ponerlo desde el principio. Y es solo visual: al enviar el formulario, la maestra no manda ningún valor, porque no tiene `name`.

## Una sola escucha para el grupo

`change` burbujea, así que escucho en el formulario y compruebo que viene de una casilla del grupo con `e.target.name`. Si mañana añadís un quinto permiso al HTML, funciona sin tocar el JavaScript.

## Leer el grupo al enviar

`FormData.getAll('permiso')` devuelve un array con los `value` de las casillas marcadas con ese `name`, como visteis en el apartado 3.2. Las que no están marcadas no se envían.

### Fuentes y Documentación Oficial

1. [HTMLInputElement: checked property (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/checked)
2. [HTMLInputElement: indeterminate property (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/indeterminate)
3. [<input type="checkbox"> (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/checkbox)
