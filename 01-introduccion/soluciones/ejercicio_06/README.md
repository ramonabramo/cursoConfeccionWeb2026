# Solución · Ejercicio 06 · Mi primera entrada con prompt()

[← Volver al enunciado](../../ejercicios/ejercicio_06/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Pedir el nombre al usuario y usarlo para saludarle en la página y en la pestaña del navegador.

## La solución paso a paso

### 1. Entrada: pedir el dato

```javascript
const nombre = prompt('¿Cómo te llamas?', 'invitado');
```

`prompt()` muestra un cuadro con una pregunta y una caja de texto. Recibe dos argumentos: el mensaje y el valor que aparece escrito por defecto [1]. Lo que devuelve lo guardo en `nombre`.

Fijaos en que el programa se **para** en esta línea hasta que el usuario responde, igual que pasaba con `alert()`.

### 2. Procesamiento: construir el saludo

```javascript
const saludo = `¡Hola, ${nombre}! Bienvenido al curso`;
```

Las comillas invertidas (`` ` ``, la tecla a la derecha de la `P` en el teclado español) crean una **plantilla de texto**. Dentro, todo lo que pongáis entre `${` y `}` se sustituye por su valor [2]. Es mucho más cómodo que ir uniendo trozos con `+`:

```javascript
'¡Hola, ' + nombre + '! Bienvenido al curso'   // funciona, pero se lee peor
`¡Hola, ${nombre}! Bienvenido al curso`         // lo mismo, más claro
```

### 3. Salidas: la página y la pestaña

```javascript
salida.textContent = saludo;
document.title = `Hola, ${nombre}`;
```

La primera línea ya la conocéis. La segunda es nueva: `document.title` es el título del documento, el que veis en la pestaña del navegador, y se puede leer y cambiar desde JavaScript [3].

Uso `textContent` y no `innerHTML` porque el nombre lo escribe el usuario. Recordad el ejercicio 05.

## Los tres casos que os pedí probar

| Qué hace el usuario | Qué devuelve `prompt()` | Qué aparece |
| --- | --- | --- |
| Escribe «Lucía» y acepta | `'Lucía'` | ¡Hola, Lucía! |
| Acepta sin tocar nada | `'invitado'` | ¡Hola, invitado! |
| Pulsa **Cancelar** | `null` | ¡Hola, null! |

Ese último caso es feo, lo sé. `prompt()` devuelve un texto o `null` [1]: cuando el usuario cancela, no hay texto. Para tratarlo necesitamos tomar una decisión («si es `null`, entonces…»), y eso es justo lo que aprenderéis en el bloque 03 con `if`. De momento me basta con que sepáis por qué ocurre.

### Fuentes y Documentación Oficial

1. [Window: prompt() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt)
2. [Plantillas literales (plantillas de cadenas) (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals)
3. [Document: title property (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Document/title)
