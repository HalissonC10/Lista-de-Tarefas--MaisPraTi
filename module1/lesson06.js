// console.log(10 > 5)
// console.log(10 < 5)
// console.log(10 <= 5)
// console.log(10 >= 5)
// console.log(10 == 5)
// console.log(10 == '5')

// console.log(10 < 5) && (10 > 2)
// console.log(10 > 5) || (10 < 2)
// console.log(10 > 5) || !(10 < 2)
// console.log(!(10 > 5)) || (10 < 2)

// let  user = "Halisson"
// let password = "1234"

// let authetication = user == 'Halisson' && password =='1234'
// console.log(authetication)

// const grade = 50

// if(grade >= 60) {
//     console.log('APROVADO!')

// } else {  
//     console.log("Reprovado")
// }

// let age = 17

// if ((age >= 18) && (age <= 32)){
//     console.log('Poderá participar do concurso')
// }
// else { 
//     console.log('Não poderá participar')
// }


// let num1 = 56565635452
//  num1 % 2 === 0 ? console.log('PAR!') : console.log('IMPAR!')

// let num1 = 0

// if (num1 % 2 ===0){
//     console.log('PAR')
// }
// else {
//     console.log('IMPAR')
// }


// let num1 = 2
// let num2 = 2
// let num3 = 2

// if((num1 > num2)  && (num1 > num3)) {
//     console.log('O primeiro numéro é o maior')
// }
// else if((num2 > num1) && (num2 > num3)) {
//     console.log('o 2 é o maior')
// }
// else if((num3 > num1) && (num3 > num2)) {
//     console.log(' o 3 é o maior')
// }
// else if (num1 = num2 = num3){
//     console.log('sao iguais')
// }

// const prompt = require('prompt-sync')()

// let num1 = Number(prompt("Insira o primeiro valor: "))
// let num2 = Number(prompt("Insira o segundo valor: "))
// let operation = (prompt("escolha a operação desejada (+, -, /, *):"))
// let result = 0 

// if(operation === '+') {
//     result = num1 + num2
// } else if (operation === '-') {
//     result = num1 - num2
// } else if (operation === '*') {
//     result = num1 * num2
// } else if (operation === '/') {
//     if(num2 !== 0){      
//     result = num1 / num2
// } else {
//      console.log('Erro: divisão por zero')
//      result = undefined
//     }
// } else {
//     console.log('operação inválida')
// }

// if(result !== undefined){
//     console.log("Resultado: ", result)
// }

// const prompt = require('prompt-sync')()


// let option = Number(prompt('Escolha o primeiro valor: '))

// switch(option) {
//     case 1:
//         console.log('Você selecionou Segunda - feira')
//         break
//    case 2 :
//         console.log('você escolheu terça feira')
//         break
//    case 3 :
//         console.log('você escolheu quarta feira')
//         break
//    case 4 :
//         console.log('você escolheu quinta feira')
//         break
//    case 5 :
//         console.log('você escolheu sexta feira')
//         break
//    case 6 :
//         console.log('você escolheu sabádo')
//         break
//    case 7 :
//         console.log('você escolheu Domingo')
//         break
//     default :
//         console.log('Você não escolheu nenhuma das opções')
//         break
// }

 const prompt = require('prompt-sync')()

 let num1 = Number(prompt("Insira o primeiro valor: "))
 let num2 = Number(prompt("Insira o segundo valor: "))
 let operation = (prompt("escolha a operação desejada (+, -, /, *):"))
 let result = 0 

 switch(operation) {
     case '+':
         result = num1 + num2
         break
    case '-':
     result = num1 - num2
         break
    case '*':
    result = num1 * num2
         break
     case '/':
    if (num2 !== 0) {
         result = num1 / num2;
     } else {
         console.log('Erro: divisão por zero');
         result = undefined;
     }
     result = num1 / num2
     default:
         console.log('Operação inválida')
         result = undefined
         break
 }

 if (result !== undefined) {
     console.log("Resultado: ", result);
 }

//  const prompt = require('prompt-sync')();

//  let num1 = Number(prompt("Insira o primeiro valor: "));
//  let num2 = Number(prompt("Insira o segundo valor: "));
//  let operation = prompt("Escolha a operação desejada (+, -, /, *):");
//  let result = 0;

// switch (operation) {
//     case '+':
//         result = num1 + num2;
//         break;
//     case '-':
//         result = num1 - num2;
//         break;
//     case '*':
//         result = num1 * num2;
//         break;
//     case '/':
//         if (num2 !== 0) {
//             result = num1 / num2;
//         } else {
//             console.log('Erro: divisão por zero');
//             result = undefined;
//         }
//         break;
//     default:
//         console.log('Operação inválida');
//         result = undefined;
//         break;
// }

if (result !== undefined) {
    console.log("Resultado: ", result);
}
