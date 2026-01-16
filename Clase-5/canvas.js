//canvas -> API grafica incluida en el codigo
//API -> Aplication Programing Interfase 
// hacer mas simple acciones complejas
//ser un nexo entre un cliente y la db
//nos brindan servicios

//API que estan incluidas a partir de HTML5
//web storage -geolocalizacion-canvas

//API externas que podemos incorporar a nuestros proyectos (metodos asincronicos )

//CANVAS. -> lienzo
//figura primitiva -> rectangulo y trazos

let canvas=document.querySelector("canvas");

let lienzo=canvas.getContext('2d');

//metodos 

//rectangulos
    //fillRect(x,y,width,height)
    //strokeRect(x,y,width,height)
    //clearReact(x,y,width,height) -> tapar lo que se encuentra debajo 
    console.log(lienzo)
    lienzo.fillStyle="#33ffaa";//color de relleno
    lienzo.globalAlpha=0.8
    lienzo.fillRect(200,40,100,100)
    lienzo.strokeRect(100,40,10,100)

    lienzo.clearRect(220,80,100,10)


    //trazos
    //lineTo(x,y)| moveTo(x,y)
    lienzo.strokeStyle="#f90"
    lienzo.globalAlpha=1
    lienzo.beginPath();
    lienzo.moveTo(100,100);
    lienzo.lineTo(40,10);
    lienzo.lineTo(100,10);
    lienzo.stroke();//solo dibujar el contorno
    lienzo.closePath();

//arcos-ondas

//angulos -> radianes
// Math.PI/180 * grados
//arc(x,y,r,ang-inicial,ang-final,direccion)
//arcTo(x1,y1,x2,y2,r)
//quadraticCurveTo(pcx,pcy ,x,y)
//bezierCurveTo(pcx1,pcy1,pcx2,pcy2,x,y)


let grados20=Math.PI/180*20;
 lienzo.fillStyle="rgb(39, 12, 33)"
    lienzo.beginPath();
    lienzo.moveTo(150,50);
    lienzo.arc(200,50,40,grados20,0,true);
    lienzo.lineTo(150,50);
    lienzo.fill();// ejecuta el relleno de la figura y puedo obviar el closePath()
   
  lienzo.beginPath();
  lienzo.moveTo(20,100);
   lienzo.arcTo(20,60,100,60,30);
   lienzo.lineTo(150,50);
   lienzo.stroke();
   lienzo
  lienzo.closePath();


  lienzo.strokeStyle='green'
  lienzo.beginPath();
  lienzo.moveTo(40,130);
   lienzo.quadraticCurveTo(0,40,130,130);
   lienzo.quadraticCurveTo(100,0,30,10)
   lienzo.stroke();
  lienzo.closePath();

    lienzo.lineWidth=5
    lienzo.strokeStyle='black'
    lienzo.beginPath();
    lienzo.moveTo(140,130);
    lienzo.bezierCurveTo(40,60,200,100,140,30)
    lienzo.stroke();
    lienzo.closePath();

    //textos
    //fillText()
    //strokeText()

    lienzo.fillStyle="red";
    lienzo.lineWidth=1
    lienzo.font= "30px Verdana"
    lienzo.beginPath();
    lienzo.fillText("hola",200,100);
      lienzo.font= "20px Verdana"
    lienzo.strokeText("Chau",200,40)
    lienzo.closePath();

    const moverPalabra=(valorY)=>{
        lienzo.clearRect(100,0,300,300)
        lienzo.beginPath();
        lienzo.fillText("hola",200,valorY);
        lienzo.closePath();
    }

    let boton=document.querySelector("button");
    let toggle=false;
    let moverSecuencia;
    
    boton.addEventListener("click",()=>{
        toggle=!toggle;
        if(toggle){
            let y=10
           moverSecuencia =setInterval(()=>{
                y=y+10
                moverPalabra(y)
            },100)
        }else{
            clearInterval(moverSecuencia)
        }
    })