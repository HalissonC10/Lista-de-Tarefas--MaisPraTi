let carros = Array() // Array é uma estrutura de dados e no js é como um objeto. Pode ocupar mais de uma posição na memoria

carros [0] = 'Civic'
carros [1] = '10'
carros [2] = true
carros ['Halisson'] = 10

let motos = Array('cbr', 10, 'halisson')
let livros = ['cbr', 10, 'masdamdas']
// console.log(carros)
// console.log(motos)
// console.log(livros)

// motos.push('kawasaki') //adiciona no array na ultima posição
// motos.unshift('honda') // adiciona no array na primeira opção
// motos.pop() // elimina o ultimo elemento do array
// motos.shift() // elimina o primeiro elemento do array
motos.splice(1, 1) // O método splice() altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.
console.log(motos)