//1-Duplicar los elementos de un array de números.
let dupNum = [1,2,4,8,16]
let copiaDupNum = dupNum.map(e => e * 2)
console.log(copiaDupNum)
/* 




*/
//2-Convertir los elementos de un array de números a su valor absoluto.
let absNum = [-100,-200,-300]
let copiaAbsNum = absNum.map(e => Math.abs(e))
console.log(copiaAbsNum)
/* 




*/
//3-Multiplicar cada elemento de un array de números por un factor dado.
function multiply(nro) {
    let numbers = [10,20,30,40]
   let resultado = numbers.map(e => e *= nro)
    console.log(resultado)
}
multiply(10)
/* 




*/
//4-Convertir los elementos de un array de cadenas de texto a números.
const arrayStrings = ["Messi", "20", "30", "40"];
const arrayNumeros = arrayStrings.map(elemento => parseInt(elemento));
console.log(arrayNumeros); // [10, 20, 30, 40]
/* 




*/
//5-Crear un nuevo array con los primeros caracteres de cada elemento de un array de cadenas de texto.
let newArray = ["Mark","Junior","Paul","Lebron"]
let copiaNewArray = newArray.map(e => e.charAt(0))
console.log(copiaNewArray)