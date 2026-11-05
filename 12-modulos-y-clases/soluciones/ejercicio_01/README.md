# Solución · Ejercicio 01 · Mi primer módulo

[← Volver al enunciado](../../ejercicios/ejercicio_01/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Sacar las funciones de cálculo a un fichero propio, `utilidades.js`, y usarlas desde `app.js` con `import`.

## Exportar: decidir qué se comparte

```javascript
export const PORCENTAJE_IVA = 21;
const IVA = PORCENTAJE_IVA / 100;      // sin export: privada del módulo
export function conIVA(precio) { … }
export function formatearPrecio(cantidad) { … }
```

Un módulo es un fichero con su propio ámbito. Lo que lleva `export` delante queda disponible para otros ficheros; lo demás se queda dentro [1]. Pueden exportarse constantes, funciones y clases, y puede haber tantas exportaciones con nombre como queráis [2].

Fijaos en que `conIVA` usa `IVA` sin problema: está en su mismo fichero. Lo que no puede hacer nadie más es tocarla.

## Importar: pedir lo que se necesita

```javascript
import { PORCENTAJE_IVA, conIVA, formatearPrecio } from './utilidades.js';
```

Dentro de las llaves van los nombres **exactos** que exporta el otro módulo [3]. Y la ruta:

| Detalle | Por qué |
| --- | --- |
| Empieza por `./` | Indica «en esta misma carpeta». Sin ella, el navegador no la reconoce como ruta de un fichero |
| Lleva `.js` | El navegador pide exactamente esa URL: no adivina extensiones |
| Va al principio del fichero | Los `import` se resuelven antes de ejecutar el código [3] |

Si importáis un nombre que no existe (por ejemplo, porque olvidasteis el `export`), el módulo **no llega a ejecutarse** y la consola os dice qué nombre falta. Probadlo quitando un `export`.

## `type="module"`

```html
<script type="module" src="app.js"></script>
```

El atributo `type="module"` le dice al navegador que el fichero es un módulo [4]. Solo `app.js` aparece en el HTML: es el módulo principal, él importa `utilidades.js` y el navegador lo descarga solo. Sin `type="module"`, el navegador trataría `app.js` como un script clásico y la palabra `import` provocaría un `SyntaxError` [3].

## El experimento: `typeof IVA`

```
typeof IVA desde app.js → undefined
```

`IVA` existe, pero dentro de `utilidades.js`. Desde `app.js` es como si no existiera. Uso `typeof` porque es la única forma de preguntar por una variable inexistente sin provocar un `ReferenceError`. Esto es lo que hace útiles a los módulos: cada fichero esconde sus detalles y enseña solo su «escaparate».

## ¿Y con doble clic?

Si abrís la página con doble clic, la consola muestra un error de CORS y **no se ejecuta nada**: ni el cálculo ni el experimento. La documentación lo avisa expresamente: los módulos cargados desde `file://` chocan con los requisitos de seguridad, y hay que probarlos a través de un servidor [1]. Es el mismo motivo que en el bloque 11 [5]. Por eso, Live Server.

### Fuentes y Documentación Oficial

1. [JavaScript modules (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
2. [export (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)
3. [import (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
4. [&lt;script&gt;: The Script element (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script)
5. [Reason: CORS request not HTTP (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS/Errors/CORSRequestNotHttp)
