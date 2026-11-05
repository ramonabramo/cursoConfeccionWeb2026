# Solución · Fase 7 · Teclado y búsqueda

[← Volver al enunciado](../../ejercicios/ejercicio_07/) · [← Volver al proyecto](../../README.md)

## Qué pedía esta fase

Un buscador que filtra mientras se escribe y atajos de teclado para las acciones más comunes.

## El buscador, con espera

```javascript
clearTimeout(idEspera);
idEspera = setTimeout(() => {
    texto = buscar.value;
    actualizar();
}, 300);
```

Es la espera del bloque 10: cada tecla cancela la búsqueda anterior [1] y programa una nueva dentro de 300 ms [2]. Solo se repinta cuando el usuario hace una pausa. La búsqueda en sí la hace el modelo: `tablero.filtrar(filtro, texto)` aplica el filtro y el texto a la vez.

## Atajos globales

```javascript
document.addEventListener('keydown', (e) => { … });
```

Escucho `keydown` en `document` porque el evento sube desde el elemento que tiene el foco [3]: así llega desde cualquier parte de la página. `e.key` dice qué tecla se ha pulsado, ya traducida al carácter (`'n'`, `'/'`, `'?'`) o a su nombre (`'Escape'`, `'Enter'`) [4].

| Tecla | Acción |
| --- | --- |
| `n` | Enfocar el título del formulario |
| `/` | Enfocar el buscador |
| `?` | Mostrar u ocultar la ayuda |
| `Escape` | Borrar la búsqueda (si estáis en el buscador) y cerrar la ayuda |

## Que los atajos no estorben

Un atajo mal hecho es peor que no tenerlo. Tres reglas:

1. **Con Ctrl, Cmd o Alt, no hago nada.** `Ctrl+F` o `Ctrl+R` son del navegador.
2. **Si se está escribiendo, una «n» es una «n».** Si el foco está en un `input`, `textarea` o `select`, salgo antes de mirar los atajos. `Escape` va antes de esta comprobación porque sí tiene sentido dentro del buscador.
3. **`preventDefault` al cambiar el foco.** Sin él, la «n» que enfoca el título se escribiría **dentro** del título, porque el foco cambia antes de que el navegador procese la tecla.

## La ayuda

`?` abre un panel con la lista de atajos. Un atajo que nadie conoce no sirve de nada; por eso la página también dice, en un sitio visible, que existe esa ayuda.

### Fuentes y Documentación Oficial

1. [Window: clearTimeout() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Window/clearTimeout)
2. [Window: setTimeout() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout)
3. [Element: keydown event (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event)
4. [KeyboardEvent: key property (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key)
