//1-Sumar todos los elementos de un array de números.
let nrosReduce = [10,20,30,40]
let coleccionNrosReduce = nrosReduce.reduce((acc,curr) => {
   return acc + curr
},0)
console.log(coleccionNrosReduce)
/* 




*/
//2-Concatenar todos los elementos de un array de cadenas de texto.
let textReduce = ["messi","box","canelo"]
let coleccionTextReduce = textReduce.reduce((acc,curr)=>{
    return acc + " " + curr
})
console.log(coleccionTextReduce)
/* 




*/
//3-Encontrar el número mayor de un array de números.
let nroMayor = [10,25,3,15]
let coleccionNroMayor = nroMayor.reduce((acc,curr) => {
    return acc > curr ? acc : curr 
},0)
console.log(coleccionNroMayor)
/* 




*/
//4-Contar la cantidad de elementos de un array que cumplan cierta condición.
let arrNro = [10 , 20 , 35 , 50, 55, 75, 100]
let arrNroFilter = arrNro.filter(e => e > 74)
let arrNroReduce = arrNroFilter.reduce((acc,curr)=> {
    return acc + curr
})
console.log(arrNroReduce)
/* 




*/
//5-Calcular el promedio de un array de números.
function numbers(x) {
    let nros = x
    let suma = nros.reduce((acc,curr)=>{
        return acc + curr
    })
    const average = suma / x.length
    console.log("El promedio es " + average)
}
numbers([10,20,30,40])