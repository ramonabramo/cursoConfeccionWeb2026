# Solución · Fase 6 · Importar tareas de una API

[← Volver al enunciado](../../ejercicios/ejercicio_06/) · [← Volver al proyecto](../../README.md)

## Qué pedía esta fase

Traer tareas de JSONPlaceholder: elegir un usuario e importar las suyas, sin duplicados y con los estados de carga y error del bloque 11.

## `api.js` traduce

```javascript
return tareas.map((t) => ({
    titulo: recortar(t.title),
    completada: t.completed,
    prioridad: 'media',
    fecha: '',
    origen: 'api',
    idApi: t.id,
}));
```

La API tiene su propio formato (`title`, `completed`, `userId`…) [1]. `api.js` lo traduce al de la aplicación, de forma que el resto del código no sabe nada de JSONPlaceholder. Si mañana cambiarais de API, solo cambiaría este módulo.

Dos decisiones de la traducción:

- **`recortar`**: algunos títulos de la API pasan de 60 caracteres, el máximo que acepta `Tarea`. Sin recortarlos, el modelo los rechazaría.
- **`idApi`**: el id que tenía la tarea en la API. No es el id del tablero (ese lo pone `Tablero`), pero sirve para reconocerla si se vuelve a importar.

La URL `/users/{id}/todos` es una de las rutas anidadas que documenta JSONPlaceholder: las tareas de un usuario concreto [1].

## Sin duplicados

```javascript
const repetida = this.#tareas.some((t) => t.idApi !== null && t.idApi === datos.idApi);
```

Si importáis dos veces el mismo usuario, la segunda vez `importar` no añade nada y el mensaje dice `0 tareas importadas (20 ya estaban en el tablero)`. Las tareas propias tienen `idApi: null`, así que nunca se confunden con las de la API.

## Los estados

| Momento | `#estadoApi` | Controles |
| --- | --- | --- |
| Al arrancar | ⏳ Conectando con la API… | Select y botón desactivados |
| Usuarios cargados | Elige un usuario e importa sus tareas. | Activados |
| Importando | ⏳ Importando tareas… | Botón desactivado (`finally` lo reactiva) |
| Error | ✘ … y botón **Reintentar** | |

`fetch` no rechaza la promesa con un `404` [2], y por eso `pedirJSON` comprueba `respuesta.ok`, como en el bloque 11. Así, cualquier fallo acaba en el `catch`.

## Reintentar lo que falló

```javascript
let ultimaAccion = null;
…
ultimaAccion = cargarUsuarios;     // o importarTareas
…
btnReintentarApi.addEventListener('click', () => ultimaAccion());
```

Puede fallar la carga de usuarios o la importación. En lugar de dos botones, guardo **la función** que hay que repetir en una variable. Las funciones son valores, como visteis con los callbacks del bloque 04.

> [!NOTE]
> He verificado el formato de `/users` y `/users/{id}/todos` en la guía y el repositorio oficiales de JSONPlaceholder y he probado el código con una copia de esos datos. No he podido comprobar el acceso en directo desde mi entorno. Si el día de clase la API no responde, veréis el mensaje de error y el botón Reintentar.

### Fuentes y Documentación Oficial

1. [JSONPlaceholder — Guide](https://jsonplaceholder.typicode.com/guide/)
2. [Window: fetch() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch)
