/* ==============================================================================
   EJERCICIO 04 · Herencia: figuras geométricas

   OBJETIVO:
   Usar la herencia para no repetir código: una clase madre con lo común y
   clases hijas que llaman a super y sobrescriben el método area. Comprobar
   el polimorfismo: el mismo método describir funciona con todas las
   figuras.

   PASOS A REALIZAR:
   1. Declarar la clase Figura: constructor(nombre) guarda el nombre; area()
      devuelve 0; describir() devuelve `${this.nombre} · ${this.medidas()} ·
      área ${this.area().toFixed(2)}`; medidas() devuelve ''.
   2. Declarar Circulo extends Figura: constructor(radio) llama a
      super('Círculo') y guarda el radio; sobrescribe area() (π · r²) y
      medidas() ('r = 2').
   3. Declarar Rectangulo (base · altura) y Triangulo (base · altura / 2) de
      la misma forma.
   4. Al cambiar el select, cambiar los textos de las etiquetas y mostrar u
      ocultar el segundo campo (el círculo solo necesita uno).
   5. Al enviar el formulario, crear la figura que toque con new, añadirla
      al array figuras y renderizar.
   6. Renderizar: un li por figura con figura.describir(). En #resumen:
      Figuras: 3 · círculos: 1 · área total: 25.13. Contad los círculos con
      filter e instanceof.
   ============================================================================== */

// estructura del programa principal
const ETIQUETAS = {
    circulo: ['Radio', ''],
    rectangulo: ['Base', 'Altura'],
    triangulo: ['Base', 'Altura'],
};

// clases
// TAREA: class Figura { constructor(nombre), area(), medidas(), describir() }


// TAREA: class Circulo extends Figura


// TAREA: class Rectangulo extends Figura


// TAREA: class Triangulo extends Figura


const figuras = [];

// funciones
function crearFigura(tipo, dato1, dato2) {
    // TAREA: devuelve new Circulo(…), new Rectangulo(…) o new Triangulo(…)
    return null;
}

function renderizar() {
    // TAREA: un li por figura con describir() y el resumen
}

// constantes al DOM que queremos escuchar
const formulario = document.querySelector('#formFigura');
const selectTipo = document.querySelector('#tipo');
const etiqueta1 = document.querySelector('#etiqueta1');
const etiqueta2 = document.querySelector('#etiqueta2');
const campo2 = document.querySelector('#campo2');
const listaFiguras = document.querySelector('#figuras');
const resumen = document.querySelector('#resumen');

// colocar escuchadores de eventos
// TAREA: change en el select → etiquetas y segundo campo

// TAREA: submit → crearFigura, push y renderizar
