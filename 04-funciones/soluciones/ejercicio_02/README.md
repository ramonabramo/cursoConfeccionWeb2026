# Solución · Ejercicio 02 · Precio de la entrada de cine

[← Volver al enunciado](../../ejercicios/ejercicio_02/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Calcular el precio de una entrada con una función que recibe dos datos, usando `return` anticipados, y probarla con varios casos.

## La solución paso a paso

### 1. Varios parámetros

```javascript
function precioEntrada(edad, dia) {
```

Una función puede recibir tantos parámetros como necesite, separados por comas. Al llamarla, los argumentos se asignan **por orden**: el primero a `edad`, el segundo a `dia`. Si los cambiáis de orden, `precioEntrada('lunes', 30)`, la función recibirá un día como edad y el resultado no tendrá sentido.

### 2. `return` anticipado

```javascript
if (edad < 4) {
    return 0;
}
if (edad >= 65) {
    return 4;
}
…
return 8;
```

Cuando se ejecuta un `return`, la función **se detiene** en ese punto [1]. Lo aprovecho para salir en cuanto conozco la respuesta. Cada `if` es una excepción: si se cumple, devuelvo el precio y se acabó. Si llego al final, es que no se ha cumplido ninguna y devuelvo el precio normal.

Comparadlo con la versión con `else if`:

```javascript
let precio;
if (edad < 4) {
    precio = 0;
} else if (edad >= 65) {
    precio = 4;
} else if …
return precio;
```

Funcionan igual, pero la primera se lee mejor: no hace falta una variable auxiliar y cada caso se entiende por separado. A esta técnica se la conoce como *early return*, o cláusula de guarda, y es muy habitual.

### 3. El orden de las comprobaciones

Primero van los datos no válidos, comprobados con `Number.isNaN()` igual que en el bloque 03 [2]. Y después, ¿por qué la edad va antes que el miércoles? Porque un jubilado que va el miércoles paga 4 € y no 5 €: las rebajas por edad ganan. El orden de los `return` es el orden de prioridad de las normas.

### 4. Devolver `null`

Si los datos no son válidos, devuelvo `null`: «no hay precio». Quien llama a la función decide qué hacer con eso. Aquí, `formatearPrecio` lo convierte en un mensaje.

### 5. Separar el cálculo de la presentación

Fijaos en que `precioEntrada` devuelve un **número** y `formatearPrecio` lo convierte en **texto**. Dos funciones, dos responsabilidades. Así, si mañana el precio hay que mostrarlo de otra forma, solo cambio `formatearPrecio`, y el cálculo ni se toca.

### 6. Una trampa de la entrada: `Number(null)` es `0`

```javascript
const textoEdad = prompt('¿Qué edad tienes?', '30');
const edad = textoEdad === null || textoEdad.trim() === '' ? NaN : Number(textoEdad);
```

Si escribís `Number(prompt(…))` como hasta ahora y el usuario pulsa Cancelar, `prompt` devuelve `null`… y `Number(null)` vale `0`, no `NaN` [4]. Lo mismo pasa con un texto vacío: `Number('')` es `0`. En este ejercicio sería grave, porque una edad 0 significa entrada gratis. Por eso leo primero el texto y, si es `null` o está vacío, lo convierto en `NaN` a propósito, para que la validación de la función lo rechace.

### 7. El día

```javascript
const dia = (prompt('¿Qué día vas al cine?', 'miércoles') || '').trim();
```

Si el usuario cancela, `prompt` devuelve `null`, y `null.trim()` daría error. `prompt(…) || ''` aprovecha que `null` es *falsy*: `||` devuelve el primer operando si es *truthy* y, si no, el segundo [3]. Así, si `prompt` devuelve `null`, se usa `''`. Es la versión corta de lo que hicisteis con un `if` en el bloque 03.

## Las pruebas

| Edad | Día | Precio | Regla que se aplica |
| --- | --- | --- | --- |
| 3 | lunes | Gratis | Menor de 4 |
| 70 | miércoles | 4.00 € | 65 o más (gana al miércoles) |
| 30 | miércoles | 5.00 € | Día del espectador |
| 30 | sábado | 8.00 € | Precio normal |
| -5 | lunes | Datos no válidos | Edad negativa |

### Fuentes y Documentación Oficial

1. [return (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/return)
2. [Number.isNaN() (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN)
3. [Operador lógico OR (||) (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Logical_OR)
4. [Number — Number coercion (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
