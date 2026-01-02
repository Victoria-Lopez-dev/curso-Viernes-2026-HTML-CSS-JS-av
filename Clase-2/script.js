//video - audio 

let video=document.querySelector("video");
console.dir(video);
let formatoTiempo=(tiempo)=>{
    let minutos;
    let segundos;
    if(tiempo>=60){
       minutos= tiempo/60;
       segundos=tiempo%60
    }else{
        minutos="00"
        //segundos=parseInt(tiempo) -> metodo que nos devuelve un entero
        segundos=tiempo.toFixed(0)//metodo que nos permite ajustar la cantidad de decimales
    }

    return `${minutos}:${segundos}`
};

//duration -> duracion del audio/video en segundos
//metodos : play() - pause() -> permitir controlar la reproduccion del video/audio

//muted -> booleano que indica el sonido apagado o encendido


//DOM -eventos

//mostrar la duracion del video
//load  -> espera a que se cargue todo lo que contiene el HTML
//DOMContentLoaded -> se dispara apenas se carga el HTML (minimo para armar el DOM - no espera a imagenes, videos ,otras cargas)
window.addEventListener("load",()=>{
    document.querySelector("#tiempo").textContent=formatoTiempo(video.duration)   
});

//otra alternativa no es tan recomendable  
//metodo de JS setTimeout () -> permitirnos ejecutar una accion luego de un tiempo 
// sintaxis:
// setTimeout(()=>{
//     document.querySelector("#tiempo").textContent=video.duration 
// },ms)//en 0,1 segundos ejecuta la funcion

//metodo de JS -> setInterval() -> ejecuta una funcion cada cierto tiempo 

/* sintaxis:
setInterval(()=>{
    },ms)
    clearInterval(setInteval)
*/

//acciones de los botones de la barra de reproduccion
let botonPlay=document.querySelector("#play");
let botonPause=document.querySelector("#pause");
let botonMute=document.querySelector("#muted");
let muestraTiempoActual;

botonPlay.addEventListener("click",()=>{
    video.play()//reproducir el video

   muestraTiempoActual=setInterval(()=>{ 
        document.querySelector("#actual").textContent=formatoTiempo(video.currentTime);
        console.log(formatoTiempo(video.currentTime))
    },1000)
});

botonPause.addEventListener("click",()=>{
    video.pause()//pausar el video
   clearInterval(muestraTiempoActual)
});

botonMute.addEventListener("click",()=>{
    video.muted= !video.muted;
    if(video.muted){ //true
        botonMute.textContent="SONIDO ON"
    }else{
        botonMute.textContent="SONIDO OFF"
    }
});

