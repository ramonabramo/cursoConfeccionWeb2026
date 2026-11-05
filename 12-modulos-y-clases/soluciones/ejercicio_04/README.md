# Solución · Ejercicio 04 · Herencia: figuras geométricas

[← Volver al enunciado](../../ejercicios/ejercicio_04/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Construir una familia de clases: una madre, `Figura`, y tres hijas que heredan de ella y calculan su área cada una a su manera.

## `extends`: heredar

```javascript
class Circulo extends Figura {
    …
}
```

`extends` crea una clase hija a partir de otra [1]. Un `Circulo` tiene todo lo de `Figura` (`nombre`, `describir()`…) sin volver a escribirlo, y añade o cambia lo que necesita. Lo tenéis dibujado en la [infografía de la teoría](../../img/herencia.svg).

## `super`: llamar a la madre

```javascript
constructor(radio) {
    super('Círculo');      // primero
    this.radio = radio;    // después
}
```

`super(…)` ejecuta el constructor de la clase madre [2]. Aquí le paso el nombre y `Figura` lo guarda en `this.nombre`. El orden importa: en una clase hija, **no podéis usar `this` hasta haber llamado a `super`** [1]. Si lo intentáis, la consola os detiene con un `ReferenceError` que lo explica con bastante claridad.

## Sobrescribir: misma pregunta, otra respuesta

`Figura` tiene un `area()` que devuelve `0`. Cada hija declara **su propio** `area()`, y ese es el que se usa:

| Clase | `area()` |
| --- | --- |
| `Figura` | `0` |
| `Circulo` | `Math.PI * this.radio ** 2` |
| `Rectangulo` | `this.base * this.altura` |
| `Triangulo` | `(this.base * this.altura) / 2` |

## Polimorfismo: el método que no se repite

```javascript
describir() {
    return `${this.nombre} · ${this.medidas()} · área ${this.area().toFixed(2)}`;
}
```

`describir()` solo está en `Figura`. Pero cuando lo llama un círculo, `this.area()` es el área **del círculo**; cuando lo llama un triángulo, la del triángulo. El mismo código responde de forma distinta según el objeto: eso es el **polimorfismo**. Gracias a él, `renderizar()` no necesita saber qué figura está pintando:

```javascript
li.textContent = figura.describir();
```

Si mañana añadís un `Pentagono`, `renderizar()` no cambia ni una línea.

## `instanceof` también mira a la madre

```javascript
const circulos = figuras.filter((f) => f instanceof Circulo).length;
```

`instanceof` dice si un objeto pertenece a una clase [3]. Y como mira toda la cadena de herencia, un círculo es `instanceof Circulo` **y también** `instanceof Figura`. Probadlo en la consola.

### Fuentes y Documentación Oficial

1. [extends (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends)
2. [super (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super)
3. [instanceof (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof)
