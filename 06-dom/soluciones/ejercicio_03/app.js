/* ==============================================================================
   EJERCICIO 03 · Retocar una tarjeta de perfil (SOLUCIÓN)

   OBJETIVO:
   Modificar el contenido de los elementos con textContent e innerHTML, leer
   y cambiar atributos con getAttribute y setAttribute, y trabajar con los
   atributos data-* a través de dataset.

   PASOS A REALIZAR:
   1. Crear las constantes al DOM de perfil, avatar, nombre, bio, web e
      informe.
   2. Pedir el nombre del usuario con prompt (por defecto "Lucía").
   3. Antes de cambiar nada, guardar en el informe: el src del avatar
      (getAttribute), el usuario-id y el plan (dataset).
   4. Escribir el nombre con textContent.
   5. Escribir la biografía con innerHTML: Desarrolladora <strong>front-
      end</strong> en formación. (Este HTML lo escribís vosotros, no el
      usuario.)
   6. Cambiar el avatar con setAttribute: src a avatar-color.svg y alt a
      Avatar de Lucía.
   7. Cambiar el enlace: href a https://developer.mozilla.org/es/ y texto a
      Mi página favorita.
   8. Cambiar el plan a premium con dataset y añadir un dato nuevo:
      dataset.ultimaVisita = 'hoy'.
   9. Guardar en el informe los valores de después y mostrarlo.
   ============================================================================== */

// estructura del programa principal
let informe = '';

// constantes al DOM
const perfil = document.querySelector('#perfil');
const avatar = document.querySelector('#avatar');
const nombre = document.querySelector('#nombre');
const bio = document.querySelector('#bio');
const web = document.querySelector('#web');
const salidaInforme = document.querySelector('#informe');

// entradas
const nombreUsuario = (prompt('¿Cómo te llamas?', 'Lucía') || '').trim() || 'invitado';

// procesamiento y salidas
// ANTES
informe += '--- ANTES ---\n';
informe += `avatar src:  ${avatar.getAttribute('src')}\n`;
informe += `usuario-id:  ${perfil.dataset.usuarioId}\n`;   // data-usuario-id → usuarioId
informe += `plan:        ${perfil.dataset.plan}\n`;

// texto que viene del USUARIO → textContent
nombre.textContent = nombreUsuario;

// HTML escrito por NOSOTROS → innerHTML es aceptable
bio.innerHTML = 'Desarrolladora <strong>front-end</strong> en formación.';

// atributos
avatar.setAttribute('src', 'avatar-color.svg');
avatar.setAttribute('alt', `Avatar de ${nombreUsuario}`);
web.setAttribute('href', 'https://developer.mozilla.org/es/');
web.textContent = 'Mi página favorita';

// atributos data-* mediante dataset
perfil.dataset.plan = 'premium';
perfil.dataset.ultimaVisita = 'hoy';                       // crea data-ultima-visita="hoy"

// DESPUÉS
informe += '\n--- DESPUÉS ---\n';
informe += `avatar src:  ${avatar.getAttribute('src')}\n`;
informe += `avatar alt:  ${avatar.getAttribute('alt')}\n`;
informe += `enlace href: ${web.getAttribute('href')}\n`;
informe += `plan:        ${perfil.dataset.plan}\n`;
informe += `atributo:    data-ultima-visita="${perfil.getAttribute('data-ultima-visita')}"`;

salidaInforme.textContent = informe;
