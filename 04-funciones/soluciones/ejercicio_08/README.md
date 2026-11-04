# Solución · Ejercicio 08 · Planificador de estudio

[← Volver al enunciado](../../ejercicios/ejercicio_08/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Construir un programa completo repartiendo el trabajo en tres funciones pequeñas, cada una con una sola tarea, y combinarlas.

## Tres funciones, tres tareas

| Función | Tarea | Devuelve |
| --- | --- | --- |
| `estaEntre(valor, min, max)` | Comprobar | `true` o `false` |
| `pedirNumero(mensaje, min, max, porDefecto)` | Preguntar hasta que la respuesta valga | Un número o `null` |
| `formatearTiempo(horas)` | Dar formato | Un texto como `"2 h 30 min"` |

Con esto, el programa principal queda cortísimo y se lee casi como una frase: «pide las horas, pide los días, si alguien ha cancelado avisa y si no calcula y muestra».

## La solución paso a paso

### 1. `estaEntre`: una función que devuelve un booleano

```javascript
function estaEntre(valor, minimo, maximo) {
    return !Number.isNaN(valor) && valor >= minimo && valor <= maximo;
}
```

`Number.isNaN()` descarta lo que no es un número [2]. Y fijaos: no hace falta un `if` que devuelva `true` o `false`, porque la propia condición **ya es** un booleano, así que la devuelvo directamente. Las funciones que responden a una pregunta de sí o no suelen empezar por `es`, `esta` o `tiene`.

### 2. `pedirNumero`: un bucle dentro de una función

```javascript
while (true) {
    const respuesta = prompt(…);
    if (respuesta === null) {
        return null;
    }
    const numero = Number(respuesta);
    if (estaEntre(numero, minimo, maximo)) {
        return numero;
    }
    aviso = '⚠ Valor no válido. ';
}
```

`while (true)` parece un bucle infinito, y lo sería… si no fuera porque `return` termina la función, y con ella el bucle [1]. Hay dos salidas: cancelar o escribir un valor válido. Mientras no pase ninguna de las dos, la función vuelve a preguntar, ahora con un aviso.

Fijaos en que `pedirNumero` **usa** `estaEntre`. Las funciones se apoyan unas en otras.

### 3. `formatearTiempo`: de decimales a horas y minutos

```javascript
const horas = Math.floor(horasDecimales);                  // 1.75 → 1
const minutos = Math.round((horasDecimales - horas) * 60); // 0.75 × 60 → 45
```

`Math.floor()` redondea hacia abajo y `Math.round()`, al entero más cercano [3]. Y con tres `return` anticipados, como en el ejercicio 02, evito textos como `0 h 45 min` o `2 h 0 min`.

### 4. La reutilización

`pedirNumero` se llama dos veces con datos distintos, y `formatearTiempo`, tres. Sin funciones, ese bucle de validación estaría escrito dos veces y la conversión a horas y minutos, tres. Y si encontrarais un fallo, tendríais que corregirlo en cinco sitios.

## Funciones puras

`estaEntre` y `formatearTiempo` tienen dos propiedades muy valiosas:

- Con los mismos argumentos, devuelven **siempre** el mismo resultado.
- No tocan nada de fuera: ni el DOM, ni variables globales, ni la consola.

A las funciones así se las llama **puras**. Son las más fáciles de probar y de reutilizar, porque no dependen de nada más. `pedirNumero` no es pura, ya que interactúa con el usuario, y no pasa nada: lo importante es que la parte impura esté localizada en un sitio concreto.

## Con 10 horas y 4 días

| Dato | Valor |
| --- | --- |
| Horas a la semana | 10 h |
| Días | 4 |
| Cada día | 2 h 30 min |
| Bloques de 25 min | 6 |

### Fuentes y Documentación Oficial

1. [return (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/return)
2. [Number.isNaN() (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN)
3. [Math (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math)
