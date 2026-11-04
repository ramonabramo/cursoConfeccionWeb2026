# Solución · Ejercicio 08 · Tabla de notas dinámica

[← Volver al enunciado](../../ejercicios/ejercicio_08/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Generar una tabla de notas a partir de un array, con una clase de color por calificación, una fila de media en el pie y un mensaje si no hay datos. Junta todo lo del bloque.

## Tres funciones que se apoyan entre sí

| Función | Devuelve |
| --- | --- |
| `calificar(nota)` | Un objeto `{ texto, clase }` |
| `crearCelda(texto, clase)` | Un `<td>` |
| `crearFila(alumno)` | Un `<tr>` con tres celdas |

`crearFila` usa `crearCelda` y `calificar`. Cada pieza es pequeña y se entiende sola. Fijaos también en que `crearCelda` aparece porque crear un `td`, ponerle texto y quizá una clase se repetía seis veces. Cuando veáis código repetido, convertidlo en función.

## Devolver dos datos a la vez

```javascript
function calificar(nota) {
    if (nota < 5) {
        return { texto: 'Suspenso', clase: 'suspenso' };
    }
    …
}

const { texto, clase } = calificar(alumno.nota);
```

Una función solo puede devolver un valor… pero ese valor puede ser un objeto con varios datos dentro. Y con la desestructuración del bloque 05 los saco en una sola línea.

## Las clases hacen el trabajo visual

La celda de calificación recibe la clase `suspenso`, `aprobado` o `sobresaliente`, y el color está definido en `style.css`. JavaScript decide **qué** es cada nota; CSS decide **cómo** se ve. Es la regla de `classList` del ejercicio 04.

## La tabla ya existe; las filas, no

```html
<tbody id="cuerpo"></tbody>
<tfoot id="pie"></tfoot>
```

La estructura fija (la tabla y la cabecera) está en el HTML. JavaScript solo genera la parte que depende de los datos: las filas. Y, como en el ejercicio 06, primero vacío con `replaceChildren()` [1] y después relleno con `append` [2].

## El caso vacío con `colspan`

```javascript
celda.setAttribute('colspan', '3');
```

Si no hay alumnos, el pie muestra un mensaje en una sola celda que ocupa las tres columnas. `colspan` es un atributo HTML normal, así que se pone con `setAttribute` [3].

## Con nota mínima 5

| Alumno | Nota | Calificación |
| --- | --- | --- |
| Sara | 10.0 | Sobresaliente |
| Marta | 9.2 | Sobresaliente |
| Hugo | 8.8 | Aprobado |
| Ana | 7.5 | Aprobado |
| Lucía | 6.0 | Aprobado |
| **Media** | **8.30** | **Aprobado** |

«Mostrando 5 de 8 alumnos con nota ≥ 5».

### Fuentes y Documentación Oficial

1. [Element: replaceChildren() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Element/replaceChildren)
2. [Element: append() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Element/append)
3. [Element: setAttribute() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute)
