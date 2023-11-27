class Animal {
    constructor(nombre,edad){
        this.nombre=nombre;
        this.edad=edad;
    }
    emitirSonido(){
        document.write(`<p>Sonido de animal</p>`);
    }


}

class Perro extends Animal{
    constructor(nombre,edad){
        super(nombre,edad);
    }
    emitirSonido(){
        document.write(`<p>¡Guau Guau!</p>`);

    }
}

class Gato extends Animal{
    constructor(nombre,edad){
        super(nombre,edad);
    }

    emitirSonido(){
        document.write(`<p>¡Miaaau!</p>`);

    }
}

const perro= new Perro("Firulais",6);
const gato=new Gato("Michi",3);

perro.emitirSonido();
gato.emitirSonido();
