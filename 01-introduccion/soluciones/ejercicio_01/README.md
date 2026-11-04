# Solución · Ejercicio 01 · ¡Hola, consola!

[← Volver al enunciado](../../ejercicios/ejercicio_01/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Comprobar que `app.js` está bien enlazado al HTML y usar los dos canales de salida que más vais a ver en el curso: la **consola** y la **página**.

## La solución paso a paso

### 1. Un mensaje en la consola

```javascript
console.log('¡Hola desde app.js!');
```

`console.log()` escribe en la consola de las herramientas de desarrollo [1]. El usuario normal no la abre nunca, así que este canal es para vosotros: sirve para comprobar que el código se ejecuta y para ver qué valor tiene una variable en un momento dado.

Si al abrir la consola **no** aparece el mensaje, el problema no está en esta línea. Está en el enlace: revisad que el `<script src="app.js">` está escrito bien y que el fichero se llama exactamente `app.js`.

### 2. Números frente a textos

```javascript
console.log(10 + 5);     // 15
console.log('10' + '5'); // "105"
```

Aquí está la trampa del ejercicio. El símbolo `+` hace dos cosas distintas según lo que tenga a los lados:

| Expresión | Tipo de los datos | Qué hace `+` | Resultado |
| --- | --- | --- | --- |
| `10 + 5` | dos números | suma | `15` |
| `'10' + '5'` | dos textos | une (concatena) | `'105'` |

Con las comillas, `'10'` deja de ser un número y pasa a ser un texto que casualmente contiene dígitos. Guardad esta idea, porque en el ejercicio 07 os vais a encontrar con ella de frente.

### 3. Apuntar al párrafo

```javascript
const salida = document.querySelector('#salida');
```

`document.querySelector()` busca en la página el primer elemento que cumple el selector CSS que le pasáis y lo devuelve [2]. Lo guardo en una constante para poder usarlo después. El `#` significa lo mismo que en CSS: «busca por `id`».

### 4. Escribir en la página

```javascript
salida.textContent = 'JavaScript está funcionando ✔';
```

La propiedad `textContent` representa el texto que hay dentro de un elemento [3]. Si le asigno un valor, sustituye lo que hubiera. El texto «Esperando a JavaScript…» desaparece y aparece el nuevo.

## Qué tenéis que observar

- En la consola salen tres líneas: el saludo, `15` y `105`.
- En la página, el párrafo azul cambia de texto.
- Fijaos en el orden del código: primero localizo el elemento y después escribo en él. Al revés no funcionaría.

## Errores típicos

- Escribir `console.log` con mayúscula (`Console.log`). JavaScript distingue mayúsculas y minúsculas.
- Olvidar el `#` en el selector: `querySelector('salida')` busca una **etiqueta** `<salida>`, que no existe.

### Fuentes y Documentación Oficial

1. [console: log() static method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/console/log_static)
2. [Document: querySelector() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
3. [Node: textContent property (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)
