class Persona {
  constructor(nombre, edad, sexo, peso, altura, anioNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = this.generarDni();;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.anioNacimiento = anioNacimiento;
  }

  mostrarGeneracion() {
    const generaciones = {
      generacionZ: { generacion: "Generación Z", rasgo: "nativos digitales" },
      generacionY: { generacion: "Generación Y", rasgo: "Frustración" },
      generacionX: {
        generacion: "Generación X",
        rasgo: "Obsesión por el éxito",
      },
      babyBoom: { generacion: "Baby Boomers", rasgo: "Ambición" },
      silentGeneration: { generacion: "Silent", rasgo: "Austeridad" },
    };
    let generacionCalculada = "";
    let rasgoCalculado = "";

    if (this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010) {
      generacionCalculada = generaciones.generacionZ.generacion;
      rasgoCalculado = generaciones.generacionZ.rasgo;
    } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) {
      generacionCalculada = generaciones.generacionY.generacion;
      rasgoCalculado = generaciones.generacionY.rasgo;
    } else if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) {
      generacionCalculada = generaciones.generacionX.generacion;
      rasgoCalculado = generaciones.generacionX.rasgo;
    } else if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968) {
      generacionCalculada = generaciones.babyBoom.generacion;
      rasgoCalculado = generaciones.babyBoom.rasgo;
    } else if (this.anioNacimiento >= 1923 && this.anioNacimiento <= 1948) {
      generacionCalculada = generaciones.silentGeneration.generacion;
      rasgoCalculado = generaciones.silentGeneration.rasgo;
    } else {
      return(document.write(`<p>No se pudo determinar la generación</p>`));
    }

    return document.write(
      `<p>La persona ${this.nombre} pertenece a la generacion ${generacionCalculada} y el rasgo caracteristico es: ${rasgoCalculado} </p>`)
    ;
  }

  esMayorDeEdad() {
    if (this.edad >= 18) {
      return document.write(`<p>${this.nombre} es mayor de edad</p>`);
    } else {
      return document.write(`<p>${this.nombre} no es mayor de edad</p>`);
    }
  }

  mostrarDatos() {
    return (document.write(
      `<p>Datos de ${this.nombre}:<br>DNI: ${this.dni}<br>Edad: ${this.edad}<br>Sexo: ${this.sexo}<br>Peso: ${this.peso}<br>Altura: ${this.altura}<br>Fecha de Nacimiento: ${this.anioNacimiento}</p>`
    ));
  }

  generarDni() {
    return Math.floor(Math.random() * 90000000) + 10000000;
  }
}

const Persona1 = new Persona('Juan',20,'H',75,1.80,'2020')

Persona1.mostrarDatos();
Persona1.esMayorDeEdad();
Persona1.mostrarGeneracion();
