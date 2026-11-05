/* ==============================================================================
   EJERCICIO 04 · Herencia: figuras geométricas (SOLUCIÓN)

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
// la madre: lo que tienen en común todas las figuras
class Figura {
    constructor(nombre) {
        this.nombre = nombre;
    }

    area() {
        return 0;        // cada hija pondrá su fórmula
    }

    medidas() {
        return '';
    }

    // se escribe UNA vez y sirve para todas: llama al area() de cada una
    describir() {
        return `${this.nombre} · ${this.medidas()} · área ${this.area().toFixed(2)}`;
    }
}

class Circulo extends Figura {
    constructor(radio) {
        super('Círculo');          // primero, el constructor de la madre
        this.radio = radio;
    }

    area() {
        return Math.PI * this.radio ** 2;
    }

    medidas() {
        return `r = ${this.radio}`;
    }
}

class Rectangulo extends Figura {
    constructor(base, altura) {
        super('Rectángulo');
        this.base = base;
        this.altura = altura;
    }

    area() {
        return this.base * this.altura;
    }

    medidas() {
        return `${this.base} × ${this.altura}`;
    }
}

class Triangulo extends Figura {
    constructor(base, altura) {
        super('Triángulo');
        this.base = base;
        this.altura = altura;
    }

    area() {
        return (this.base * this.altura) / 2;
    }

    medidas() {
        return `base ${this.base}, altura ${this.altura}`;
    }
}

const figuras = [];

// funciones
function crearFigura(tipo, dato1, dato2) {
    if (tipo === 'circulo') {
        return new Circulo(dato1);
    }
    if (tipo === 'rectangulo') {
        return new Rectangulo(dato1, dato2);
    }
    return new Triangulo(dato1, dato2);
}

function renderizar() {
    listaFiguras.replaceChildren();
    figuras.forEach((figura) => {
        const li = document.createElement('li');
        li.textContent = figura.describir();     // polimorfismo: cada una responde a su manera
        listaFiguras.append(li);
    });

    const circulos = figuras.filter((f) => f instanceof Circulo).length;
    const areaTotal = figuras.reduce((suma, f) => suma + f.area(), 0);
    resumen.textContent = `Figuras: ${figuras.length} · círculos: ${circulos} · área total: ${areaTotal.toFixed(2)}`;
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
selectTipo.addEventListener('change', () => {
    const [texto1, texto2] = ETIQUETAS[selectTipo.value];
    etiqueta1.textContent = texto1;
    etiqueta2.textContent = texto2;
    const necesitaDos = texto2 !== '';
    campo2.hidden = !necesitaDos;
    formulario.dato2.required = necesitaDos;
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    // entradas
    const tipo = selectTipo.value;
    const dato1 = Number(formulario.dato1.value);
    const dato2 = Number(formulario.dato2.value);
    // procesamiento
    figuras.push(crearFigura(tipo, dato1, dato2));
    // salidas
    renderizar();
    formulario.dato1.value = '';
    formulario.dato2.value = '';
    formulario.dato1.focus();
});
