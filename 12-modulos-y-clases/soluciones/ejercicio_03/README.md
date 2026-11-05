# Solución · Ejercicio 03 · Mi primera clase: el carrito

[← Volver al enunciado](../../ejercicios/ejercicio_03/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Crear la clase `Producto` y usarla para construir las líneas de un carrito que se pueden aumentar y reducir.

## La clase: el molde

```javascript
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
        this.unidades = 1;
    }
    total() {
        return this.precio * this.unidades;
    }
}
```

Una clase es una plantilla para crear objetos que tienen los mismos datos y saben hacer las mismas cosas [1]. Dentro hay dos tipos de piezas:

| Pieza | Qué es |
| --- | --- |
| `constructor` | Un método especial que se ejecuta al crear cada objeto y prepara sus datos [2] |
| `sumar()`, `quitar()`, `total()` | Los **métodos**: lo que cada objeto sabe hacer |

Dentro de los métodos, `this` es **el objeto concreto** con el que se trabaja [3]. `teclado.total()` usa el precio del teclado; `raton.total()`, el del ratón.

## `new`: sacar objetos del molde

```javascript
const carrito = CATALOGO.map((p) => new Producto(p.nombre, p.precio));
```

`new` crea un objeto vacío, ejecuta el `constructor` con ese objeto como `this` y lo devuelve [4]. Hago un `map` sobre el catálogo del bloque 05 y obtengo tres **instancias** de `Producto`.

Si olvidáis el `new`, la consola protesta: `TypeError: Class constructor Producto cannot be invoked without 'new'`. Las clases no se pueden llamar como una función normal [4].

## Los objetos se cambian a sí mismos

```javascript
if (boton.dataset.accion === 'sumar') {
    producto.sumar();
} else {
    producto.quitar();
}
```

Comparad con los carritos del bloque 09, donde la lógica estaba fuera del objeto: `linea.cantidad++`, comprobaciones sueltas… Ahora la regla «no bajar de 0» vive **dentro** de la clase, en `quitar()`. Quien la use no puede olvidarla.

## La línea de información

```
typeof Producto → function · carrito[0] instanceof Producto → true · ¿comparten total()? → true
```

- **`typeof Producto` es `function`.** Por dentro, una clase es un tipo especial de función [1]. Su sintaxis es más clara, pero no es magia.
- **`instanceof`** comprueba si un objeto se creó a partir de una clase [5].
- **`carrito[0].total === carrito[1].total` es `true`.** Cada objeto tiene sus propios `nombre`, `precio` y `unidades`, pero el método `total` es **el mismo** para todos: se escribe una vez en la clase y lo comparten [6]. Es justo lo que muestra la [infografía de la teoría](../../img/clase-instancias.svg).

Este ejercicio funciona con doble clic: las clases no necesitan servidor. Solo los módulos lo necesitan.

### Fuentes y Documentación Oficial

1. [Classes (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
2. [constructor (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor)
3. [this (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
4. [new (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)
5. [instanceof (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof)
6. [Using classes (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_classes)
