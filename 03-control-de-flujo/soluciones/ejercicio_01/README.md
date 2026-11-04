# Solución · Ejercicio 01 · Calificador de notas

[← Volver al enunciado](../../ejercicios/ejercicio_01/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Convertir una nota numérica en su calificación, descartando antes las notas que no tienen sentido.

## La solución paso a paso

### 1. Primero, lo que no vale

```javascript
if (Number.isNaN(nota) || nota < 0 || nota > 10) {
    mensaje = 'La nota debe ser un número entre 0 y 10.';
}
```

Esta es una costumbre que os quiero inculcar desde ya: **antes de calcular nada, descartad los datos imposibles**. Si alguien escribe «hola», `Number()` devuelve `NaN`, y `Number.isNaN()` lo detecta [1]. Recordad del bloque 02 que `nota === NaN` no sirve: `NaN` no es igual a nada.

El operador `||` hace que basta con que **una** de las tres condiciones se cumpla para entrar [2].

### 2. La escalera

```javascript
} else if (nota < 5) {
    mensaje = `Un ${nota} es un Suspenso.`;
} else if (nota < 6) {
    mensaje = `Un ${nota} es un Aprobado.`;
} …
} else {
    mensaje = `Un ${nota} es un Sobresaliente.`;
}
```

`if…else` ejecuta un bloque si la condición es verdadera y otro si no lo es; encadenando `else if` se comprueban varias condiciones seguidas [3]. Y aquí está la clave: **solo se ejecuta el primer bloque cuya condición se cumple**. Los demás ni se miran.

Por eso, en el escalón de `Notable` me basta con `nota < 9`. ¿Hace falta comprobar también que `nota >= 7`? No. Si la nota fuese menor que 7, habría entrado en un escalón anterior y no habría llegado hasta aquí. Tenéis el recorrido dibujado en la [infografía de la teoría](../../img/if-else.svg).

### 3. El `else` final

El último caso no necesita condición. Si la nota es válida y no es menor que 9, solo puede ser un sobresaliente. El `else` recoge «todo lo demás».

## Probad estos casos

| Entrada | Resultado | Por qué |
| --- | --- | --- |
| 7.5 | Notable | Falla `< 5`, `< 6` y `< 7`; cumple `< 9` |
| 5 | Aprobado | `5 < 5` es `false`; `5 < 6` es `true` |
| 9 | Sobresaliente | Falla todos los escalones; va al `else` |
| 10 | Sobresaliente | Igual que el 9 |
| 12, -1 o «hola» | Mensaje de error | Lo para la primera condición |

## Error típico

Escribir la escalera al revés, empezando por `if (nota < 9)`. Un 3 cumpliría esa condición y saldría «Notable». En una escalera de `else if`, **el orden importa**.

### Fuentes y Documentación Oficial

1. [Number.isNaN() (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN)
2. [Operador lógico OR (||) (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Logical_OR)
3. [if...else (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/if...else)
