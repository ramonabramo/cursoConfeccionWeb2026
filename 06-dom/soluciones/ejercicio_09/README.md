# Solución · Ejercicio 09 · Una tabla de clasificación en cebra

[← Volver al enunciado](../../ejercicios/ejercicio_09/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Numerar una tabla de clasificación, colorear sus filas de forma alterna y destacar el podio, todo desde JavaScript.

## Cuándo hace falta el `for` clásico

```javascript
for (let i = 0; i < filas.length; i++) {
    const fila = filas[i];
    fila.children[0].textContent = i + 1;
```

`querySelectorAll` me da una `NodeList` con las siete filas [1]. Aquí no basta con recorrerlas: necesito saber **en qué posición** está cada una, para numerarla, alternar el color y reconocer el podio. Eso es justo lo que da el `for` clásico: el índice `i`. Con `forEach((fila, i) => …)` también lo tendría; los dos sirven.

## `classList.toggle` con condición

```javascript
fila.classList.toggle('par', i % 2 === 1);
fila.classList.toggle('podio', i < 3);
```

Con un segundo argumento, `toggle` **añade** la clase si la condición es verdadera y la **quita** si es falsa [2]. Una línea en lugar de un `if…else`. Y como no depende de cómo estaba antes, el resultado es siempre el correcto.

`i % 2 === 1` es verdadero en las posiciones 1, 3 y 5, es decir, en la 2.ª, 4.ª y 6.ª fila. El resto de dividir entre 2 es la forma clásica de distinguir pares e impares.

## Las celdas de cada fila

`fila.children` es la colección de celdas de esa fila: `children[0]` es la posición, `children[1]` el equipo y `children[2]` los puntos. Es el movimiento por el árbol que visteis en el apartado 3 del bloque.

> [!NOTE]
> Para el resumen quito la medalla con `slice(3)`: el emoji 🥇 ocupa **dos** posiciones en un texto de JavaScript, más el espacio. Los emojis son así de traicioneros.

### Fuentes y Documentación Oficial

1. [Document: querySelectorAll() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)
2. [Element: classList property (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
