# Solución · Ejercicio 02 · Formas de exportar e importar

[← Volver al enunciado](../../ejercicios/ejercicio_02/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Probar las cuatro formas de importar y comprobar en directo qué cambia cuando un fichero es un módulo.

## Cuatro formas de importar

| Forma | Código | Cuándo |
| --- | --- | --- |
| Con nombre | `import { areaCirculo } from './geometria.js'` | Lo normal: sabéis qué queréis |
| Con alias | `import { areaRectangulo as areaRect } from …` | El nombre choca con otro o es muy largo |
| Por defecto | `import convertir from './conversor.js'` | El módulo tiene una cosa principal |
| Entero | `import * as geo from './geometria.js'` | Queréis todo, agrupado bajo un nombre |

Cada módulo puede tener muchas exportaciones con nombre, pero **solo una por defecto** [1]. La exportación por defecto se importa **sin llaves** y con el nombre que elijáis [2]. Las otras se importan con llaves y con su nombre exacto, salvo que uséis `as`.

Con `* as geo`, `Object.keys(geo)` muestra `areaCirculo, areaRectangulo, perimetroCirculo`: todo lo exportado, convertido en propiedades de un objeto.

## Lo que cambia en un módulo

Estas cuatro filas son las que más sorprenden la primera vez:

| Experimento | Resultado | Explicación |
| --- | --- | --- |
| Se ejecuta una vez | `contador.js se ha ejecutado 1 vez…` | Un módulo se ejecuta una sola vez aunque lo importen varios ficheros [3]. `app.js` e `informe.js` comparten el mismo `contador.js` |
| `this` | `undefined` | Los módulos funcionan siempre en modo estricto [3], y en su nivel superior `this` vale siempre `undefined` [4] |
| `window.secreto` | `undefined` | Lo declarado en un módulo no se vuelve global [3] |
| `readyState` | `interactive` | Los módulos se cargan **diferidos**: aunque el script esté en el `<head>`, se ejecuta cuando el HTML ya está leído [3]. Por eso `querySelector` encuentra la tabla |

## Un `import` es de solo lectura… y está vivo

```javascript
visitas = 99;    // TypeError: Assignment to constant variable.
```

Lo que importáis no se puede reasignar: el valor es del módulo que lo exporta [2]. Si queréis cambiarlo, tiene que ser con una función de ese módulo, como `sumarVisita()`.

Y al pulsar **Sumar visita**, `visitas` pasa a `1`, `2`, `3`… aunque lo importasteis al principio. Los `import` son **enlaces vivos** [2]: no copian el valor, sino que miran siempre el valor actual dentro de `contador.js`.

### Fuentes y Documentación Oficial

1. [export (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)
2. [import (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
3. [JavaScript modules (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
4. [this (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
