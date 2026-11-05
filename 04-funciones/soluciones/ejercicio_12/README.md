# Solución · Ejercicio 12 · Un monedero con saldo privado

[← Volver al enunciado](../../ejercicios/ejercicio_12/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Un monedero cuyo saldo solo se pueda cambiar ingresando o gastando, nunca directamente.

## La fábrica y su mochila

```javascript
function crearMonedero(titular, saldoInicial = 0) {
    let saldo = saldoInicial;
    return {
        ingresar(cantidad) { … saldo += cantidad; … },
        gastar(cantidad) { … },
        consultar() { return `${titular}: ${saldo} €`; },
    };
}
```

Es el *closure* de este bloque aplicado a algo real. `saldo` es una variable local de `crearMonedero`. La función termina, pero los tres métodos del objeto devuelto la siguen viendo: se la llevan en su mochila. Y nadie más puede llegar a ella, porque no está en ningún objeto ni es global.

## Lo que pasa con cada operación

| Operación | Resultado |
| --- | --- |
| `ingresar(20)` | `✔ Ingreso de 20 € · saldo 70 €` |
| `gastar(35)` | `✔ Gasto de 35 € · saldo 35 €` |
| `gastar(100)` | `✘ No hay saldo para gastar 100 € (quedan 35 €)` |
| `ingresar(-5)` | `✘ -5 no es una cantidad válida` |

Las reglas (no gastar lo que no hay, no ingresar negativos) están **dentro** del monedero. Quien lo use no puede saltárselas.

## La trampa que no funciona

```javascript
monedero.saldo = 1000000;
monedero.consultar();     // 'Lucía: 35 €'
```

Esta línea no da error: crea una propiedad **nueva** llamada `saldo` en el objeto. Pero los métodos no usan esa propiedad, usan la variable de la mochila, que sigue valiendo 35. Son dos cosas distintas con el mismo nombre.

En el bloque 12 veréis la versión moderna de esta idea con clases y campos privados (`#saldo`). Aquí lo habéis conseguido solo con funciones.

### Fuentes y Documentación Oficial

