class Contacto {
    constructor(nombre, telefono) {
      this.nombre = nombre;
      this.telefono = telefono;
    }
  }
  
  class Agenda {
    constructor(tamano = 10) {
      this.tamano = tamano;
      this.contactos = [];
    }
  
    aniadirContacto(contacto) {
      if (this.contactos.length < this.tamano) {
        this.contactos.push(contacto);
        console.log(`¡Contacto ${contacto.nombre} añadido a la agenda!`);
      } else {
        console.log('La agenda está llena. No se pueden agregar más contactos.');
      }
    }
  
    existeContacto(contacto) {
      const encontrado = this.contactos.some(
        (c) => c.nombre.toLowerCase() === contacto.nombre.toLowerCase()
      );
      if (encontrado) {
        console.log(`El contacto ${contacto.nombre} existe en la agenda.`);
      } else {
        console.log(`El contacto ${contacto.nombre} no existe en la agenda.`);
      }
    }
  
    listarContactos() {
      if (this.contactos.length === 0) {
        console.log('La agenda está vacía.');
      } else {
        console.log('Lista de contactos:');
        this.contactos.forEach((contacto) =>
          console.log(`- ${contacto.nombre}: ${contacto.telefono}`)
        );
      }
    }
  
    buscarContacto(nombre) {
      const contactoEncontrado = this.contactos.find(
        (c) => c.nombre.toLowerCase() === nombre.toLowerCase()
      );
      if (contactoEncontrado) {
        console.log(
          `Nombre: ${contactoEncontrado.nombre}, Teléfono: ${contactoEncontrado.telefono}`
        );
      } else {
        console.log(`No se encontró el contacto con nombre ${nombre}.`);
      }
    }
  
    eliminarContacto(contacto) {
      const index = this.contactos.findIndex(
        (c) => c.nombre.toLowerCase() === contacto.nombre.toLowerCase()
      );
      if (index !== -1) {
        this.contactos.splice(index, 1);
        console.log(`Se eliminó el contacto ${contacto.nombre} de la agenda.`);
      } else {
        console.log(`No se encontró el contacto ${contacto.nombre} en la agenda.`);
      }
    }
  
    agendaLlena() {
      return this.contactos.length === this.tamano;
    }
  
    huecosLibres() {
      return this.tamano - this.contactos.length;
    }
  }
  

  const agenda = new Agenda();
  

  let opcion;
  do {
    opcion = prompt(
      'Selecciona una opción:\n1. Añadir contacto\n2. Verificar existencia de contacto\n3. Listar contactos\n4. Buscar contacto\n5. Eliminar contacto\n6. Agenda llena\n7. Huecos libres\n8. Salir'
    );
  
    switch (opcion) {
      case '1':
        const nombreNuevo = prompt('Ingrese el nombre del nuevo contacto:');
        const telefonoNuevo = prompt('Ingrese el teléfono del nuevo contacto:');
        const nuevoContacto = new Contacto(nombreNuevo, telefonoNuevo);
        agenda.aniadirContacto(nuevoContacto);
        break;
      case '2':
        const nombreExistente = prompt('Ingrese el nombre del contacto a verificar:');
        const contactoExistente = new Contacto(nombreExistente, '');
        agenda.existeContacto(contactoExistente);
        break;
      case '3':
        agenda.listarContactos();
        break;
      case '4':
        const nombreBuscar = prompt('Ingrese el nombre del contacto a buscar:');
        agenda.buscarContacto(nombreBuscar);
        break;
      case '5':
        const nombreEliminar = prompt('Ingrese el nombre del contacto a eliminar:');
        const contactoEliminar = new Contacto(nombreEliminar, '');
        agenda.eliminarContacto(contactoEliminar);
        break;
      case '6':
        console.log(`La agenda está llena: ${agenda.agendaLlena()}`);
        break;
      case '7':
        console.log(`Huecos libres en la agenda: ${agenda.huecosLibres()}`);
        break;
      case '8':
        console.log('¡Hasta luego!');
        break;
      default:
        console.log('Opción no válida.');
    }
  } while (opcion !== '8');
  