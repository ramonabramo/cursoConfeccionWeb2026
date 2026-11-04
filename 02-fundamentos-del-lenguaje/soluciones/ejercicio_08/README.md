# Solución · Ejercicio 08 · Dividir la cuenta del restaurante

[← Volver al enunciado](../../ejercicios/ejercicio_08/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Calcular cuánto paga cada persona en una cena de grupo, con propina y redondeos, y sortear quién invita a los cafés.

## Los cálculos con 87.40 €, 4 personas y 10 % de propina

| Concepto | Cálculo | Resultado |
| --- | --- | --- |
| Propina | 87.40 × 10 / 100 | 8.74 € |
| Total con propina | 87.40 + 8.74 | 96.14 € |
| Cada uno (exacto) | 96.14 / 4 | 24.035 € |
| Cada uno (céntimo ↑) | `Math.ceil(2403.5) / 100` | 24.04 € |
| Cada uno (euro ↑) | `Math.ceil(24.035)` | 25.00 € |
| Bote | 25 × 4 − 96.14 | 3.86 € |

## Las herramientas de `Math`

`Math` es un objeto que viene con JavaScript y agrupa constantes y funciones matemáticas [1]. Estas son las que usamos:

| Método | Qué hace | Ejemplo |
| --- | --- | --- |
| `Math.round(x)` | Redondea al entero más cercano | `Math.round(2.5)` → `3` |
| `Math.floor(x)` | Redondea hacia abajo | `Math.floor(2.9)` → `2` |
| `Math.ceil(x)` | Redondea hacia arriba | `Math.ceil(2.1)` → `3` |
| `Math.max(a, b, …)` | El mayor | `Math.max(4, 9, 2)` → `9` |
| `Math.min(a, b, …)` | El menor | `Math.min(4, 9, 2)` → `2` |
| `Math.random()` | Número aleatorio desde 0 (incluido) hasta 1 (sin incluir) | `0.7341…` |

## Redondear al céntimo

`Math.ceil()` redondea a **enteros**. ¿Cómo lo uso para redondear a dos decimales? Con un truco:

```javascript
Math.ceil(porPersona * 100) / 100
```

1. Multiplico por 100: `24.035` → `2403.5` (paso de euros a céntimos).
2. Redondeo hacia arriba: `2403.5` → `2404`.
3. Divido entre 100: `2404` → `24.04` (vuelvo a euros).

¿Por qué hacia arriba y no al más cercano? Porque si redondeo hacia abajo, al camarero le faltarían unos céntimos. Hacia arriba, como mucho sobra algo. Ojo a la diferencia con `toFixed(2)`: aquel solo **muestra** dos decimales; este **calcula** un número nuevo.

## El sorteo

```javascript
Math.floor(Math.random() * personas) + 1
```

`Math.random()` devuelve un decimal entre 0 y 1, sin llegar nunca a 1 [2]. Para convertirlo en «una persona entre 1 y 4»:

| Paso | Operación | Rango posible |
| --- | --- | --- |
| 1 | `Math.random()` | de 0 a 0.999… |
| 2 | `× personas` (4) | de 0 a 3.999… |
| 3 | `Math.floor(…)` | 0, 1, 2 o 3 |
| 4 | `+ 1` | 1, 2, 3 o 4 |

Guardaos esta fórmula: la vais a usar cada vez que necesitéis un dado, una carta al azar o un color aleatorio.

### Fuentes y Documentación Oficial

1. [Math (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math)
2. [Math.random() (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
