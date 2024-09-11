// let test = function () {
//     console.log('Olá mundo')
// } 


// function showFunction(sucessCallback, erroCallback){
//     if(false){
//         sucessCallback('Requisição bem sucedida')
//     } else {
//         erroCallback('Erro na requisição')
//     }
// }

// let sucessCallback = function(message){
//     console.log(message)
// }

// let erroCallback = (message) => {
//     console.error(message)
// }
// showFunction(sucessCallback, erroCallback)

// 1 Soma dos elementos de um Array

// let arrSum = function(arr){
//     let sum = 0 
    
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i]
//     }
//     return sum
// }

// let arr = [10, 20, 30, 40]
// let sum = arrSum(arr)
// console.log(sum)

// 2. encontre o maior numero do Array

// function findMax (arr){
//     let max = arr[0]
//     for(let j = 0; j < arr.length; j++){
//         if (arr[j] > max) {
//             max = arr[j]
//         }
//     }
//     return max
// }
// let arr = [1, 2, 10, 4, 5]
// console.log(findMax(arr))

//METODOS

// let nome = "Halisson"

// console.log('Halisson'.length);// tamanho da string
// console.log('Halisson'.charAt(0));//  mostra o elemento na posição desejada
// console.log(nome.indexOf('i'));// procura a posição do elemento indicado

//console.log(nome.replace('Ha', 'Ja'))

// console.log(nome.substr(1, 3))// indica a partir de tal posição, delimite os outros caracters
// console.log(nome.toLocaleUpperCase())// coloca tudo em letra maiúscula
// console.log(nome.toLocaleLowerCase())// coloca tudo em letra minúscula

// console.log('-' + nome.trim() + '-') // remove espaços em branco nas extremidades

//MATEMATICOS

// console.log(Math.ceil(100.73))// arredonda o valor para cima
// console.log(Math.floor(100.73)) // arredonda o valor para baixo
// console.log(Math.round(100.73)) // arredonda de forma lógica, a partir da metade pra cima e antes para baixo
// console.log(Math.sqrt(100))// Raiz quadrada
// console.log(Math.pow(100, 2))// Potência
// console.log(Math.cbrt(100))// Raiz cúbica
// console.log(Math.abs(100.20))// Numero absoluto
// console.log(Math.random())// Gera um numero aleatorio entre 0 e 1
// toFixed()// Limita casas decimais

//DATAS

// let date = new Date() // sempre que usar datas, tem que ser inicializada assim
// console.log(date.getDate()) // mostra o dia de hoje
// console.log(date.getMonth() + 1)// mostra o mÊs e + 1 é pq começa a contagem do 0 a 11 na programação.
// console.log(date.getFullYear())// mostra o ano

// date.setDate(date.getDate() + 200) // altera a data somada com a quantidade de dias
// console.log(date.toString())

// date.setUTCFullYear(date.getFullYear() + 12) // muda o ano
// console.log(date.toString())    

// let date1 = new Date(2024, 7 , 21)
// let date2 = new Date(2023, 7 , 21)
// console.log(date1.toString())

// console.log(date1.getTime())// conta os milissegundos desde 1970 a data 0 do Javascript
// console.log(date2.getTime())// conta os milissegundos desde 1970 a data 0 do Javascript

//  let miliseconds_between_dates = Math.abs(date1.getTime() - date2.getTime())// calcula a diferença de milissegundos de duas datas
// // console.log(miliseconds_between_dates)

// let milisecond_per_day = (1 * 24 * 60 * 60 * 1000)
// console.log(`Um dia tem ${milisecond_per_day} milisegundos`)

// console.log(`A diferença entres as datas é de ${Math.ceil(miliseconds_between_dates/milisecond_per_day)} dias`)

//criar funções para inverter string, outra para mostrar a diferença de dias entre anos e etc