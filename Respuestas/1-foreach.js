//1-Sumar los elementos de un array de números.
let resultado = 0
let nros = [10,20,30,40,50,60,70,80,90,100]
nros.forEach(element => {
    resultado += element
});
console.log(resultado)
/* 




*/
//2-Concatenar todos los elementos de un array de cadenas de texto.
let arr = ["Hola ", "mundo ", "!"];
let result = " ";

arr.forEach(function(str) {
  result += str;
});

console.log(result); // "Hola mundo!"
/* 




*/
//3-Convertir todos los elementos de un array a mayúsculas.
let space = []
let wordMin = ["messi","maradona","pele","kante"].forEach(element => {
   space.push(element.toUpperCase())
});
console.log(space)
/* 




*/
//4-Filtrar los elementos de un array que cumplan cierta condición.
let espacio = []
let numbers = [10,20,50,100,200]
numbers.forEach(element => {
    if (element > 40) {
        espacio.push(element)
    }
})
console.log(espacio)
/* 




*/
//5-Imprimir en consola el índice y valor de cada elemento de un array.
let valor = []
let contenido = ["Existir",30,"STEPHEN",86]
contenido.forEach((element,index)=>{
    valor.push(`elemento ${element} -- index ${index}`)
})
console.log(valor)

