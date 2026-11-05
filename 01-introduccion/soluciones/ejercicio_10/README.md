# Solución · Ejercicio 10 · Una caja a medida

[← Volver al enunciado](../../ejercicios/ejercicio_10/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Cambiar el ancho, el alto y el color de una caja a partir de lo que escribe el usuario.

## `style`: los estilos del elemento

```javascript
caja.style.width = `${ancho}px`;
caja.style.backgroundColor = color;
```

Cada elemento tiene una propiedad `style` con sus estilos **en línea** [1]. Asignar `caja.style.width` es lo mismo que escribir `style="width: …"` en la etiqueta. Si abrís la pestaña **Elementos** de las herramientas de desarrollo, lo veréis aparecer en el HTML.

## Dos reglas que hay que respetar

| Regla | Ejemplo |
| --- | --- |
| Nombre en *camelCase* | `background-color` → `backgroundColor` |
| Valor con unidad | `'200px'`, no `200` |

¿Qué pasa si quitáis el `px`? Nada: la caja no cambia de tamaño y **no aparece ningún error**. El navegador descarta en silencio los valores de CSS que no entiende [1]. Es de esos fallos que no avisan, y por eso conviene conocerlo.

En cambio, el número no hace falta convertirlo con `Number()`: no hago cuentas, solo lo meto en un texto. `prompt()` ya me da un texto, y lo uso tal cual.

## Y el color

`backgroundColor` acepta cualquier valor válido en CSS: un nombre (`tomato`), un código hexadecimal (`#22c55e`)… Si escribís un color que no existe, ocurre lo mismo que con el `px`: se ignora y la caja conserva su color.

En el bloque 06 os enseñaré a cambiar el aspecto con clases de CSS, que es lo recomendable cuando los estilos se repiten. `style` es perfecto para valores que **calcula** el programa, como estas medidas.

### Fuentes y Documentación Oficial

1. [HTMLElement: style property (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style)
