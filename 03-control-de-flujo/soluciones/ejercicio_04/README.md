# Solución · Ejercicio 04 · ¿Qué día es?

[← Volver al enunciado](../../ejercicios/ejercicio_04/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Traducir un número del 1 al 7 en un día de la semana con `switch` y clasificarlo como laborable o fin de semana.

## Cuándo usar `switch`

Cuando comparáis **una misma variable** con muchos **valores concretos**, una escalera de `else if` se hace larga y repetitiva:

```javascript
if (numero === 1) { … } else if (numero === 2) { … } else if (numero === 3) { … }
```

`switch` lo expresa de forma más limpia: evalúa una expresión una vez y salta al `case` cuyo valor coincide [1].

## La solución paso a paso

### 1. Un `case` por valor

```javascript
switch (numero) {
    case 1:
        nombreDia = 'lunes';
        break;
    …
    default:
        nombreDia = '';
}
```

- La comparación se hace con **igualdad estricta** (`===`) [1]. Por eso convierto con `Number()` al leer: el texto `'6'` no encajaría con `case 6`.
- `default` se ejecuta cuando ningún `case` coincide [1]. Es el `else` del `switch`.
- `break` hace que el programa salga del `switch` [2].

### 2. Lo que pasa sin `break`

Este es el error más típico con `switch`. Si se omite el `break`, la ejecución **continúa en la instrucción siguiente** del `switch`, aunque pertenezca a otro `case` [1]. Si quitáis el `break` del `case 6`, con un 6 se asigna `'sábado'`… y acto seguido el `case 7` lo machaca con `'domingo'`.

### 3. Aprovechar la caída: agrupar casos

Lo que en el punto anterior era un error, aquí es una herramienta:

```javascript
switch (numero) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        tipoDia = 'Es laborable';
        break;
    case 6:
    case 7:
        tipoDia = 'Es fin de semana';
        break;
    …
}
```

Los `case` 1 a 4 no tienen instrucciones ni `break`, así que caen hasta el `case 5` y comparten su bloque. Es la forma de decir «del 1 al 5, lo mismo».

## ¿`switch` o `if`?

| Situación | Mejor opción |
| --- | --- |
| Una variable comparada con valores concretos (1, 2, 3… o 'rojo', 'verde'…) | `switch` |
| Rangos (`nota < 5`), varias variables o condiciones con `&&` y `\|\|` | `if…else` |

### Fuentes y Documentación Oficial

1. [switch (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/switch)
2. [break (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/break)
