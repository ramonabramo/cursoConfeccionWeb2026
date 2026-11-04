# Solución · Ejercicio 07 · prompt() siempre devuelve texto

[← Volver al enunciado](../../ejercicios/ejercicio_07/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Sumar dos números pedidos con `prompt()` y descubrir por qué, sin convertirlos, la suma sale mal.

## El problema

Si escribís 2 y 2, la primera suma da **22**. No es un error de JavaScript: es exactamente lo que le hemos pedido.

```javascript
const numero1 = prompt('Escribe el primer número:', '2');
console.log(typeof numero1);   // "string"
```

`prompt()` devuelve siempre un texto (o `null` si se cancela) [1]. Da igual que el usuario escriba cifras: lo que llega es `'2'`, con comillas, no `2`. Y ya visteis en el ejercicio 01 qué hace `+` con dos textos: los une.

## La solución

```javascript
const sumaBien = Number(numero1) + Number(numero2);
```

`Number()` convierte un valor en número [2]. Ahora `+` tiene dos números a los lados y suma.

| Entrada | `numero1 + numero2` | `Number(numero1) + Number(numero2)` |
| --- | --- | --- |
| 2 y 2 | `'22'` | `4` |
| 10 y 5 | `'105'` | `15` |
| hola y 5 | `'hola5'` | `NaN` |

## ¿Y ese `NaN`?

Si escribís una palabra, `Number('hola')` no sabe qué número es y devuelve `NaN`, que significa *Not a Number*, «no es un número» [2]. Al sumar cualquier cosa con `NaN`, el resultado sigue siendo `NaN`. Comprobar que el usuario ha escrito un número válido lo aprenderéis en los bloques 02 y 03.

> [!IMPORTANT]
> Esta regla os va a acompañar todo el curso: **lo que escribe el usuario llega como texto**. Pasa con `prompt()` y pasará igual con los `<input>` de los formularios. Si vais a hacer cuentas, convertid primero.

### Fuentes y Documentación Oficial

1. [Window: prompt() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt)
2. [Number (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Number)
