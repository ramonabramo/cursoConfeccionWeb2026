# Solución · Ejercicio 10 · Guardar sin romperse

[← Volver al enunciado](../../ejercicios/ejercicio_10/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Una nota que se guarda sola y que no deja de funcionar aunque el almacén falle.

## Guardar dentro de un `try`

```javascript
function guardar(clave, valor) {
    try {
        localStorage.setItem(clave, JSON.stringify(valor));
        return true;
    } catch (error) {
        return error.name;
    }
}
```

`setItem` lanza un `QuotaExceededError` cuando no queda espacio [1]. Sin el `try`, esa excepción detendría el escuchador y la página se quedaría a medias, sin decir nada. Con él, `guardar` devuelve `true` o el nombre del error, y **quien la llama decide** qué contar al usuario.

## Provocar el fallo a propósito

```javascript
const enorme = 'x'.repeat(6 * 1024 * 1024);
```

Seis millones de caracteres superan el espacio que los navegadores conceden a un origen, que es limitado [2]. Al pulsar el botón, Chrome responde con `QuotaExceededError`. Lo importante es lo que pasa **después**: escribís en la nota y se sigue guardando, porque el intento fallido no ha estropeado nada.

Si algún navegador sí lo guardara, lo borro enseguida con `removeItem`: no quiero dejaros el almacén lleno de equis.

## Un mensaje que ayuda

«✘ No se ha podido guardar. Copiad el texto antes de cerrar.» Es la diferencia entre perder una hora de trabajo y salvarla. Un buen mensaje de error dice qué ha pasado **y qué hacer**.

## La hora del guardado

`new Date().toLocaleTimeString('es-ES')` escribe la hora actual en formato español, como `18:42:05`. En el bloque 10 os explico las fechas y su formato a fondo.

> [!NOTE]
> Recordad que con doble clic todos los ejercicios comparten el almacén de `file://`. Llenarlo afectaría a todos; por eso la prueba usa su propia clave y no la conserva.

### Fuentes y Documentación Oficial

1. [Storage: setItem() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem)
2. [Window: localStorage property (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
