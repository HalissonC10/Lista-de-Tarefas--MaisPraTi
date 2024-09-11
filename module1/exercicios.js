// Exercicio 1
// const prompt = require('prompt-sync')()
// let num =  Number(prompt('Digite um numero: '))

// if (num > 0){
//     console.log('O numero é positivo')
// } else if (num < 0 ) {
//     console.log('O numéro é negativo')
// } else {
//     console.log('O numéro é zero')
// }

// Exercicio 2
// const prompt = require('prompt-sync')()

// let year = Number(prompt('Digite um ano: '))

// if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
//     console.log(`${year} é um ano bissexto:` )
// } else {
//     console.log(`${year} não é um ano bissexto`)
// }

// Exercicio 3
// const prompt = require('prompt-sync')()

// let note1 = parseFloat(prompt('Digite a primeira nota: '))
// let note2 = parseFloat(prompt('Digite a segunda nota: '))
// let note3 = parseFloat(prompt('Digite a terceira nota: '))
// let med = (note1 + note2 + note3)/3

// if(med >= 8){
//     console.log('Você tirou um A')
// } else if (med >= 5){
//     console.log('Você tirou um B')
// } else if (med <= 4){
//     console.log('Você tirou um C')
// } else (
//     console.log('Você digitou uma nota inválida')
// )

// Exercicio 4
// const prompt = require('prompt-sync')()
// let num = Number(prompt('Digite um numero: '));

// if(num % 2 !== 0){
//     console.log('O numero é impar')
// } else {
//     console.log('O numero é par')
// }

// Exercicio 5
// const prompt = require('prompt-sync')();

// let age = Number(prompt('Digite sua idade: '));

// if (age >= 5 && age <= 7) {
//     console.log('Sua categoria é Infantil A');
// } else if (age >= 8 && age <= 10) {
//     console.log('Sua categoria é Infantil B');
// } else if (age >= 11 && age <= 13) {
//     console.log('Sua categoria é Juvenil A');
// } else if (age >= 14 && age <= 17) {
//     console.log('Sua categoria é Juvenil B');
// } else if (age >= 18) {
//     console.log('Sua categoria é Adulto');
// } else if (age < 5) {
//     console.log('Você não tem idade para nadar');
// }

// Exercicio 6
// const prompt = require('prompt-sync')()

// let num = Number(prompt('Digite um numero de 1 a 7: '))

// switch (num){
//     case 1 :
//         console.log('Você selecionou Domingo')
//         break
//     case 2 :
//         console.log('Você selecionou Segunda-Feira')
//         break
//     case 3 :
//         console.log('Você selecionou Terça-Feira')
//         break
//     case 4 :
//         console.log('Você selecionou Quarta-Feira')
//         break
//     case 5 :
//         console.log('Você selecionou Quinta-Feira')
//         break
//     case 6 :
//         console.log('Você selecionou Sexta-Feira')
//         break
//     case 7 :
//         console.log('Você selecionou Sábado')
//         break
//     default : 
//         console.log('Erro: você digitou um numero inválido')
// }

// Exercicio 7
// const prompt = require('prompt-sync')()

// let num1 = Number(prompt('Digite um valor:'))
// let num2 = Number(prompt('Digite outro valor:'))
// let operation = (prompt('Escolha a operação: +, -, /, *: '))
// let result = 0

// switch (operation){
//     case '+':
//         result = num1 + num2
//         console.log(`A soma de ${num1} + ${num2} é =`, result)
//         break        
//     case '-':
//         result = num1 - num2
//         console.log(`A subtração de ${num1} - ${num2} é = `, result)
//          break       
//     case '/':
//         if (num2 === 0){
//             console.log('Erro divisão por zero')
//         } else {
//             result = num1 / num2
//             console.log(`A divisão de ${num1} / ${num2} é = `, result)
//         }
       
//          break        
//     case '*':
//          result = num1 * num2
//          console.log(`A multiplicação de ${num1} * ${num2} é = `, result)
//           break          
//     default :
//         console.log('Você digitou uma operação invalida')   
// }   

// Exercicio 8
// const prompt = require('prompt-sync')()

// let num = Number(prompt('Digite um número de 1 a 4: '))

// switch(num) {
//     case 1 :
//         console.log('Primavera')
//         break
//     case 2 :
//         console.log('Verão')
//         break
//     case 3 :
//         console.log('Outono')
//         break
//     case 4 :
//         console.log('Inverno')
//         break
//     default :
//         console.log('Numro inválido')
// }

// Exercicio 9
// const prompt = require('prompt-sync')();

// let age = Number(prompt('Digite sua idade: '));
// let faixaEtaria;

// if (age <= 12) {
//     faixaEtaria = 'crianca';
// } else if (age >= 13 && age <= 17) {
//     faixaEtaria = 'adolescente';
// } else if (age >= 18 && age <= 59) {
//     faixaEtaria = 'adulto';
// } else if (age >= 60) {
//     faixaEtaria = 'idoso';
// } else {
//     faixaEtaria = 'invalida';
// }

// switch (faixaEtaria) {
//     case 'crianca':
//         console.log('Você é uma criança.');
//         break;
//     case 'adolescente':
//         console.log('Você é um adolescente.');
//         break;
//     case 'adulto':
//         console.log('Você é um adulto.');
//         break;
//     case 'idoso':
//         console.log('Você é um idoso.');
//         break;
//     default:
//         console.log('Idade inválida.');
// }

// Exercicio 10

// const prompt = require('prompt-sync')();

// Leitura do peso e altura
// let peso = Number(prompt('Digite seu peso em kg: '));
// let altura = Number(prompt('Digite sua altura em metros: '));

// Cálculo do IMC
// let imc = peso / (altura ** 2);
// console.log(`Seu IMC é: ${imc.toFixed(2)}`);

// let categoria;

// Estrutura if/else para determinar a categoria do IMC
// if (imc < 18.5) {
//     categoria = 'abaixo do peso';
// } else if (imc >= 18.5 && imc <= 24.9) {
//     categoria = 'peso normal';
// } else if (imc >= 25 && imc <= 29.9) {
//     categoria = 'sobrepeso';
// } else if (imc >= 30 && imc <= 34.9) {
//     categoria = 'obesidade grau I';
// } else if (imc >= 35 && imc <= 39.9) {
//     categoria = 'obesidade grau II';
// } else if (imc >= 40) {
//     categoria = 'obesidade grau III';
// } else {
//     categoria = 'inválido';
// }

// // Estrutura switch para imprimir a mensagem correspondente
// switch (categoria) {
//     case 'abaixo do peso':
//         console.log('Você está abaixo do peso.');
//         break;
//     case 'peso normal':
//         console.log('Você está com peso normal.');
//         break;
//     case 'sobrepeso':
//         console.log('Você está com sobrepeso.');
//         break;
//     case 'obesidade grau I':
//         console.log('Você está com obesidade grau I.');
//         break;
//     case 'obesidade grau II':
//         console.log('Você está com obesidade grau II.');
//         break;
//     case 'obesidade grau III':
//         console.log('Você está com obesidade grau III.');
//         break;
//     default:
//         console.log('Erro: Valor de IMC inválido.');
// }

