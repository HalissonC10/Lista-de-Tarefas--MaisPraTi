//1. Soma dos elementos de um Array
    // Escreva uma função que receba um array de numeros como parametro e retorne a soma de todos os elementos.

// let sum = 0;
// let arr = [10, 20, 30, 40, 50, 60, 80, 90, 100]

// for(let i = 0; i < arr.length; i++){ // .length é todos os elementos do array
//     sum += arr[i]
//     console.log(sum)
// }

// Encontre o maior numero em um array

// let arr = [10, 40, 430, 34, 435, 234, 324, 23, 87]
// let max = arr[0];

// for(let j = 0; j < arr.length; j++){
//     if (arr[j] > max) {
//         max = arr[j]
//     }
// }
// console.log(max)

// // Reverter um array
// let reversed = []
// for (let k = arr.length - 1; k >= 0; k--){
//     reversed.push(arr[k])
// }
// console.log(reversed)

// Criem um novo array contendo apenas numeros pares
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let par =[]
// for (let i = 0; i < arr.length; i++){
//    if(arr[i] % 2 === 0){ 
//     par.push(arr[i])
//    }
// }
//     console.log(par)

// Contar ocorrências de um valor
// const prompt = require('prompt-sync')()
// let arr =  [10, 10, 5, 2, 10, 2, 10]
// let value = Number(prompt('Digite um valor: '));
// let count = 0;

// for(let l = 0; l <arr.length; l++){
//     if(arr[l] === value)
//         count++
// }
// console.log(`o valor ${value} repete ${count} vezes.`)

// let matriz = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// for(let i = 0; i < matriz.length; i++){
//     for(let j = 0; j < matriz[i].length; j++){
//         console.log(`Elemento na posição [${i}] [${j}]: ${matriz[i][j]}`)
//     }
// }
// Matrizes e msotrar todos os elementos

// console.table(matriz)
// console.log(matriz[1][1])

// Soma dos elementos de aRRAYS

let arr1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
let arr2 = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
]

let resultado = []
if(arr1.length !== arr2.length || arr1[0].length !== arr2[0].length){ // essa linha verifica o tamanho das matrizes (linhas e colunas)
    throw new Error ("Os arrays devem ser do mesmo tamanho") //caso sejam de tamanhos diferentes, irá retornar erro
}

for (let i = 0; i < arr1.length; i++){ // essa linha percorre as linhas da matriz
    let somaLinha = [] // variavel para armazenar as somas da matriz
    for(let j = 0; j < arr1[i].length; j++){ // essa linha percorre as colunas da matriz
        somaLinha.push(arr1[i][j] + arr2[i][j]) // soma cada elemento das duas matrizes
    }
    resultado.push(somaLinha) // adiciona os resultados no novo array
}
console.table(resultado)

