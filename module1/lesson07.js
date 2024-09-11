// const prompt = require('prompt-sync')()

//<Variável>; <condição>; <incremento>
// let multiplier = Number(prompt('informe o numero que você quer saber a tabuada: '))

// for (let counter = 0; counter <= 10; counter++){
//     console.log(`${multiplier} * ${counter} =`, multiplier * counter)
// }

// //IMPRIMIR OS VALORES PARES DE 1 A 20
// for(let i = 0; i <= 20; i +=2){
//     console.log(i)
// }

// // SOMAR OS VALORES DE 1 A 100
// let sum = 0
// for(let i = 1; i <=100; i++ ){    
//     console.log(`${i} + ${sum} =`, sum += i )
// }
// console.log(sum);

// for(let i = 10; i >=1; i--){
//     console.log(i)
// }

// let i = 10

// while(i > 0 ){
//     console.log(i)
//     i--
// }

// // SOMAR OS VALORES DE 1 A 100
// let sum = 0;
// let i = 1

// while(i <= 100) {
//         sum += i;
//         i++;
//     console.log(sum)  
// }

// // FAZER UM ALGORITMO QUE RECEBA NUMEROS DECIMAIS ATÉ O USUÁRIO DIGITAR ZERO E CALCULAR A MÉDIA ARITMÉTICA DESSES NUMEROS

// const prompt = require('prompt-sync')()

// let num1 = parseFloat(prompt('Digite o primeiro número: '));
// let counter = 0;
// let sum = 0;

// while (num1 !== 0) {
//     sum += num1
//     counter++
//     num1 = parseFloat(prompt('Digite o segundo numero: '));
// }

// console.log('A média aritmetica é ', sum/counter);

const prompt = require('prompt-sync')()

let num

do {
    num = Number(prompt('Digite um valor: '))
} while (num >= 0)

