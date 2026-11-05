# Solución · Ejercicio 14 · Un marcador aislado con IIFE

[← Volver al enunciado](../../ejercicios/ejercicio_14/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Escribir un trozo de código que se ejecute al cargar la página sin dejar variables sueltas por el programa.

## La forma de una IIFE

```javascript
const marcadorPublico = (() => {
    …
})();
```

Una IIFE es una función que se ejecuta en cuanto se define [1]. Los paréntesis de fuera convierten la función en una expresión; los `()` del final la llaman. No tiene nombre porque no hace falta: nunca se vuelve a llamar.

## Lo que queda dentro y lo que sale

| Desde fuera | Resultado | Por qué |
| --- | --- | --- |
| `typeof puntos` | `undefined` | Es una variable local de la IIFE |
| `typeof sumar` | `undefined` | También es local |
| `marcadorPublico.ver()` | `30` | Es lo único que la IIFE devuelve |

Todo lo declarado dentro vive en el ámbito de la función (lo visteis en el apartado del ámbito de este bloque). La IIFE decide qué sale con su `return`: aquí, un objeto con un único método. Y ese método sigue viendo `puntos` gracias al *closure*, como el monedero del ejercicio 12.

Uso `typeof` porque es la única forma de preguntar por una variable que no existe sin provocar un `ReferenceError`.

## ¿Dónde la veréis?

Antes de que existieran los módulos, la IIFE era **la** forma de aislar el código de cada parte de una web para que sus variables no chocaran con las de otra. Hoy, los módulos del bloque 12 hacen ese trabajo de forma más clara, pero encontraréis IIFE en muchísimo código y en librerías antiguas. Ahora ya sabéis leerlas.

### Fuentes y Documentación Oficial

1. [IIFE (MDN Glossary) (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)
