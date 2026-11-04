# Solución · Ejercicio 06 · Laboratorio de conversiones

[← Volver al enunciado](../../ejercicios/ejercicio_06/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Pasar el mismo texto por `Number()`, `parseInt()` y `parseFloat()`, comparar los resultados y ver la conversión contraria con `String()`.

## Los resultados con cada texto

| Texto | `Number()` | `parseInt(…, 10)` | `parseFloat()` |
| --- | --- | --- | --- |
| `42` | `42` | `42` | `42` |
| `3.75` | `3.75` | `3` | `3.75` |
| `42.5px` | `NaN` | `42` | `42.5` |
| `px42` | `NaN` | `NaN` | `NaN` |
| (vacío) | `0` | `NaN` | `NaN` |

## Cómo piensa cada función

**`Number()`** es estricta: o el texto entero es un número, o devuelve `NaN` [1]. Con una excepción curiosa: el texto vacío lo convierte en `0` [1]. Tenedlo en cuenta, porque un campo que el usuario deja en blanco puede colarse como un cero.

**`parseInt()`** lee el texto de izquierda a derecha y se queda con los dígitos que encuentra **hasta que aparece algo que no es un dígito**. Si el primer carácter ya no se puede convertir, devuelve `NaN` [2]. Por eso `'42.5px'` da `42` (el punto la detiene) y `'px42'` da `NaN` (empieza por una letra). Y siempre devuelve un entero.

El segundo argumento, `10`, es la base de numeración: le estoy diciendo que lea en decimal. MDN recomienda indicarlo siempre [2].

**`parseFloat()`** funciona igual que `parseInt()`, pero acepta el punto decimal [3].

## La conversión contraria: `String()`

```javascript
String(42) + 1   // "421"
```

`String()` convierte un valor en texto. Y como ya sabéis, texto `+` lo que sea, se une. Lo he puesto aquí para que veáis el problema del bloque 01 desde el otro lado.

## La pregunta del final

Para leer `'42.5px'`, la herramienta es `parseFloat()`: es la única que conserva el `42.5`. Un caso real: leer el tamaño de un elemento que CSS os da en píxeles.

¿Y para los datos que escribe el usuario en un formulario? Mi recomendación es `Number()`. Precisamente porque es estricta: si alguien escribe `12abc`, prefiero un `NaN` que me avise del problema a un `12` que se lo trague sin decir nada.

### Fuentes y Documentación Oficial

1. [Number (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Number)
2. [parseInt() (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
3. [parseFloat() (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/parseFloat)
