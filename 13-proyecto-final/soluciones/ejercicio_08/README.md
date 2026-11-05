# Solución · Fase 8 · Pulido final: orden, progreso y tema

[← Volver al enunciado](../../ejercicios/ejercicio_08/) · [← Volver al proyecto](../../README.md)

## Qué pedía esta fase

Los últimos detalles: ordenar, una barra de progreso, borrar las completadas con confirmación y un tema oscuro que se recuerda. Con esta fase, el proyecto está terminado.

## Ordenar con un método `static`

```javascript
static ordenar(tareas, criterio) {
    const copia = [...tareas];
    …
}

Tablero.ordenar(tablero.filtrar(filtro, texto), orden);
```

`ordenar` no necesita los datos de un tablero concreto: recibe una lista y devuelve otra. Por eso es `static`: pertenece a la clase y se llama con su nombre [1].

Empieza haciendo una **copia**, porque `sort` ordena el array original y lo modifica [2]. Para las fechas uso `localeCompare`, que compara textos y devuelve un número negativo, cero o positivo, justo lo que necesita `sort` [3]. Las tareas sin fecha se tratan como `'9999-12-31'` para que queden al final.

## La barra de progreso

```javascript
barra.style.width = `${porcentaje}%`;
```

`pintarProgreso` (en la vista) calcula el porcentaje de completadas y lo convierte en el ancho de la barra del bloque 06. Junto a ella, las tareas pendientes de cada prioridad, que el getter `estadisticas` ya calculaba desde la fase 1.

## Borrar con confirmación

```javascript
if (confirm(`¿Borrar ${completadas} tareas completadas? No se puede deshacer.`)) {
```

`confirm` muestra un cuadro con Aceptar y Cancelar y devuelve `true` o `false` [4]. Lo uso solo para la acción que **no se puede deshacer**. Pedir confirmación para todo acaba haciendo que nadie lea los avisos.

## El tema oscuro

```javascript
function aplicarTema(tema) {
    document.body.dataset.tema = oscuro ? 'oscuro' : 'claro';
    btnTema.setAttribute('aria-pressed', oscuro);
    …
}
```

El CSS ya tenía reglas para `body[data-tema="oscuro"]` desde el bloque 09. El botón funciona como un interruptor, así que lleva `aria-pressed` [5] y cambia su texto. La preferencia se guarda con las demás en `actualizar()`.

## El proyecto completo

Mirad el resultado con los requisitos del enunciado:

| Requisito | Dónde está |
| --- | --- |
| Interfaz generada y actualizada con el DOM | `vista.js` y `actualizar()` (fase 2) |
| Eventos de ratón y de teclado | Fases 3 y 7 |
| Formulario con validación | Fase 4 |
| Datos en `localStorage` | `almacen.js` (fase 5) |
| Datos de una API con `fetch` | `api.js` (fase 6) |
| Código organizado en módulos | Cinco módulos, cada uno con su papel |

Si habéis llegado hasta aquí, tenéis entre manos una aplicación con la estructura de un proyecto profesional. Ahora os toca a vosotros: el enunciado del bloque os propone cómo hacer **la vuestra**.

### Fuentes y Documentación Oficial

1. [static (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static)
2. [Array.prototype.sort() (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
3. [String.prototype.localeCompare() (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare)
4. [Window: confirm() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm)
5. [ARIA: aria-pressed attribute (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed)
