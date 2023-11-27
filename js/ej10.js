class Aeropuerto {
    constructor(nombreAeropuerto) {
      this.nombreAeropuerto = nombreAeropuerto;
      this.listaDeAviones = [];
    }
  
    agregarAvion(avion) {
      this.listaDeAviones.push(avion);
    }
  
    buscarAvion(nombreAvion) {
      for (let i = 0; i < this.listaDeAviones.length; i++) {
        if (nombreAvion === this.listaDeAviones[i].nombre) {
        return document.write(`<p>Nombre Avión: ${this.listaDeAviones[i].nombre}</p>
        <p>Capacidad: ${this.listaDeAviones[i].capacidad}</p>
        <p>Destino: ${this.listaDeAviones[i].destino}</p>
        <p>Lista de Pasajeros: ${this.listaDeAviones[i].listaDePasajeros}</p>`);

        ;
        }
      }
      document.write(`<p>No se encontró el avión ${nombreAvion}</p>`);
    }
  }
  
  class Avion {
    constructor(nombre, capacidad, destino) {
      this.nombre = nombre;
      this.capacidad = capacidad;
      this.destino = destino;
      this.listaDePasajeros = [];
    }
  
    abordar(pasajero) {
      if (this.listaDePasajeros.length < this.capacidad) {
        this.listaDePasajeros.push(pasajero);
        document.write(`<p>Pasajero ${pasajero} abordó el avión ${this.nombre} con éxito</p>`);
      } else {
        document.write(`<p>El avión ${this.nombre} alcanzó su límite de capacidad. El pasajero ${pasajero} no puede abordar</p>`);
      }
    }
  }
  
  const aeropuertoEzeiza = new Aeropuerto("Aeropuerto Internacional");
  
  const avion1 = new Avion("Avión 1", 150, "Ciudad A");
  const avion2 = new Avion("Avión 2", 200, "Ciudad B");
  const avion3 = new Avion("Avión 3", 180, "Ciudad C");
  
  aeropuertoEzeiza.agregarAvion(avion1);
  aeropuertoEzeiza.agregarAvion(avion2);
  aeropuertoEzeiza.agregarAvion(avion3);
  

  avion1.abordar("eduardo");
  aeropuertoEzeiza.buscarAvion("Avión 1");
  avion2.abordar("Enrique");
  aeropuertoEzeiza.buscarAvion("Avión 2");
  avion3.abordar("Felipe");
  aeropuertoEzeiza.buscarAvion("Avión 3");
  aeropuertoEzeiza.buscarAvion("Avión 4");


  