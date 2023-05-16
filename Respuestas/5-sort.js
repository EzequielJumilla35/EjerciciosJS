//1-Ordenar un array de números de menor a mayor.
function nroSort(x) {
    let nro = x
    nro.sort((a,b)=> a -b)
    console.log(nro)
}
/* 




*/
nroSort([10,5,20,25,6,12,56,23,41])
//2-Ordenar un array de cadenas de texto en orden alfabético.
function textSort(x) {
    let word = x
    word.sort((a,b) => a.localeCompare(b))
    console.log(word)
}
/* 




*/
textSort(["arbol","messi","gang","acevedo"])
//3-Ordenar un array de objetos por una propiedad dada.
let arrObj = [
    {name : "Ezequiel", edad : 24},
    {name : "Lebron", edad : 39},
    {name : "Durant", edad : 34},
    {name : "Curry", edad : 35},
    {name : "Tatum", edad : 25},
]
arrObj.sort((a, b) =>  b.edad - a.edad )
  console.log(arrObj)
  /* 




*/
//4-Ordenar un array de números de mayor a menor.
function sortMenMay (x){ 
    let nros = x
    nros.sort((a,b) => b - a)
    console.log(nros)
}
sortMenMay([33,32,44,11,54,43,35,11,7,2,100])
/* 




*/
//5-Ordenar un array de cadenas de texto por su longitud.
function sortLong(x) {
    let words = x
    words.sort((a,b)=> a.length - b.length)
    console.log(words)
}
sortLong(["hueso","espalda","adn","triceps","octagono"])