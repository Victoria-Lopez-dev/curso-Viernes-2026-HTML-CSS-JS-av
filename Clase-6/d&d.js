//API que nos permite manipular objetos arrastrables 
//elementos arrastrables por defecto -> <img/> <a>

//Drag &Drop -> 7 eventos que nos permiten controlar la informacion y el proceso de traslado de elementos
//evento -> escucha -accion como respuesta a ese evento
//2 maneras: addEventListener() - (JS)| atributo on+evento(HTML y JS)

//objeto dataTransfer que va a contener la informacion del elemento a trasladar
//vive dentro de estos 7 eventos de drag&Drop
//y para configurarlos,utilizamos 3 metodos:
//setData(tipo,dato) -> almacenar informacion en dataTransfer
//getData(tipo) -> obtener la info almacenada en ese tipo en dataTransfer
//clearData(tipo) -> borrar la info almacenada en ese tipo que vive en dataTransfer
//tipo -> "Text"-"URL"-"html/plain-text"- "html/uri" 

//ocurren en el elemento que quiero arrastrar
//dragstart
//dragend
//drag

let h1=document.querySelector("#tituloUnico");

//utilizo el dragstart para almacenar la info necesaria en el arrastre
h1.addEventListener("dragstart",(event)=>{
    console.log("evento dragstart en ejecucion:Inicio de arrastre")
    event.dataTransfer.setData("Text",h1.id)
    console.log(h1.id)
})

// h1.addEventListener("dragstart",()=>{
//     console.log("evento dragstart en ejecucion:Inicio de arrastre")
// })
// h1.addEventListener("dragend",()=>{
//       console.log("evento dragend en ejecucion:Finaliza de arrastre")
// })
// h1.addEventListener("drag",()=>{
//     console.log("evento drag en ejecucion:Estamos en movimiento con el elemento en arrastre..")
// })

//ocurrir en la zona destino/ el elemento en el cual queremos soltar a ese otro elemento
//dragover
//dragleave
//dragenter
//drop
//ejecutamos para probarlo utilizando el otro metodo de creacion de eventos

//necesito el dragover, en este caso,solamente para que me permita ejecutar el drop sin problema
const dragoverFunction=(event)=>{
    // console.log("Evento dragover en ejecucion:detecta que un elemento arrastrando se esta moviendo dentro del elemento destino")
    event.preventDefault();
}
const dragenterFunction=()=>{
    console.log("dragenter:detecta elementos arrastrandose dentro del elemento destino")
}
 const dragleaveFunction=()=>{
    console.log("Evento dragleave en ejecucion:Elemento arrastrado sale de dicha zona ")
 } 
 
//lo vamos a utilizar para obtener la info de dataTransfer y mostrar el elemento
const dropFunction=(event)=>{
    console.log("evento drop: ejecuta cuando se suelta un elemento dentro de este")
    let infoAlmacenada=event.dataTransfer.getData("Text")
    let zonaDestino=document.querySelector(".zona-destino");
    if(infoAlmacenada == "tituloUnico"){
        let nodo=document.getElementById(infoAlmacenada);
        console.dir(nodo)
        // return zonaDestino.appendChild(nodo)
        return zonaDestino.innerHTML=nodo.outerHTML
    }
    console.log(event.dataTransfer.files)
    let nombreDoc=event.dataTransfer.files[0].name
    zonaDestino.innerHTML=`<p>Se coloco dentro, el archivo : ${nombreDoc}</p>`
    
  }  //por defecto el drop no se va a ejecutar ya que el dragover tambien se esta ejecutando cuando suelto el elemento .Para que funcione el drop tenemos que utilizar el preventDefault() del dragover

//----------
const verInfoEvento=(event)=>{
    console.log(event)
}

// que necesitamos para hacer un traslado: dragstart-dragover-drop