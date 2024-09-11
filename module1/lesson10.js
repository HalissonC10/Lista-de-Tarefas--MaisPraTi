// let thingsList = Array() 

// thingsList['hardware'] = Array() // string tbm é forma de declarar um array, em vez da posição ser '0' é 'hardware'
// thingsList['fruits'] = Array()
// thingsList['peoples'] = Array('Halisson', 'José')

// thingsList['hardware'][0] = 'Notebook'
// thingsList['hardware'][1] = 'teclado'
// thingsList['fruits'][0] = 'Laranja'
// thingsList['hardware'][2] = 'Mouse'
// thingsList['fruits'][1] = 'Maçã'

// console.table(thingsList)

// let fruitList = Array()

// fruitList[0] = 'Maçã'
// fruitList[1] = 'Ameixa'
// fruitList[2] = 'Limão'
// fruitList[3] = 'Goiaba'
// fruitList[4] = '0'

// //console.log(fruitList.sort()) // essa função organiza o array em ordem alfabetica
// // // esse metodo mostra a a posição em que ele está no array

// let index = fruitList.indexOf('Morango')

// if(index === - 1){ // esse if está verificando se o indexof indicado existe ou não
//     console.log('O elemento não existe')
// } else {
//     console.log(`O elemento existe e está na posição ${index}`)
// }

// let numberList = []

// numberList[0] = 10
// numberList[1] = 59
// numberList[2] = 560
// numberList[3] = 40
// numberList[4] = 140
// numberList[5] = 15

// console.log(numberList.sort((a, b) => a -b))

// A função calculateLandArea recebe dois parâmetros, width (largura) e heigth (altura), e calcula a área
// function calculateLandArea(num1, num2) { 
//     let area = num1 * num2
//     return area
// }

// let width = 55
// let heigth = 26
// //A área é calculada chamando a função calculateLandArea com os valores de width e heigth:
// let area = calculateLandArea(width, heigth)

// console.log(`a area possui ${area} metros quadrados`)

// 3 escopos no js 
// Global: variavel se torna global, pode ser chamada em qualquer parte do script
// função: a variavel só existe dentro do escopo
// bloco: variaveis criadas dentro de estruturas condicionais como if/switch

let alfabeto = ['b', 'd', 'a', 'c']

function ordena(arrayVerfica){ // função para ordenar o array
    return arrayVerfica.sort() // metodo que coloca o array em ordem alfabética
}
console.log(ordena(alfabeto))
