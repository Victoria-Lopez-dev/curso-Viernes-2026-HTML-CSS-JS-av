//POO -> Programacion Orientada a Objetos
//entidades que estan involucradas
//entidades tienen caracteristicas(cualidades) y comportamientos(cosas que pueden hacer )
let alumnos=[{
    nombre:'Pepe',
    correo:'pepe@mail.com',
    notas:[8,6,9]
}]

function agregarNota(indiceAlumno,notaNueva){
    alumnos[indiceAlumno].notas.push(notaNueva)
}

//Clases e instancias(objetos-entidades)

//Clases -> molde

class PersonaA{
    //caracteristicas- propiedades
    nombre="Juan"
    email="juan@mail.com"

    // comportamientos - funciones
    saludar(){
        return "hola"
    }
    indicarCorreo(){
        console.log(this.email)
    }
}

class Docente{

    //constructor ->funcion que se ejecuta antes de crear la instancia, al invocar la clase
    constructor(usuarioDoc,correoDoc){
        this.usuario=usuarioDoc
       this.correo=correoDoc
    }
    agregarNota(indiceAlumno,notaNueva){
    alumnos[indiceAlumno].notas.push(notaNueva)
    console.log(alumnos)
}
}
class Persona{
    //caracteristicas- propiedades
    constructor(nombre,email){
        this.nombre=nombre
        this.email=email
    }


    // comportamientos - funciones
    saludar(){
        return "hola"
    }
    indicarCorreo(){
        console.log(this.email)
    }
}
class Alumno extends Persona{
    constructor(nombre,email,usuario){
        super(nombre,email)//le pasa al constructor de Persona los valores que pasamos como nombre y su email
        this.usuario=usuario
    }

    accederALibros(){
        console.log("accedio a el libro")
    }
}
//instancias de la clase (objetos-entidades)

let persona1=new Persona();
let docente1= new Docente('juana','juana@mail.com');
let docente2= new Docente('mauro','mauro@mail.com');
let docente3= new Docente('laura','laura@mail.com');
let alumno1= new Alumno('Pedro',"pedro@mail.com",'pedroAlumno');

console.log(docente1,docente2,docente3)
console.log(alumno1)

docente1.agregarNota(0,10)
docente2.agregarNota(0,4)
//persona1.agregarNota(0,3) -> error porque la instancia de Persona no tiene esa capacidad

console.log(persona1.email)
persona1.indicarCorreo()

//typescript -> superlenguaje de JS 


