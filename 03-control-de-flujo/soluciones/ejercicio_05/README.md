# Solución · Ejercicio 05 · Tabla de multiplicar con for

[← Volver al enunciado](../../ejercicios/ejercicio_05/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Generar la tabla de multiplicar de un número con un bucle `for` y calcular la suma de todos sus resultados.

## La solución paso a paso

### 1. La cabecera del `for`

```javascript
for (let i = 1; i <= 10; i++) {
```

Un `for` tiene tres partes separadas por punto y coma [1]:

| Parte | Código | Cuándo se ejecuta |
| --- | --- | --- |
| Inicialización | `let i = 1` | Una vez, al empezar |
| Condición | `i <= 10` | Antes de cada vuelta. Si es `false`, el bucle termina |
| Actualización | `i++` | Al final de cada vuelta |

Lo tenéis dibujado, vuelta a vuelta, en la [infografía de la teoría](../../img/anatomia-for.svg). Usamos `for` cuando **sabemos cuántas vueltas** hay que dar: aquí, diez.

### 2. El cuerpo: usar el contador

```javascript
const resultado = numero * i;
tabla += `${numero} × ${i} = ${resultado}\n`;
suma += resultado;
```

Dentro del bucle, `i` vale 1 en la primera vuelta, 2 en la segunda… hasta 10. Ese contador no solo sirve para contar vueltas: lo uso como dato.

Fijaos también en que `resultado` se declara con `const` **dentro** del bucle. En cada vuelta se crea una constante nueva, así que no hay problema por reasignarla.

### 3. Dos acumuladores

```javascript
let tabla = '';
let suma = 0;
```

Los dos se declaran **antes** del bucle y se muestran **después**. Es el patrón del acumulador que visteis en el bloque 02, ahora dentro de un bucle:

- El de texto empieza en `''` y en cada vuelta se le añade una línea.
- El numérico empieza en `0` y en cada vuelta se le suma el resultado.

> [!WARNING]
> Si declaráis el acumulador **dentro** del bucle, se reinicia en cada vuelta y al final solo tendréis la última línea. Error clásico.

### 4. Comprobar antes de repetir

Todo el bucle va dentro del `else`. Si el número no es válido, no tiene sentido generar diez líneas de `NaN`.

## Qué tenéis que observar

- Con el 7 aparecen diez líneas, de `7 × 1 = 7` a `7 × 10 = 70`.
- La suma es 385 (7 × 55).

### Fuentes y Documentación Oficial

1. [for (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for)
2. [Bucles e iteración (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Loops_and_iteration)
