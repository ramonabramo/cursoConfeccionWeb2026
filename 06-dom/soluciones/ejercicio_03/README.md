# Solución · Ejercicio 03 · Retocar una tarjeta de perfil

[← Volver al enunciado](../../ejercicios/ejercicio_03/) · [← Volver al bloque](../../README.md)

## Qué pedía el ejercicio

Cambiar el texto, el HTML interno, los atributos y los datos `data-*` de una tarjeta de perfil.

## La solución paso a paso

### 1. Texto: `textContent`

```javascript
nombre.textContent = nombreUsuario;
```

`textContent` lee y escribe el texto de un elemento [1]. Si el texto contiene etiquetas, se muestran tal cual, sin interpretarlas. Por eso es la opción segura para cualquier dato que escriba el usuario.

### 2. HTML: `innerHTML`

```javascript
bio.innerHTML = 'Desarrolladora <strong>front-end</strong> en formación.';
```

`innerHTML` interpreta el texto como HTML y crea los elementos correspondientes [2]. Aquí es aceptable porque **el HTML lo he escrito yo**. Recordad lo que visteis en el bloque 01: si ese texto viniera del usuario, alguien podría colar código, y MDN avisa de que es una vía para ataques XSS [2].

| Propiedad | Interpreta etiquetas | Úsala para |
| --- | --- | --- |
| `textContent` | No | Cualquier texto, sobre todo si viene del usuario |
| `innerHTML` | Sí | HTML que escribís vosotros |

### 3. Atributos: `getAttribute` y `setAttribute`

```javascript
avatar.getAttribute('src');                    // 'avatar-gris.svg'
avatar.setAttribute('src', 'avatar-color.svg');
```

`getAttribute()` devuelve el valor de un atributo [3] y `setAttribute()` lo cambia, o lo crea si no existía [4]. Funcionan con cualquier atributo: `src`, `alt`, `href`, `title`, `disabled`…

### 4. Datos propios: `dataset`

```html
<div id="perfil" data-usuario-id="42" data-plan="gratis">
```

Los atributos que empiezan por `data-` sirven para guardar datos propios en el HTML. JavaScript los ve todos en `dataset` [5]:

```javascript
perfil.dataset.usuarioId        // '42'
perfil.dataset.plan = 'premium';
perfil.dataset.ultimaVisita = 'hoy';
```

Dos detalles que MDN explica [5]:

- **El nombre cambia de formato.** Se quita el prefijo `data-`, desaparecen los guiones y la letra que va detrás pasa a mayúscula: `data-usuario-id` → `usuarioId`. Al revés también: `dataset.ultimaVisita` crea el atributo `data-ultima-visita`.
- **Los valores son siempre texto.** `dataset.usuarioId` es `'42'`, no `42`. Si vais a hacer cuentas, convertid con `Number()`.

Lo usaréis mucho en el bloque 07: guardaréis el `id` de un producto en un `data-id` y, cuando el usuario pulse su botón, sabréis de qué producto se trata.

## Qué tenéis que observar

- El avatar cambia de gris a color: el `src` ahora apunta a otra imagen.
- Inspeccionad la tarjeta con las herramientas de desarrollo (pestaña **Elementos**): veréis `data-plan="premium"` y el nuevo `data-ultima-visita="hoy"` en el HTML vivo.

### Fuentes y Documentación Oficial

1. [Node: textContent property (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)
2. [Element: innerHTML property (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)
3. [Element: getAttribute() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute)
4. [Element: setAttribute() method (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute)
5. [HTMLElement: dataset property (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)
