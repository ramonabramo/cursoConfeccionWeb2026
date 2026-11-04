# Solución · Ejercicio 07 · Desestructuración y spread

[← Volver al enunciado](../../ejercicios/ejercicio_07/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Sacar datos de objetos y arrays con desestructuración, y construir arrays y objetos nuevos con la sintaxis *spread*.

## Desestructuración: sacar

La desestructuración permite extraer valores de arrays o propiedades de objetos y guardarlos en variables, todo en una línea [1].

### De un objeto: por nombre

```javascript
const { nombre, ciudad, edad: edadUsuario, pais = 'España' } = usuario;
```

Es lo mismo que escribir:

```javascript
const nombre = usuario.nombre;
const ciudad = usuario.ciudad;
const edadUsuario = usuario.edad;
const pais = usuario.pais === undefined ? 'España' : usuario.pais;
```

| Sintaxis | Qué hace |
| --- | --- |
| `nombre` | Saca la propiedad `nombre` a una constante `nombre` |
| `edad: edadUsuario` | Saca `edad`, pero la llama `edadUsuario` |
| `pais = 'España'` | Si no existe o vale `undefined`, usa el valor por defecto [1] |

Fijaos en que el **orden no importa**: con objetos, manda el nombre de la propiedad.

### De un array: por posición

```javascript
const [oro, plata, bronce, ...resto] = participantes;
// oro = 'Ana', plata = 'Luis', bronce = 'Marta', resto = ['Pablo', 'Hugo']
```

Con arrays, manda la **posición**. Y `...resto` recoge todo lo que sobra en un array nuevo. Tiene que ir siempre al final.

### Un truco: intercambiar variables

```javascript
[a, b] = [b, a];
```

A la derecha se crea un array con los valores intercambiados, y a la izquierda se desestructura sobre las mismas variables. Sin variable auxiliar.

### En los parámetros de una función

```javascript
function presentar({ nombre, ciudad }) { … }
presentar(usuario);
```

La función recibe un objeto y se queda directamente con las propiedades que le interesan. Lo veréis muchísimo en código moderno.

## Spread: meter

Los tres puntos `...` delante de un array o un objeto lo **despliegan** en sus elementos [2].

```javascript
const cesta = [...frutas, ...verduras, 'pan'];
// ['manzana', 'pera', 'tomate', 'lechuga', 'pan']

Math.max(...numeros);   // Math.max(14, 3, 27, 8) → 27
```

`Math.max` espera los números sueltos, no un array. El *spread* los saca del array.

### Combinar objetos

```javascript
const config = { ...configPorDefecto, ...configUsuario };
// { tema: 'oscuro', idioma: 'es', tamanoLetra: 18 }
```

Se copian las propiedades del primero y luego las del segundo. Si una clave se repite, **gana la última**. Es el patrón perfecto para «valores por defecto que el usuario puede cambiar».

> [!NOTE]
> Los mismos tres puntos hacen cosas opuestas según dónde estén. **A la izquierda del `=`** (o en los parámetros), recogen: son el *resto*. **A la derecha**, despliegan: son el *spread*.

### Fuentes y Documentación Oficial

1. [Destructuring (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring)
2. [Sintaxis Spread (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
