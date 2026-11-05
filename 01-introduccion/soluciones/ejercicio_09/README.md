# Solución · Ejercicio 09 · Rellenar una tabla con prompt()

[← Volver al enunciado](../../ejercicios/ejercicio_09/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Hacer tres preguntas con `prompt()` y colocar cada respuesta en una celda distinta de una tabla.

## Una constante por celda

```javascript
const celdaNombre = document.querySelector('#celdaNombre');
```

Cada celda tiene su `id`, así que la busco con `#` y la guardo en una constante con un nombre que dice qué es. Es la primera parte de la plantilla de trabajo: **primero localizo dónde voy a escribir**.

## Tres entradas seguidas

```javascript
const nombre = prompt('¿Cómo te llamas?', 'Ana');
const edad = prompt('¿Cuántos años tienes?', '31');
```

Cada `prompt()` detiene el programa hasta que el usuario responde [1]. Por eso las preguntas aparecen **una detrás de otra**, en el orden en que están escritas. El segundo argumento es el valor por defecto: aparece ya escrito y basta con pulsar Aceptar.

Fijaos en que no convierto la edad a número. Aquí solo la **muestro**, no hago cuentas con ella, así que el texto me sirve tal cual.

## Y si pulso Cancelar

`prompt()` devuelve `null` cuando se cancela [1], y ese `null` se nota de dos maneras distintas. La celda se queda **vacía**: al asignar `null` a `textContent`, el navegador simplemente borra el contenido. La frase final, en cambio, dice «Ana tiene null años…», porque la plantilla de texto convierte `null` en la palabra `"null"`. Lo he comprobado en el navegador: probadlo vosotros. En el bloque 03 aprenderéis a detectarlo con un `if` y a mostrar algo más amable.

## Lo que os llevo a practicar

El mismo patrón que vais a usar todo el curso: **localizar** los elementos, **leer** los datos, **escribir** los resultados. Aquí, tres veces seguidas.

### Fuentes y Documentación Oficial

1. [Window: prompt() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt)
