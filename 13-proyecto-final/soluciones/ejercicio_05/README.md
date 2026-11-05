# Solución · Fase 5 · Persistencia con localStorage

[← Volver al enunciado](../../ejercicios/ejercicio_05/) · [← Volver al proyecto](../../README.md)

## Qué pedía esta fase

Que las tareas y el filtro elegido se conserven al recargar la página.

## Un módulo solo para guardar

`almacen.js` es el único fichero que conoce `localStorage`. Ni el modelo ni la vista saben dónde se guardan los datos. Si mañana se guardaran en un servidor, solo cambiaría este módulo.

## `toJSON`: el modelo decide qué se guarda

```javascript
// en Tablero
toJSON() {
    return this.#tareas;
}
```

`JSON.stringify` no puede ver los campos privados, pero si un objeto tiene un método `toJSON`, guarda lo que ese método devuelva [1]. `Tablero` devuelve su array, y cada `Tarea` del array tiene a su vez su `toJSON` con los siete datos que interesan. Por eso esto funciona:

```javascript
localStorage.setItem(CLAVE_TAREAS, JSON.stringify(tablero));
```

Al cargar, `JSON.parse` devuelve objetos **sin métodos**. `new Tablero(guardadas)` los vuelve a pasar por el constructor de `Tarea`, que los valida y los convierte otra vez en tareas de verdad.

## Cargar sin romperse

| Situación | `cargarTareas()` | El tablero empieza con… |
| --- | --- | --- |
| Primera visita | `null` | Las tres tareas de ejemplo |
| Habéis borrado todas las tareas | `[]` | Nada (no vuelven los ejemplos) |
| El texto guardado no es JSON | `[]` | Nada, sin errores |
| Una tarea guardada no es válida | El array | Las válidas; la otra se descarta |

Distinguir `null` de `[]` es lo que permite que los ejemplos aparezcan **solo** la primera vez. Recordad que `localStorage` solo guarda texto [2] y que cualquiera puede modificarlo desde las herramientas de desarrollo: por eso todo lo que se lee de ahí se trata como sospechoso.

## Las preferencias

```javascript
return { ...PREFERENCIAS_INICIALES, ...guardadas };
```

Mezclar las preferencias iniciales con las guardadas tiene una ventaja: si en la fase 8 añadimos una preferencia nueva (`orden`, `tema`), quien ya tenía preferencias guardadas recibe el valor inicial de las nuevas sin perder las suyas. Y si `guardadas` es `null` (primera visita), el operador de propagación simplemente no añade nada.

Aun así, en `app.js` compruebo que el filtro guardado sea uno de los válidos (`FILTROS.includes(…)`). Un valor raro en `localStorage` no debe dejar la aplicación sin tareas a la vista.

## Guardar en un solo sitio

```javascript
function actualizar() {
    guardarTareas(tablero);
    guardarPreferencias({ filtro });
    …
}
```

Cada cambio del usuario termina en `actualizar()`, así que guardar ahí asegura que nunca se olvida ninguno. Es el patrón de persistencia del bloque 09.

> [!NOTE]
> Las fases 5 a 8 comparten la misma clave (`curso-js:b13:tareas`), en el ejercicio y en la solución: las tareas que creéis en una fase seguirán ahí en la siguiente. Si queréis empezar de cero, borrad la clave en Aplicación → Local Storage.

### Fuentes y Documentación Oficial

1. [JSON.stringify() (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
2. [Window: localStorage property (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
