# Solución · Ejercicio 07 · Depuración: cuatro fallos escondidos

[← Volver al enunciado](../../ejercicios/ejercicio_07/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Encontrar y corregir cuatro fallos que no dan ningún error en la consola, usando las herramientas de depuración del navegador.

## Por qué `console.log` no basta

Hasta ahora, para saber qué valía una variable, escribíais un `console.log`. Funciona, pero hay que adivinar dónde ponerlo, recargar, borrarlo después… Las herramientas de desarrollo permiten **detener el programa** en una línea y mirar todo lo que hay en ese momento [1]. Es como pausar un vídeo para ver qué pasa en cada fotograma.

## Las herramientas

| Herramienta | Qué hace |
| --- | --- |
| **Punto de interrupción** (*breakpoint*) | Pulsando en el número de una línea, la ejecución se detiene ahí [1] |
| **Pasar a la siguiente** (F10) | Ejecuta la línea actual y se detiene en la siguiente |
| **Entrar** (F11) | Si la línea llama a una función, entra en ella |
| **Ámbito** (*Scope*) | Muestra todas las variables con su valor actual [1] |
| **Inspecciones** (*Watch*) | Expresiones que queréis vigilar, como `suma` o `notas[i]` |
| `debugger;` | Escrito en el código, detiene la ejecución si las herramientas están abiertas [2] |

## Los cuatro fallos

Con `7, 4.5, 9, 5, 3`, el programa original da `Media: NaN · Aprobados: 2 de 5 · Máxima: NaN`. Esto es lo que se ve con un punto de interrupción en cada función:

### Fallo 1 · `leerNotas`: textos en lugar de números

En el panel **Ámbito**, `notas` vale `['7', ' 4.5', ' 9', ' 5', ' 3']`: **textos**, con comillas y espacios. `split` siempre devuelve textos (bloque 02).

```javascript
return texto.split(',').map((parte) => Number(parte));
```

`Number(' 4.5')` ignora los espacios y devuelve `4.5`.

### Fallo 2 · `calcularMedia`: una vuelta de más

Vigilando `i` en el bucle, se ve que llega a `5`. Pero `notas` tiene 5 elementos, del `0` al `4`: `notas[5]` es `undefined`, y sumar `undefined` da `NaN`. Es el clásico error de «uno más» del bloque 03.

```javascript
for (let i = 0; i < notas.length; i++) {
```

Con el fallo 1 sin corregir, además, `suma` se convertía en un texto (`'07 4.5 9 5 3undefined'`) porque `+` con textos concatena. Un fallo tapaba a otro: por eso conviene corregirlos de uno en uno y volver a probar.

### Fallo 3 · `contarAprobados`: el 5 no contaba

```javascript
return notas.filter((nota) => nota >= 5).length;
```

Este no rompe nada: simplemente da `2` en lugar de `3`. Son los fallos más traicioneros, porque el resultado **parece** razonable. Solo se ven si sabéis qué debería salir. Por eso el enunciado os daba el resultado esperado.

### Fallo 4 · `notaMaxima`: un array no es una lista de números

`Math.max(notas)` recibe **un** argumento, el array entero, y no sabe compararlo. Hay que separar sus elementos con el operador de propagación del bloque 05:

```javascript
return Math.max(...notas);
```

## El método

1. **Saber qué debería salir.** Sin un resultado esperado no hay forma de saber si algo falla.
2. **Detener el programa antes del fallo** y avanzar paso a paso.
3. **Mirar los valores, no suponerlos.** Los cuatro fallos se ven a simple vista en el panel Ámbito.
4. **Corregir uno, probar, y seguir.**

Y no os olvidéis de quitar los `debugger` al terminar: si alguien abre las herramientas de desarrollo con vuestra página, se le detendrá.

### Fuentes y Documentación Oficial

1. [JavaScript debugging and error handling (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Debugging_JavaScript)
2. [debugger (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger)
