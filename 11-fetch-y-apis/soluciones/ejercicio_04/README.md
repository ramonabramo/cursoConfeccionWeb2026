# Solución · Ejercicio 04 · Buscador de países

[← Volver al enunciado](../../ejercicios/ejercicio_04/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Un buscador de países que carga los datos una vez y filtra mientras el usuario escribe.

## Cargar una vez, filtrar muchas

```javascript
let paises = [];
…
paises = await pedirJSON('paises.json');
```

Los datos se piden **una sola vez**, al abrir la página, y se guardan en el estado. A partir de ahí, cada búsqueda filtra en memoria con `filter`, como en el bloque 05. No tiene sentido volver a pedir el fichero con cada letra: los datos no han cambiado.

Mientras llegan, los controles están desactivados. Así nadie puede buscar en un array todavía vacío y pensar que no hay resultados.

> [!NOTE]
> Con 22 países, filtrar en memoria es lo ideal. Con un millón de registros, no os los descargaríais todos: le pediríais al servidor que buscara por vosotros, con una URL como `/paises?buscar=esp`. Lo veréis en los ejercicios 06 a 08, donde la API filtra por usuario.

## Esperar a que el usuario deje de escribir

```javascript
buscar.addEventListener('input', () => {
    clearTimeout(idEspera);
    idEspera = setTimeout(filtrar, 300);
});
```

Es la técnica que os conté en la teoría del bloque 10. Cada letra **cancela** la espera anterior [1] y programa una nueva de 300 ms [2]. Solo cuando pasan 300 ms sin teclear se ejecuta `filtrar`. Si escribís «portugal» deprisa, se filtra una vez, no ocho.

Aquí filtrar es tan rápido que no se notaría la diferencia. Pero cuando cada búsqueda sea una petición a un servidor, esta técnica es la diferencia entre una petición y ocho.

## Buscar sin tildes

```javascript
texto.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
```

Nadie escribe «Japón» con tilde en un buscador. Esta línea convierte cualquier texto a minúsculas y le quita las tildes:

- `normalize('NFD')` separa cada letra acentuada en la letra y su tilde (`ó` → `o` + `´`).
- `replace(/[\u0300-\u036f]/g, '')` borra todas las tildes sueltas. Es una expresión regular; no hace falta que la memoricéis, solo que sepáis para qué sirve.

Lo aplico a los **dos** lados de la comparación: a lo que escribe el usuario y a los datos.

## Dos filtros a la vez

```javascript
return coincideTexto && coincideContinente;
```

Un país se muestra si cumple los dos criterios. Con `'todos'`, `coincideContinente` es siempre `true`, igual que con la categoría `'todas'` del catálogo del bloque 07.

### Fuentes y Documentación Oficial

1. [Window: clearTimeout() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Window/clearTimeout)
2. [Window: setTimeout() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout)
