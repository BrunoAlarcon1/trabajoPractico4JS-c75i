const auto = {
  color: "azul",
  marca: "Ford",
  modelo: "Fiesta",
  encendido: false,

  encender: function () {
    if (!this.encendido) {
      this.encendido = true;
      document.write(`<p>Auto encendido</p>`);
    } else {
      document.write(`<p>El auto ya está encendido</p>`);
    }
  },

  apagar: function () {
    if (this.encendido) {
      this.encendido = false;
      document.write(`<p>El auto se apagó</p>`);
    } else {
      document.write(`<p>El auto ya está apagado</p>`);
    }
  },
};

auto.encender();
auto.apagar();
