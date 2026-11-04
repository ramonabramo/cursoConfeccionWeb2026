# Solución · Ejercicio 02 · FormData: el formulario entero de una vez

[← Volver al enunciado](../../ejercicios/ejercicio_02/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Leer todos los datos de un formulario con `FormData` y comparar dos formas de obtenerlos.

## `new FormData(formulario)`

```javascript
const datos = new FormData(formulario);
```

`FormData` recoge en un solo objeto todos los campos del formulario como pares **nombre → valor** [1]. Y el nombre es el del atributo **`name`**, no el `id`. Un campo sin `name` no aparece en `FormData`. Es el error más habitual con esta herramienta.

Lo bueno: da igual cuántos campos tenga el formulario, o de qué tipo sean. No hace falta seleccionarlos uno a uno.

## `get` y `getAll`

```javascript
datos.get('nombre');          // 'Lucía'
datos.get('modalidad');       // 'presencial': el radio marcado
datos.getAll('intereses');    // ['frontend', 'diseño']: todas las casillas marcadas
```

- `get()` devuelve **el primer valor** asociado a ese nombre, o `null` si no hay ninguno [2].
- `getAll()` devuelve **un array con todos** los valores asociados a ese nombre [3].

Fijaos en dos ventajas frente al ejercicio 01:

- **Radio:** `get('modalidad')` ya devuelve el marcado. Adiós al `querySelector('[name=…]:checked')`.
- **Casillas con el mismo `name`:** solo aparecen las **marcadas**, y `getAll` las devuelve en un array.

## `Object.fromEntries`: de FormData a objeto

```javascript
const objeto = Object.fromEntries(datos);
```

`Object.fromEntries()` construye un objeto a partir de una lista de pares clave-valor [4], y un `FormData` lo es. El resultado es un objeto normal, perfecto para guardarlo o enviarlo como JSON.

```json
{
  "nombre": "Lucía",
  "email": "lucia@ejemplo.com",
  "taller": "javascript",
  "intereses": "diseño",
  "modalidad": "presencial"
}
```

¿Y los intereses? En un objeto, cada clave solo puede aparecer **una vez**. Como hay dos casillas `intereses` marcadas, la segunda sobrescribe a la primera y solo queda `"diseño"`. Para los campos con varios valores, usad siempre `getAll`.

## ¿Cuándo uso cada forma?

| Necesito | Uso |
| --- | --- |
| Uno o dos campos concretos | `campo.value` / `campo.checked` |
| Todo el formulario | `new FormData(form)` + `get` |
| Casillas con el mismo `name` | `getAll` |
| Un objeto para guardar o enviar | `Object.fromEntries(datos)`, con cuidado con los campos múltiples |

### Fuentes y Documentación Oficial

1. [FormData (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/FormData)
2. [FormData: get() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/FormData/get)
3. [FormData: getAll() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/FormData/getAll)
4. [Object.fromEntries() (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries)
