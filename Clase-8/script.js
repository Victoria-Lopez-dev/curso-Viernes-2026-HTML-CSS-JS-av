//asincronia -> pueda dejar en otro plano la finalizacion de una ejecucion y seguir con otros procesos
//ejemplo: 
// cuando buscamos informacion externa o usamos API externas
//cuando generamos eventos


//JS naturalmente es sincronico 

let producto="remera";
console.log(producto)

let precio=2000
console.log('el precio de '+producto+' es '+precio)



const cambiarFondo=()=>{
    document.querySelector("body").style.backgroundColor='cyan'
}

//asincronia


//callbacks -> funciones que se pasan como parametros y se ejecutan dentro de otras

let titulo=document.querySelector('h1');

titulo.addEventListener("mouseover",()=>{
    titulo.textContent="nuevo titulo"
})
let total=0
const sumar=(valor)=>{
    total+=valor
    console.log(total)
}
sumar(10)
sumar(20)
sumar(9827)
// async-await  -> async se coloca al definir la funcion y la vuelve asincrona
// -> await se coloca delante de lo que queremos que espere
function funcionConDemora(params) {
    return setTimeout(()=>{ params},2000)
}

let funcionAsincrona=async()=>{
    let resultado=await funcionConDemora(3)

    let promedio=resultado/2
    console.log(promedio)
}
//| promesas
sumar(20)
funcionAsincrona()
sumar(20)

//promesas
//la accion a realizar a futuro (promesa)
//maneja el resulado de dicha accion si se logro con exito (then); por medio de un callback
//manejar el resultado de dicha accion si no se logro (catch); por medio de un callback

//js-> fetch() es una promesa que nos permite hacer peticiones a recursos externos 

async function infoPersonajes(){

let personajes=await fetch("https://thesimpsonsapi.com/api/characters")
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            return data.results
        })
        .catch((error)=>{
            console.log("Error!")
            console.log(error)
        });

    console.log(personajes)
}

