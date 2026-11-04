# Solución · Ejercicio 02 · Control de acceso al concierto

[← Volver al enunciado](../../ejercicios/ejercicio_02/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Traducir a JavaScript las normas de la puerta de un concierto combinando condiciones con `&&`, `||` y `!`.

## Una entrada nueva: `confirm()`

```javascript
const tieneEntrada = confirm('¿Tienes entrada?');
```

`confirm()` muestra un cuadro con los botones Aceptar y Cancelar, y devuelve `true` si se pulsa Aceptar y `false` si se pulsa Cancelar [1]. A diferencia de `prompt()`, aquí no hay que convertir nada: ya recibís un booleano.

## La condición, pieza a pieza

Las normas dicen: «hace falta entrada. Además, hay que tener 18 años, o al menos 16 si vienes con una persona adulta». Os lo traduzco por partes:

| Norma | Código |
| --- | --- |
| tiene 16 o más **y** va acompañado | `edad >= 16 && vaAcompanado` |
| es mayor **o** lo anterior | `esMayor \|\| (edad >= 16 && vaAcompanado)` |
| tiene entrada **y** lo anterior | `tieneEntrada && (esMayor \|\| (…))` |

```javascript
const puedeEntrar = tieneEntrada && (esMayor || (edad >= 16 && vaAcompanado));
```

- `&&` da `true` solo si los dos lados son verdaderos [2].
- `||` da `true` si al menos uno de los dos lo es [3].

**Los paréntesis no son decoración.** Sin ellos, `&&` se evalúa antes que `||`, igual que en matemáticas la multiplicación va antes que la suma, y la condición diría otra cosa. Mi consejo: cuando mezcléis `&&` y `||`, poned siempre paréntesis, aunque creáis que no hacen falta. Quien lea vuestro código os lo agradecerá.

## El `!`

```javascript
if (!tieneEntrada) {
```

`!` invierte un valor: convierte `true` en `false` y al revés [4]. La línea se lee tal cual: «si no tiene entrada». Por eso compruebo ese caso el primero. Si no hay entrada, me da igual la edad.

## Probad estos casos

| Edad | Entrada | Acompañado | Resultado |
| --- | --- | --- | --- |
| 17 | Sí | Sí | Adelante |
| 17 | Sí | No | No cumple la edad |
| 15 | Sí | Sí | No cumple la edad |
| 25 | No | — | Pasa por taquilla |
| 25 | Sí | No | Adelante |

### Fuentes y Documentación Oficial

1. [Window: confirm() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm)
2. [Operador lógico AND (&&) (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Logical_AND)
3. [Operador lógico OR (||) (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Logical_OR)
4. [Logical NOT (!) (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT)
