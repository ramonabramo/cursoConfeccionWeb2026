# Solución · Ejercicio 01 · Ficha de personaje: let y const

[← Volver al enunciado](../../ejercicios/ejercicio_01/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Repartir los datos de un personaje entre `const` y `let`, cambiar los que deben cambiar y comprobar qué pasa si intentáis cambiar una constante.

## La decisión: ¿`const` o `let`?

La pregunta que os tenéis que hacer con cada dato es muy simple: **¿va a cambiar mientras se ejecuta el programa?**

| Dato | ¿Cambia? | Declaración |
| --- | --- | --- |
| `nombre` | No | `const` |
| `clase` | No | `const` |
| `nivel` | Sí, al subir de nivel | `let` |
| `vida` | Sí, al recibir daño | `let` |

`let` declara una variable que se puede reasignar [1]. `const` declara una constante: el identificador no se puede reasignar [2].

Mi recomendación, y la que vais a ver en todo el curso: **empezad siempre con `const`**. Si más adelante descubrís que ese valor tiene que cambiar, lo pasáis a `let`. Así, cuando alguien lea vuestro código y vea un `let`, sabrá que ese valor va a cambiar en algún momento.

## La solución paso a paso

### 1. Declarar

```javascript
const nombre = 'Aria';
const clase = 'Maga';

let nivel = 1;
let vida = 100;
```

### 2. Mostrar, cambiar y volver a mostrar

```javascript
fichaInicial.textContent = `${nombre} · ${clase} · Nivel ${nivel} · Vida ${vida}`;

nivel = 2;
vida = 65;

fichaFinal.textContent = `${nombre} · ${clase} · Nivel ${nivel} · Vida ${vida}`;
```

Fijaos en un detalle: la plantilla de texto es **idéntica** en las dos líneas, y sin embargo el resultado es distinto. ¿Por qué? Porque cada vez que JavaScript llega a esa línea lee el valor que tienen las variables **en ese momento**. Esa es la gracia de una variable.

Y fijaos también en que al reasignar no se vuelve a escribir `let`. `let` se escribe una sola vez, al declarar. Si escribís `let nivel = 2;` otra vez, JavaScript os dirá que esa variable ya está declarada.

### 3. El error a propósito

```javascript
nombre = 'Otra';
```

En Chrome y Edge, la consola muestra:

```
Uncaught TypeError: Assignment to constant variable.
```

Firefox lo dice con otras palabras (`invalid assignment to const 'nombre'`), pero significa lo mismo: estáis intentando reasignar una constante [3]. Y recordad lo que visteis en el bloque 01: tras el error, el script se detiene. Por eso hay que comentar la línea.

## Qué tenéis que observar

- Los dos párrafos muestran el mismo nombre y la misma clase, pero distinto nivel y distinta vida.
- Con la línea `nombre = 'Otra'` activa, la consola muestra un `TypeError`.

### Fuentes y Documentación Oficial

1. [let (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/let)
2. [const (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/const)
3. [TypeError: invalid assignment to const "x" (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Invalid_const_assignment)
