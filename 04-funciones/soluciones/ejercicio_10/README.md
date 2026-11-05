# Solución · Ejercicio 10 · La pila de llamadas, paso a paso

[← Volver al enunciado](../../ejercicios/ejercicio_10/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Hacer visible el orden en que las funciones entran y salen cuando se llaman unas a otras.

## Lo que aparece en la página

```
⬇ entra generarFactura
    ⬇ entra calcularTotal
        ⬇ entra calcularIVA
        ⬆ sale calcularIVA
    ⬆ sale calcularTotal
⬆ sale generarFactura
Total: 121.00 €
```

Es la **pila de llamadas** dibujada [1]. `generarFactura` no puede terminar hasta que termine `calcularTotal`, y esta no puede terminar hasta que termine `calcularIVA`. Por eso las salidas van en el orden **inverso** a las entradas: la última que entra es la primera que sale.

## Volver al sitio exacto

```javascript
const total = base + calcularIVA(base);
```

Cuando `calcularIVA` devuelve su resultado, JavaScript vuelve a **esta misma línea**, a mitad de la suma, y la termina. Recordar ese punto de retorno es justo el trabajo de la pila [1].

## La sangría

`nivel` sube antes de llamar a otra función y baja al volver. `repeat(nivel)` repite cuatro espacios tantas veces como niveles haya. Uso `\u00a0` (el espacio que no se colapsa) porque el HTML junta los espacios normales en uno solo.

## Miradla en las herramientas de desarrollo

Con un punto de interrupción en `calcularIVA`, el panel **Pila de llamadas** muestra exactamente estas tres funciones, una encima de otra. Es la misma lista que veis debajo de cada error en la consola: cuando algo falla, os dice quién llamó a quién hasta llegar al fallo.

### Fuentes y Documentación Oficial

1. [Call stack (MDN Glossary) (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Glossary/Call_stack)
