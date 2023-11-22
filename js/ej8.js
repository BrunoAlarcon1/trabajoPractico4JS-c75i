class Persona{
    constructor(nombre,edad,profesion){
        this.nombre= nombre;
        this.edad=edad;
        this.profesion=profesion;
    }
    saludar(){
        return (document.write(`<p>Hola, soy ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}. Un gusto saludarte</p>`));
    }
    despedirse(){
        return (document.write(`<p>Perdon tengo que irme, acabo de recordar que tengo una reunion agendada, un gusto saludarte. Nos vemos!</p>`));
        
    }
}

const persona1 = new Persona("juan",20,"veterinario");
persona1.saludar();
persona1.despedirse();
const persona2 = new Persona("Ricardo",40,"Contador");
persona2.saludar();
persona2.despedirse();
