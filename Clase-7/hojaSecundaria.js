let body=document.body
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

let temaDefinido=()=>{
    let tema=localStorage.getItem('tema');
    if(tema === 'noche')temaNoche();
    let infoCompra=localStorage.getItem('cantidad')
    let parrafo=document.querySelector("p");

    if(infoCompra === null){
        return parrafo.textContent='No tiene productos cargados en el carrito de compra'
    }else{
        let data=JSON.parse(infoCompra)
         parrafo.textContent=`Tiene por el momento ${data.cantidad} productos seleciconados,los cuales hacen un precio total de $ ${data.precio} `
    }
   
}