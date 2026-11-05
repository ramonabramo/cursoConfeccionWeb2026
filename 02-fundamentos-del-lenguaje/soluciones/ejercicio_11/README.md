# Solución · Ejercicio 11 · Intercambiar dos vasos

[← Volver al enunciado](../../ejercicios/ejercicio_11/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Cambiar de sitio el valor de dos variables.

## El intento que falla

```javascript
a = b;   // a: 'té'  (el café se ha perdido)
b = a;   // b: 'té'
```

Al hacer `a = b`, lo que había en `a` se sobrescribe. Cuando después hacemos `b = a`, el café ya no está en ninguna parte: los dos vasos acaban con té. Las asignaciones se ejecutan **una detrás de otra**, y cada una ve el resultado de la anterior.

## La variable auxiliar

```javascript
const auxiliar = a;
a = b;
b = auxiliar;
```

Antes de machacar `a`, guardo su valor en un tercer sitio. Es exactamente lo que haríais con dos vasos llenos: necesitáis un tercero vacío.

## `let` o `const`

- `a` y `b` se declaran con `let`, porque **cambian** de valor durante el programa.
- `auxiliar` se declara con `const`: se le asigna una vez y ya no cambia.

Si declaráis `a` con `const`, la línea `a = b` lanza un `TypeError: Assignment to constant variable`. Es la regla del bloque: `const` por defecto, `let` solo cuando el valor tiene que cambiar.

En el bloque 05 veréis la versión en una línea, con desestructuración: `[a, b] = [b, a]`. Pero el truco del tercer vaso conviene entenderlo, porque aparece en muchos algoritmos, como los de ordenación.

### Fuentes y Documentación Oficial

