# Solución · Ejercicio 06 · Adivina el número

[← Volver al enunciado](../../ejercicios/ejercicio_06/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Programar el juego de adivinar un número con pistas de «mayor» y «menor», usando un bucle `while` y las instrucciones `break` y `continue`.

## ¿Por qué `while` y no `for`?

En la tabla de multiplicar sabíamos que eran diez vueltas. Aquí **no tenemos ni idea**: puede acertar a la primera o tardar quince intentos. `while` repite su cuerpo mientras la condición sea verdadera, y la comprueba antes de cada vuelta [1].

```javascript
while (!acertado) {
```

Se lee «mientras no haya acertado». La variable `acertado` empieza en `false`, y solo cuando el usuario adivina el número la pongo a `true`. En la siguiente comprobación, la condición deja de cumplirse y el bucle termina.

> [!WARNING]
> Algo dentro del bucle **tiene** que poder hacer falsa la condición. Si no, tenéis un bucle infinito: la página se queda colgada. MDN lo resume así: asegúraos de que la condición acabe siendo `false` [2]. Aquí hay dos salidas: acertar o cancelar.

## `break`: salir ya

```javascript
if (respuesta === null) {
    break;
}
```

`break` termina el bucle en el acto y el programa sigue en la primera línea **después** del bucle [3]. Es la salida de emergencia: el usuario se rinde y no tiene sentido seguir preguntando.

## `continue`: saltar esta vuelta

```javascript
if (Number.isNaN(numero) || numero < 1 || numero > 100) {
    pista = 'Eso no es un número del 1 al 100.';
    continue;
}
```

`continue` no sale del bucle: abandona **la vuelta actual** y, en un `while`, vuelve a comprobar la condición [4]. Lo uso para no contar como intento una respuesta que no vale. Las líneas que hay debajo, `intentos++` incluida, se saltan.

| Instrucción | ¿Qué hace? | Analogía |
| --- | --- | --- |
| `break` | Sale del bucle | Abandonar la carrera |
| `continue` | Salta a la siguiente vuelta | Saltarse una vuelta del circuito y seguir corriendo |

## La estrategia ganadora

Si siempre probáis el número central del rango que os queda (50, luego 25 o 75…), cada intento descarta la mitad de los números. Con 100 posibilidades no necesitáis nunca más de 7 intentos. Esta idea se llama **búsqueda binaria** y la vais a volver a encontrar.

### Fuentes y Documentación Oficial

1. [while (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/while)
2. [Bucles e iteración (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Loops_and_iteration)
3. [break (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/break)
4. [continue (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/continue)
