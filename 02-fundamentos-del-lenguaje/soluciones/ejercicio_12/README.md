# Solución · Ejercicio 12 · Geometría del círculo y la esfera

[← Volver al enunciado](../../ejercicios/ejercicio_12/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Calcular cuatro medidas de un círculo y de una esfera a partir de su radio.

## Con radio 5

| Medida | Resultado |
| --- | --- |
| Longitud | `31.42 cm` |
| Área | `78.54 cm²` |
| Superficie de la esfera | `314.16 cm²` |
| Volumen de la esfera | `523.60 cm³` |

## `Math.PI` y `**`

```javascript
const area = Math.PI * radio ** 2;
const volumen = (4 / 3) * Math.PI * radio ** 3;
```

- `Math.PI` es el número π, con toda la precisión que admite JavaScript [1]. No escribáis `3.14`: perderíais exactitud sin necesidad.
- `**` eleva a una potencia: `radio ** 2` es el radio al cuadrado, y `radio ** 3`, al cubo [2].

## La precedencia, a vuestro favor

En `Math.PI * radio ** 2`, la potencia se calcula **antes** que la multiplicación, como en matemáticas: primero `radio ** 2` y después por π. No hacen falta paréntesis.

En el volumen sí pongo `(4 / 3)` entre paréntesis. No es imprescindible (las multiplicaciones y divisiones se hacen de izquierda a derecha), pero deja la fórmula igual que en el libro de matemáticas, y eso hace que se lea mejor.

## Redondear al mostrar

Calculo con todos los decimales y redondeo **solo al mostrar**, con `toFixed(2)`. Si redondeara antes, los errores se irían acumulando de una fórmula a otra.

### Fuentes y Documentación Oficial

1. [Math.PI (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
2. [Exponentiation (**) (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation)
