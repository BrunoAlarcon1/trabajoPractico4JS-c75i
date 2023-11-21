class CuentaBancaria {
  constructor(titular, saldo) {
    this.titular = titular;
    this.saldo = saldo;
  }

  set ingresar(saldoParam) {
    this.saldo += saldoParam;
    document.write(`<p>Se ingresaron $${saldoParam}</p>`);
  }

  set extraer(extraccion) {
    if (this.saldo >= extraccion) {
      this.saldo -= extraccion;
      document.write(`<p>Usted extrajo $${extraccion} de su cuenta.</p>`);
    } else {
      document.write(
        `<p>Usted no tiene saldo suficiente para realizar la extracción</p>`
      );
    }
  }

  get informar() {
    document.write(
      `<p>El estado de su cuenta es el siguiente: Titular: ${this.titular} | Saldo: $${this.saldo}</p>`
    );
  }
}
const cuenta1 = new CuentaBancaria("Alex", 0);
cuenta1.informar;
cuenta1.ingresar=200;
cuenta1.extraer=100;
cuenta1.informar;
