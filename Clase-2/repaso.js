//condicionales -bucles-DOM-eventos- objetos -arrays

//operaciones : 
// Aritmeticas -> calculos (suma-resta-multiplicacion-division-concatenacion)
// + suma (numeros)
20+200 //220
"Hola"+" Juan" //concatenacion "Hola Juan"
"Hola" +22 //concatena -> "Hola22"
//si el resultado de una operacion aritmetica no tiene un valor numerico ,nos devuelve NaN

// - * / -> numeros devuelve un valor numerico, si utilizo algun string devolvera NaN.Si uso algun booleano (true- false )Tomar a true como 1 y a false 0


// -Logicas  -> devuelven un booleano 
// || (or) buscaba que por lo menos una de las operaciones involucradas de true para que el resultado final nos de true
//  !  -> busca es que la/s operacion/es involucradas den un booleano para devolver el opuesto(busca que NO se cumpla la operacion evaluada)
// && (and) busca es que todas las operaciones involucradas nos de true, para que el resultado final nos de true
// -> devuelven un booleano 


// de Comparacion -> > < >= <= != !== === == -> siempre devuelve un Booleano 
//doble igual (==) compara solo valores
//triple igual(===) compara tipo de dato y valor

"22"== 22//true
"22"=== 22//false ( ya que el tipo de dato es distinto : string y number)


//condicionales -> evaluo una condicion para que a partir de esta pueda indicarle al programa como actuar ante distintas situaciones.

//condicion que devuelve un booleano 

// operador ternario -> sintaxis condicion ? accion-true : accion-false;
//-> muy util para condicionamientos simples, cortos


//if - if/else 
// -> puedo obviar el else
// -> anidar condiciones dentro de esta estructura
// -> multiples acciones en ambas partes de esta condicion.

//sintaxis:

/*
    if(condicion){
        accion/es a realizar si se cumple la condicion
    }else{
        accion/es a realizar si no se cumple la condicion

     }
*/

let edad=16;
let conAdultoAcompanante=true;

if( edad>=18 && conAdultoAcompanante){
    let registro=prompt("Esta registrado? responda si o no")
    if(registro.toLowerCase() === "si"){
        console.log("realizamos la venta del ticket")
    }else{
        console.log("te redirigimos a registrarte para poder comprar")
    }
}



//---------------------

//arrays ->listas conjunto de datos separados por una coma simple(,)
//[]
//indice -> inicia en 0 
//array[indice]
//          0       1      2  3 ....
let lista=["Marta",true,edad,111]

console.log(lista[2])
//metodos de lista (acciones que se pueden hacer con las listas)
// push-shift -> agregar items a la lista
lista.push("item al final de la lista")
lista.unshift("agregar al inicio")//ojo porque este metodo me altera la posicion de cada dato de mi lista (cambia el indice)

//unshift-pop -> saca un item de la lista
lista.unshift() //saca el primero de la lista (indice 0)

lista.pop()//saca el ultimo de la lista 

//los items que sacamos podemos guardarlos en variables si es que queremos,esto quiere decir que tanto el metodo pop como unshift nos retornan el dato que sacaron 

// splice -> agregar,eliminar o modificar cualquier item de la lista
//sintaxis -> array.splice(ubicacion, cantidad, nuevoDato)
lista.splice(2,1)//posicionar en el indice 2 y va a eliminar 1
lista.splice(1,2)//posicionar en el indice 1 y saca los siguientes 2 items
lista.splice(0,1,"Hola")//ubicarse en el indice 0 sacar ese mismo y reemplazarlo por el string "Hola"

// slice -> 'cortar' un bloque del array y armarlo en una nueva variable 
//sintaxis -> array.slice(indiceInicial,indiceFinal)
// algunos otros de los que hablaremos la proxima clase : join-includes-trim...(HOF)

console.log(lista)
//  objetos 
//cualquier tipo de valor (incluso otro objeto u otro array)
//siempre tiene que tener un valor
/*
sintaxis 
{
    propiedad:valor,
    propiedad:valor,
    propiedad:valor
}
*/
let persona={
    nombre:"Juan",
    edad:22,
    activo:true
}

//---------------------

//DOM ->Document Object Model 
//nodo -> elemento HTML 'transformado' en un objeto 

//llamar al nodo -> varios metodos (querySelector,....)

let h1=document.querySelector("h1");
let button=document.querySelector("button");
console.dir(h1)
//hacer las acciones que quiera 
h1.textContent="Modificando el contenido.."

//---------------------

//  eventos ->acciones que tienen un inicio y fin 
//nos permite es hacer una accion/respuesta ante un accionar del usuario(una accion ocurrida en el sitio)

//nodo en el que ocurre el evento
//evento en si : varios tipos  (https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Events) ... click- input-mouseover-blur-focus-change...
//accion como respuesta (funcion)

//2 maneras de generar un evento : 
//A) addEventListener | 
button.addEventListener("click",()=>{
    alert("se pulso el boton")
});


//B) atributo on+evento con la funcion en el codigo JS

//en el HTML ->  <button onclick="modificar()">Click</button>

const modificar=()=>{
 alert("se pulso el boton")
};

//eventos - presentan 2 objetos : event(objeto que contiene toda la info del evento ocurrido y podemos obtenerla como argumento de la funcion respuesta del evento) 
// - this -> referencia al nodo en el que esta ocurriendo el hecho (util en los eventos on+eventos)




