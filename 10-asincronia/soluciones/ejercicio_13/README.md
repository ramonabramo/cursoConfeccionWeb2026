# Solución · Ejercicio 13 · La máquina de escribir

[← Volver al enunciado](../../ejercicios/ejercicio_13/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Un texto que aparece letra a letra y que se puede interrumpir.

## Cada letra programa la siguiente

```javascript
function escribirLetra(frase, i) {
    texto.textContent = frase.slice(0, i);
    if (i < frase.length) {
        idEspera = setTimeout(() => escribirLetra(frase, i + 1), VELOCIDAD_MS);
    }
}
```

En lugar de un `setInterval`, aquí cada llamada pinta los `i` primeros caracteres y programa, con `setTimeout`, la llamada de la letra siguiente [1]. Cuando ya no quedan letras, simplemente no programa ninguna más: la animación termina sola, sin tener que pararla.

Se parece a la recursividad del bloque 04, pero sin llenar la pila: la función **no se llama a sí misma**, sino que deja una tarea encargada y termina. Cuando se cumple el tiempo, el bucle de eventos la ejecuta con la pila vacía.

## Interrumpir

```javascript
clearTimeout(idEspera);
```

En cada momento solo hay **un** `setTimeout` pendiente: el de la siguiente letra. Por eso basta con guardar su identificador y cancelarlo [2] para que la cadena se rompa. Si `empezar` no lo cancelara, pulsar «Frase 2» a mitad de la 1 dejaría dos cadenas escribiendo a la vez en el mismo párrafo, y las letras se mezclarían.

## `setTimeout` encadenado o `setInterval`

| | `setTimeout` encadenado | `setInterval` |
| --- | --- | --- |
| Termina | Solo, cuando no programa más | Hay que pararlo |
| Cada paso puede durar distinto | Sí (podríais pausar más en los puntos) | No |
| Se cancela con | `clearTimeout` | `clearInterval` |

Probad a hacer que, después de un punto, la espera sea de 400 ms en lugar de 60: con `setTimeout` encadenado es cambiar una línea.

### Fuentes y Documentación Oficial

1. [Window: setTimeout() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout)
2. [Window: clearTimeout() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Window/clearTimeout)
