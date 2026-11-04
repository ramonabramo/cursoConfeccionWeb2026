# Solución · Ejercicio 03 · Un saludo a prueba de Cancelar

[← Volver al enunciado](../../ejercicios/ejercicio_03/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Arreglar el saludo del bloque 01 para que no muestre `null` ni un nombre vacío, y elegir el mensaje con el operador ternario.

## La solución paso a paso

### 1. Cancelar

```javascript
if (nombre === null) {
    nombre = '';
}
```

Al pulsar Cancelar, `prompt()` devuelve `null` [1]. Lo convierto en un texto vacío para tratar los dos casos, «canceló» y «no escribió nada», de la misma forma. Fijaos en que `nombre` se declara con `let`: lo voy a ir corrigiendo.

### 2. Los espacios

```javascript
nombre = nombre.trim();
```

`trim()` devuelve el texto sin los espacios en blanco del principio y del final [2]. Sin este paso, alguien que escribe tres espacios conseguiría un saludo con un nombre invisible, porque `'   '` **no** es un texto vacío.

Y ojo: esto solo funciona porque antes he quitado el `null`. Si hacéis `null.trim()`, salta un `TypeError`, igual que el `null.textContent` del bloque 01. El orden de los pasos importa.

### 3. Truthy y falsy

```javascript
if (!nombre) {
    nombre = 'invitado';
}
```

Aquí está lo nuevo. Una condición no tiene por qué ser una comparación. Podéis poner cualquier valor, y JavaScript lo interpreta como verdadero o falso. Los valores que cuentan como falso se llaman *falsy*: `false`, `0`, `''`, `null`, `undefined` y `NaN`, entre otros [3]. Todos los demás son *truthy* [4].

Como `''` es falsy, `!''` es `true`, y la línea se lee como suena: «si no hay nombre».

### 4. El operador ternario

```javascript
const saludo = esPrimeraVisita
    ? `Te damos la bienvenida, ${nombre}.`
    : `¡Qué alegría verte de nuevo, ${nombre}!`;
```

El ternario es un atajo de `if…else` que **devuelve un valor** [5]: si la condición es verdadera, el primero; si no, el segundo. Es perfecto para elegir entre dos valores. Si tenéis que ejecutar varias instrucciones en cada caso, volved al `if…else` de siempre: el ternario se vuelve ilegible en cuanto le pedís demasiado.

## Los cuatro casos

| Lo que hace el usuario | `prompt()` devuelve | Tras limpiar | Saludo |
| --- | --- | --- | --- |
| Escribe «Lucía» | `'Lucía'` | `'Lucía'` | …, Lucía |
| Pulsa Cancelar | `null` | `''` → invitado | …, invitado |
| Deja la caja vacía | `''` | `''` → invitado | …, invitado |
| Escribe solo espacios | `'   '` | `''` → invitado | …, invitado |

### Fuentes y Documentación Oficial

1. [Window: prompt() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt)
2. [String.prototype.trim() (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/trim)
3. [Falsy (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
4. [Truthy (MDN Web Docs)](https://developer.mozilla.org/es/docs/Glossary/Truthy)
5. [Operador condicional (ternario) (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Conditional_operator)
