//HOF -> high Order Function 
//funciones que devuelveo o contiene otras funciones 
//map() - forEach() - filter() - find()
//callbacks 

//de bajo nivel -> funcion que trabajen o devuelvan valores 
//isNaN()- Math.round() - parseInt()

let lista=['papa','manzana','zanahoria'];
let numeros=[1,3,4,5,6,78,8]

let resultado=lista.map((val)=>{
  return  val+" producto"
});
console.log(resultado);

//array.reduce((acum,valorActual)=>{},valorInicial) - devolver un unico valor 

let total=numeros.reduce((acum,val)=>{
   return acum+val;
},0);
console.log(total);

//  some() - every() -> devuelven booleanos


console.log(lista.some((val)=>{ return val.length >5}))
console.log(numeros.every((num)=> num%2 ==0))

//Git - Github


//proxima clase:
// como descargarnos repositorios remotos 
//animacion 3D