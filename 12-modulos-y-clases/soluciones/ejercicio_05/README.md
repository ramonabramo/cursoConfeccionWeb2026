# Solución · Ejercicio 05 · Encapsulación: la cuenta bancaria

[← Volver al enunciado](../../ejercicios/ejercicio_05/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Una cuenta bancaria cuyo saldo no se pueda tocar desde fuera: solo con `ingresar()` y `retirar()`, que validan cada operación.

## Por qué proteger los datos

Con el `Producto` del ejercicio 03, cualquiera podía escribir `producto.unidades = -7` y saltarse la regla de `quitar()`. En una cuenta bancaria eso es inadmisible. La **encapsulación** consiste en guardar los datos delicados bajo llave y abrir solo una «ventanilla» de métodos que ponen condiciones. Lo tenéis en la [infografía de la teoría](../../img/encapsulacion.svg).

## Campos y métodos privados: `#`

```javascript
#saldo = 0;
#movimientos = [];
#validar(cantidad) { … }
```

Lo que empieza por `#` es **privado**: solo el código escrito dentro de la clase puede leerlo o cambiarlo [1]. No es una convención, es una regla del lenguaje: escribir `cuenta.#saldo` fuera de la clase es un **error de sintaxis**, y el programa ni siquiera arranca [1]. Los métodos también pueden ser privados, como `#validar`, `#redondear` y `#registrar`: son herramientas internas que nadie de fuera necesita.

> [!NOTE]
> Si probáis `cuenta.#saldo` en la consola de Chrome, funcionará. Es una excepción de las herramientas de desarrollo para ayudaros a depurar [1], no del lenguaje.

## Getters: leer como si fuera una propiedad

```javascript
get saldo() {
    return this.#saldo;
}

salidaSaldo.textContent = formatear(cuenta.saldo);   // sin paréntesis
```

`get` asocia una propiedad a una función que se ejecuta al leerla [2]. Desde fuera, `cuenta.saldo` parece un dato normal, pero no hay forma de cambiarlo, porque no he escrito un `set saldo`.

El getter de `movimientos` devuelve `[...this.#movimientos]`, una **copia** (bloque 05). Si devolviera el array original, cualquiera podría hacer `push` en él aunque fuera privado.

## Setters: asignar… con condiciones

```javascript
set titular(nombre) {
    const limpio = String(nombre).trim();
    if (limpio.length < 3) {
        throw new Error('El titular debe tener al menos 3 letras.');
    }
    this.#titular = limpio;
}

cuenta.titular = 'Ana';   // parece una asignación, pero ejecuta el setter
```

`set` asocia una propiedad a una función que se ejecuta al intentar asignarla [3]. Por eso el constructor hace `this.titular = titular`: así el titular inicial también pasa por la validación.

## Los errores los lanza la clase; los muestra la página

La clase no sabe nada de la página: no escribe mensajes en el DOM. Cuando algo no se puede hacer, lanza un `Error` con un mensaje claro [4]. Quien la usa decide qué hacer con él:

```javascript
try {
    cuenta.retirar(cantidad);
} catch (error) {
    mensaje.textContent = `✘ ${error.message}`;
}
```

Probad a retirar 700 €, a retirar más de lo que hay o a ingresar `-5`: cada caso tiene su mensaje.

## `static`: un dato de la clase

```javascript
static LIMITE_RETIRADA = 600;
…
if (cantidad > CuentaBancaria.LIMITE_RETIRADA) { … }
```

Un miembro `static` pertenece a la **clase**, no a cada cuenta, y se usa con el nombre de la clase [5]. El límite es el mismo para todas, así que no tiene sentido que cada objeto guarde una copia. `cuenta.LIMITE_RETIRADA` es `undefined`.

## La trampa que no funciona

```javascript
cuenta.saldo = 1000000;
cuenta.movimientos.push({ … });
```

El saldo sigue igual y no aparece ningún «Regalo»:

- **`cuenta.saldo = …`** no tiene setter, así que se ignora. En este script clásico, sin avisar. En modo estricto (por ejemplo, dentro de un módulo) lanzaría un `TypeError` [6].
- **`cuenta.movimientos.push(…)`** modifica la copia que devuelve el getter, no el original.

## Un detalle con los céntimos

`#redondear` deja el saldo con dos decimales después de cada operación. Sin él, después de ingresar `0.1` y `0.2` el saldo sería `0.30000000000000004`, el problema de los decimales que visteis en el bloque 02.

### Fuentes y Documentación Oficial

1. [Private elements (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_elements)
2. [get (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)
3. [set (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set)
4. [Error (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
5. [static (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static)
6. [Strict mode (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)
