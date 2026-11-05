# Solución · Ejercicio 03 · Preferencias de tema y tamaño de letra

[← Volver al enunciado](../../ejercicios/ejercicio_03/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Guardar el tema y el tamaño de letra elegidos y aplicarlos automáticamente en cada visita.

## Las preferencias viven en el `body`

```javascript
document.body.dataset.tema = tema;       // <body data-tema="oscuro">
document.body.dataset.tamano = tamano;   // <body data-tamano="grande">
```

Con `dataset` escribo atributos `data-*` en el `body` [1]. Y el `style.css` ya tiene las reglas:

```css
body[data-tema="oscuro"] {
    background-color: #0f172a;
    color: #e2e8f0;
}
```

Es la regla del bloque 06 aplicada a toda la página: **JavaScript decide el estado, CSS decide el aspecto**. Si mañana queréis un tercer tema, solo tocáis el CSS.

## Leer con valor por defecto

```javascript
const temaGuardado = localStorage.getItem(CLAVE_TEMA) ?? 'claro';
```

La primera vez no hay nada guardado y `getItem` devuelve `null` [2]. El operador `??` devuelve lo de la derecha **solo** si lo de la izquierda es `null` o `undefined`. Es muy parecido al `||` que conocéis, con una diferencia: `||` también saltaría con un texto vacío `''`, y `??` no. Para leer del almacén, `??` es el más preciso.

## Guardar al cambiar

```javascript
selectTema.addEventListener('change', () => {
    localStorage.setItem(CLAVE_TEMA, selectTema.value);
    aplicar(selectTema.value, selectTamano.value);
});
```

El evento `change` de un `select` salta al elegir otra opción. Guardo el valor [3] y aplico.

## `aplicar` también mueve los controles

```javascript
selectTema.value = tema;
```

Al cargar, los `select` muestran la opción que tienen marcada en el HTML. Si el usuario había elegido «Oscuro», el desplegable debe decir «Oscuro», no «Claro». Por eso `aplicar` también coloca los controles: la página y los controles cuentan siempre la misma historia.

## Dos claves o un objeto

Aquí uso una clave por preferencia, porque cada una es un simple texto. Si tuvierais diez preferencias, sería más cómodo guardarlas juntas en un objeto. Para eso hace falta JSON, y es justo lo que veréis en el ejercicio 05.

### Fuentes y Documentación Oficial

1. [HTMLElement: dataset property (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)
2. [Storage: getItem() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem)
3. [Storage: setItem() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem)
