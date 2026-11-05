# Solución · Ejercicio 12 · Carrusel que se pausa

[← Volver al enunciado](../../ejercicios/ejercicio_12/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Un carrusel de testimonios que avanza solo y se detiene mientras el usuario lo mira.

## Arrancar y pausar

```javascript
function arrancar() {
    if (idIntervalo !== null) return;
    idIntervalo = setInterval(() => mostrar(actual + 1), PAUSA_MS);
}
function pausar() {
    clearInterval(idIntervalo);
    idIntervalo = null;
}
```

`setInterval` avanza un testimonio cada tres segundos [1]; `clearInterval` lo detiene [2]. Pongo `idIntervalo` a `null` al pausar para que `arrancar` sepa que puede crear uno nuevo, y `arrancar` comprueba que no haya otro en marcha. Es la regla de «nunca dos a la vez» del apartado 2.

## Pausa al pasar el ratón

```javascript
carrusel.addEventListener('mouseenter', pausar);
carrusel.addEventListener('mouseleave', arrancar);
```

Uso `mouseenter` y `mouseleave`, no `mouseover` y `mouseout`: el carrusel tiene botones y textos dentro, y con los segundos la pausa se activaría y desactivaría al pasar de uno a otro [3] [4].

## Y con el teclado

Quien navega con Tab no pasa el ratón por encima. `focusin` y `focusout` avisan cuando el foco entra o sale de cualquier elemento del carrusel, porque, a diferencia de `focus` y `blur`, burbujean. Así, al tabular hasta las flechas, el carrusel también se detiene.

## Dar la vuelta

`(i + TESTIMONIOS.length) % TESTIMONIOS.length` convierte −1 en el último y 4 en el primero, como en la galería del bloque 07. La misma fórmula sirve para el avance automático, las flechas y los puntos.

## Los puntos

Se crean desde el array, uno por testimonio, y llevan `aria-current="true"` el que corresponde al actual. El CSS lo pinta de azul a partir de ese mismo atributo, de modo que el aspecto y lo que oye un lector de pantalla siempre coinciden.

### Fuentes y Documentación Oficial

1. [Window: setInterval() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Window/setInterval)
2. [Window: clearInterval() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Window/clearInterval)
3. [Element: mouseenter event (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseenter_event)
4. [Element: mouseleave event (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseleave_event)
