//1-Filtrar los elementos de un array de números mayores a un valor dado.
let numbers = [10,20,30,40,51,75,86]
let coleccionNumbers = numbers.filter(nro => nro > 50 )
console.log("Los numeros mayores de 50 son " + coleccionNumbers)
/* 




*/
//2-Filtrar los elementos de un array de cadenas de texto que contengan cierta subcadena.
function subCadena(word) {
    let cadena = ["messi","mes","mesa","vegetti","cr7","me"]
    let subcadena = cadena.filter(e => e.includes(word))
    console.log(subcadena)
}
subCadena("e")
/* 




*/
//3-Filtrar los elementos de un array de objetos que cumplan cierta condición.
let obj = [
    {name : "ezequiel", age : 24},
    {name : "santiago", age : 20},
    {name : "jazmin", age : 21},
    {name : "oriana", age : 15},
]
let copyObj = obj.filter(e => e.age < 16)
console.log(copyObj)
/* 




*/
//4-Filtrar los elementos de un array de números que sean impares.
const nros = [30,15,17,11,20]
const nrosFilter = nros.filter(e => e % 2 !== 0)
console.log(nrosFilter)
/* 




*/
//5-Filtrar los elementos de un array de números que sean divisibles por un número dado.
function divNroX (x) {
    let nro = [10,4,2,21,6,7,13]
    let nroFuerza = nro.filter(e => e % x === 0 )
    console.log(nroFuerza)
}
divNroX(7)