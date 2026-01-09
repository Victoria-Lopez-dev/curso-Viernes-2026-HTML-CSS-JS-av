const activarDesactivar=(nodoBoton)=>{
    let padre=document.querySelector(".padre");
    padre.classList.toggle("moverCubo")
    if(padre.className.includes("moverCubo")){
         nodoBoton.textContent="Pausar!!!"
    }else{
         nodoBoton.textContent="Mover!!!"
    }
   
}