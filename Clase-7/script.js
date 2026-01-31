//pliegue y despliegue del navegador
let body=document.body;
function desplegar(){
    let botonesTema=document.querySelectorAll(".boton");
    botonesTema.forEach((btn)=> btn.classList.toggle("show"))
}

//------------------------------------------
const temaDia=()=>{
    let clasesBody=body.className;
    if(clasesBody.includes('fondo')){
        body.classList.remove('fondo')
        let buttons=document.querySelectorAll('button')
        buttons.forEach((boton)=>boton.classList.remove('botonNight'))
        localStorage.setItem("tema","dia")
    }

};
const temaNoche=()=>{
    body.classList.add('fondo')
    let buttons=document.querySelectorAll('button')
    buttons.forEach((boton)=>boton.classList.add('botonNight'))

    localStorage.setItem("tema","noche")
    
}
let contador=0
//------------------------------------------
let temaDefinido=()=>{
    let infoProducto=localStorage.getItem("cantidad")
    let cantidadAlmacenada=JSON.parse(infoProducto)
    
     cantidad.textContent=cantidadAlmacenada.cantidad;

    contador=parseInt(cantidadAlmacenada.cantidad);

    let tema=localStorage.getItem('tema');
    if(tema === 'noche')temaNoche();

}

//------------------------------------------
let total=0;
const sumarProducto=(nodo)=>{
    let cantidad=document.querySelector("#cantidad");
    let precio=2500;
    contador++
    console.log(contador)
    total+=precio;
    let datosProducto={
        cantidad:contador,
        precio:total
    }
    localStorage.setItem('cantidad',JSON.stringify(datosProducto))
    
    cantidad.textContent=contador
}

const borrarCompra=()=>{
    localStorage.removeItem("cantidad");
    let cantidad=document.querySelector("#cantidad");
    contador=0
    cantidad.textContent=contador
}
//API Web Storage - almacenar informacion en el browser
//permite almacenar formato string/texto

//localStorage - sessionStorage

//metodos : getItem() setItem() removeItem()

//setItem(key,value)  -> ingresar informacion en el storage(local o session)

localStorage.setItem('nombre','Juana');


//getItem(key) -> ingresando la clave obtenemos el valor

let dato=localStorage.getItem("nombre");
console.log(dato)

//--------------------------------
//JSON -. JavaScript Object Notation
//formato 
let ejemplo={
    cantidad:10,
    precio:25000
}
console.log(ejemplo)
console.log(JSON.stringify(ejemplo))
//metodo JSON.parse() -> de JSON a un array/objeto
//metodo JSON.stringify()-> objeto/array a JSON