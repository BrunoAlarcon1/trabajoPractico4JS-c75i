class Rectangulo {
  constructor(altura, ancho) {
    this.alto = altura;
    this.ancho = ancho;
  }

  get mostrarAlto() {
    document.write(`<p>Altura de rectangulo: ${this.alto}</p>`);
  }
  get mostrarAncho() {
    document.write(`<p>Ancho de rectangulo: ${this.ancho}</p>`);
  }

  set modificarAlto(nuevaAltura) {
    this.alto = nuevaAltura;
    document.write(
        `<p>La nueva altura del rectangulo es de: ${this.alto} cm</p>`
      );
  }

  set modificarAncho(nuevoAncho) {
    this.ancho = nuevoAncho;
    document.write(
      `<p>El nuevo ancho del rectangulo es de: ${this.ancho} cm</p>`
    );
  }

  calcularPerimetro() {
    const perimetro = 2 * (this.alto + this.ancho);
    return document.write(
      `<p>El perimetro del rectangulo es: ${perimetro}</p>`
    );
  }

  calcularArea() {
    const area = this.alto * this.ancho;
    return (document.write(`<p>El area del rectangulo es: ${area}</p>`));
  }
}

const rectangulo1 = new Rectangulo(2,10);
rectangulo1.mostrarAlto;
rectangulo1.mostrarAncho;
rectangulo1.calcularArea();
rectangulo1.calcularPerimetro();
rectangulo1.modificarAncho=20;
rectangulo1.modificarAlto= 15;
rectangulo1.calcularArea();
rectangulo1.calcularPerimetro();






