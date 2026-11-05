# Solución · Ejercicio 10 · Datos de registro limpios

[← Volver al enunciado](../../ejercicios/ejercicio_10/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Limpiar tres datos de un formulario de registro: un nombre, un correo y un código postal.

## El nombre: mayúscula inicial

```javascript
const nombreSinEspacios = nombre.trim();
const nombreLimpio = nombreSinEspacios.at(0).toUpperCase() + nombreSinEspacios.slice(1).toLowerCase();
```

No existe un método «capitalizar», pero se construye en tres pasos: el primer carácter con `at(0)` [1] pasado a mayúsculas [2], y el resto desde la posición 1 con `slice(1)` [3] pasado a minúsculas. Se unen con `+`. Así, `'   aNA  '` se convierte en `'Ana'`.

Fijaos en que hago el `trim()` primero y guardo el resultado. Si no, `at(0)` sería un espacio.

## El correo: métodos encadenados

```javascript
const correoLimpio = correo.trim().toLowerCase();
```

Cada método devuelve un texto nuevo, así que puedo llamar a otro sobre ese resultado: primero quito los espacios [4] y luego paso a minúsculas [5]. Las direcciones de correo se suelen guardar en minúsculas para que `Ana@Correo.com` y `ana@correo.com` no parezcan dos usuarios distintos.

## El código postal: `padStart`

```javascript
cp.trim().padStart(5, '0')    // '8001' → '08001'
```

Los códigos postales de Barcelona empiezan por `08`, y es muy habitual que alguien escriba `8001`. `padStart(5, '0')` añade ceros por la izquierda hasta que el texto tenga 5 caracteres; si ya los tiene, lo deja igual [6]. Lo mismo os servirá para mostrar horas como `09:05`.

> [!NOTE]
> Aquí el código postal es un **texto**, y es lo correcto: no se hacen cuentas con él, y como número perdería el cero inicial. Lo mismo pasa con los teléfonos o los DNI.

### Fuentes y Documentación Oficial

1. [String.prototype.at() (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/at)
2. [String.prototype.toUpperCase() (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
3. [String.prototype.slice() (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)
4. [String.prototype.trim() (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim)
5. [String.prototype.toLowerCase() (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
6. [String.prototype.padStart() (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)
