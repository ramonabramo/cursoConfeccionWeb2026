# Solución · Fase 1 · El modelo: Tarea y Tablero

[← Volver al enunciado](../../ejercicios/ejercicio_01/) · [← Volver al proyecto](../../README.md)

## Qué pedía esta fase

Escribir el corazón de la aplicación antes de pintar nada: las clases `Tarea` y `Tablero`, en `modelo.js`, comprobadas con una tabla de pruebas automáticas.

## Por qué empezar por el modelo

El modelo es lo único que no depende de la página. Si las reglas (qué es una tarea válida, cuándo está vencida, qué id le toca) funcionan bien, todo lo que construyáis encima será más fácil de escribir y de arreglar. Por eso esta fase no tiene botones: tiene **pruebas**.

## Las pruebas automáticas

```javascript
['Un título de 2 letras lanza un Error', () => lanzaError(() => new Tarea({ id: 9, titulo: 'ab' }))],
```

Cada prueba es una descripción y una función que devuelve `true` si el modelo se comporta como debe. `ejecutarPruebas()` las ejecuta todas dentro de un `try`, así que una prueba que rompe no impide ver las demás. Es una versión casera de lo que hacen las herramientas profesionales de pruebas, y tiene la misma ventaja: cuando cambiéis el modelo en fases posteriores, podéis volver aquí y comprobar que no habéis roto nada.

## `Tarea`: un constructor que no se fía

```javascript
constructor({ id, titulo, prioridad = 'media', fecha = '', completada = false, origen = 'propia', idApi = null }) {
```

El constructor recibe **un objeto** y lo desestructura con valores por defecto (bloques 04 y 05). Así, `new Tarea({ id: 1, titulo: 'Estudiar' })` funciona sin indicar todo lo demás, y el orden de los datos da igual.

Después valida cada dato y lanza un `Error` si algo no cuadra [1]. Una tarea **no puede existir** en un estado inválido: si el constructor termina, la tarea es correcta. Para la fecha uso `Date.parse`, que devuelve `NaN` cuando el texto no es una fecha válida [2].

## `vencida`: un getter calculado

```javascript
get vencida() {
    return !this.completada && this.fecha !== '' && this.fecha < fechaDeHoy();
}
```

`vencida` no se guarda: se **calcula** cada vez que se lee [3], así que nunca se queda desfasada. Y la comparación funciona con `<` porque las fechas en formato `AAAA-MM-DD` ordenadas como texto quedan también ordenadas como fechas: `'2025-09-15' < '2026-01-01'`.

`fechaDeHoy()` construye esa fecha con la hora **local**. Con `toISOString()` saldría en hora UTC, y entre la medianoche y la una o las dos de la madrugada (según la época del año) os daría el día anterior.

## `Tablero`: la colección, bajo llave

```javascript
#tareas = [];
#siguienteId = 1;
```

Las tareas son privadas [4]. Desde fuera solo se puede usar lo que el tablero ofrece: `agregar`, `eliminar`, `alternar` y dos getters. `get tareas` devuelve una **copia** del array: quien la reciba puede recorrerla, pero no añadir ni quitar tareas sin pasar por las reglas.

El constructor recibe datos y crea una `Tarea` por cada uno **dentro de un `try`**: si alguno no es válido, se descarta y se avisa en la consola. Lo vais a agradecer en la fase 5, cuando los datos lleguen de `localStorage` y podrían estar estropeados.

### Fuentes y Documentación Oficial

1. [Error (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
2. [Date.parse() (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse)
3. [get (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)
4. [Private elements (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_elements)
