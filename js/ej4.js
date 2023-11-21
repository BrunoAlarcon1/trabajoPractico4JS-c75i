class Producto{
    constructor(codigoParam,nombreParam,precioParam){
        this.codigo=codigoParam;
        this.nombre=nombreParam;
        this.precio=precioParam;

    }

    imprimeDatos(){
        return (document.write(`<p>Codigo:${this.codigo}<br>Nombre: ${this.nombre}<br>Precio: $${this.precio}</p>`))
    }
}

const azucar = new Producto(1111,"azucar",600);
const arroz = new Producto(2222,"arroz",620);
const yerba = new Producto(3333,"yerba",550);

const listadeProductos= [azucar,arroz,yerba];
listadeProductos[0].imprimeDatos();
listadeProductos[1].imprimeDatos();
listadeProductos[2].imprimeDatos();

