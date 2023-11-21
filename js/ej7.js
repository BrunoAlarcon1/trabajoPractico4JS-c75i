class Contacto{
    constructor(nombre,telefono){
        this.nombre=nombre;
        this.telefono=telefono;
    }

    get mostrarNombre(){
        return this.nombre;
    }
    get mostrarTelefono(){
        return this.mostrarTelefono;
    }
    set modificarNombre(nuevoNombre){
        this.nombre = nuevoNombre;
    }
    set modificarTelefono(nuevoTelefono){
        this.telefono = nuevoTelefono;
    }
    
}
