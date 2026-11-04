# Solución · Ejercicio 07 · Fábrica de contadores

[← Volver al enunciado](../../ejercicios/ejercicio_07/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Escribir funciones que fabrican y devuelven otras funciones, y comprobar que cada función fabricada recuerda sus propios datos.

## Una función que devuelve una función

```javascript
function crearContador(inicio = 0, paso = 1) {
    let valor = inicio;
    return () => {
        valor += paso;
        return valor;
    };
}
```

`crearContador` no cuenta nada. Lo que hace es **fabricar** un contador y devolverlo. Sus parámetros tienen valores por defecto, como en el ejercicio 03 [2]: sin argumentos, empieza en 0 y sube de 1 en 1. Como visteis en el ejercicio 06, las funciones son valores, así que se pueden devolver con `return` igual que un número.

```javascript
const visitas = crearContador();
```

Después de esta línea, `visitas` es una función. Cada vez que la llamáis, `visitas()`, suma 1 y devuelve la cuenta.

## El *closure*: la función recuerda

Aquí viene lo interesante. Cuando `crearContador` termina, su variable local `valor` debería desaparecer, como cualquier variable local. Pero la función flecha que hemos devuelto **sigue usándola**. Y JavaScript la conserva mientras alguien la necesite.

Una función junto con las variables del lugar donde se creó forma lo que se llama un *closure* [1]. Dicho de forma más llana: la función se lleva consigo una mochila con las variables que tenía a mano al nacer.

## Cada contador, su propia mochila

| Llamada | Resultado |
| --- | --- |
| `visitas()` × 3 | 1, 2, 3 |
| `puntos()` × 2 | 110, 120 |
| `visitas()` otra vez | **4** |

Cada llamada a `crearContador` crea un `valor` **nuevo**. `visitas` y `puntos` tienen cada uno el suyo y no se pisan: aunque entre medias hayáis usado `puntos`, `visitas` sigue por donde iba.

## Datos privados

```javascript
console.log(valor);   // ReferenceError: valor is not defined
```

Desde fuera nadie puede tocar `valor` directamente. La única forma de cambiarlo es llamar al contador, que solo sabe sumar `paso`. Nadie puede poner las visitas a −500 por error. Esa protección es una de las grandes utilidades de los *closures*.

## Con un parámetro también vale

```javascript
function crearMultiplicador(factor) {
    return (n) => n * factor;
}
const doble = crearMultiplicador(2);
doble(7);   // 14
```

Aquí la mochila contiene el parámetro `factor`. `doble` recuerda un 2; `triple`, un 3.

> [!NOTE]
> Los *closures* son de los conceptos que cuesta ver a la primera. Si os ha quedado la idea de que «la función devuelta recuerda las variables de donde se creó», tenéis lo necesario. Los volveréis a ver en acción en los bloques 07 y 10.

### Fuentes y Documentación Oficial

1. [Closures (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Closures)
2. [Default parameters (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
