class Libro{
    constructor(isbn,titulo,autor,numDePaginas){
        this.isbn=isbn;
        this.titulo=titulo;
        this.autor=autor;
        this.numDePaginas=numDePaginas;
    }
    get mostrarIsbn(){
        return this.isbn;
    }
    set modificarIsbn(nuevoIsbn){
        this.isbn = nuevoIsbn;
    }
    get mostrarTitulo(){
        return this.titulo;
    }
    set modificarTitulo(nuevoTitulo){
        this.titulo=nuevoTitulo;
    }
    get mostrarAutor(){
        return this.autor;
    }
    set modificarAutor(nuevoAutor){
        this.autor=nuevoAutor;
    }
    get mostrarNumDePaginas(){
        return this.numDePaginas;
    }
    set modificarNumDePaginas(nuevaCantidad){
        this.numDePaginas=nuevaCantidad;
    }
    mostrarLibro(){
        return(document.write(`<p>El libro ${this.titulo} con ISBN ${this.isbn}, creado por el autor ${this.autor}, tiene ${this.numDePaginas} paginas.</p>`))

    }
}



const libro1= new Libro(9788478884452,"Harry Potter","J.K. Rowling",288);
libro1.mostrarLibro();
const libro2= new Libro(9788478884452,"El Principito","Antoine de Saint-Exupéry",111);
libro2.mostrarLibro();

if(libro1.numDePaginas>libro2.numDePaginas){
    document.write(`<p>El libro ${libro1.titulo} tiene mayor cantidad de paginas.</p>`);
}else{
    document.write(`<p>El libro ${libro2.titulo} tiene mayor cantidad de paginas.</p>`);
}