// let serie = { // um objeto é declarado com chaves
//     nome: 'The boys', // chave-valor
//     genero: ['Ação, Paródia, Heróis'],
//     nrTemporadas: 4,
//     status: 'Em andamento', 
//     classificacao: 18,
//     nrEpisodios: {
//         temp1: 10,
//         temp2: 10,
//         temp3: 10
//     },

//     mostrarCaracteristicas: function() {
//        return ` O nome da serie é: ${this.nome} e sua classificação é + ${ this.classificacao}`  // this chama 
//     }
// }
// console.log(serie.mostrarCaracteristicas())

let livro = {
    nome: 'Diario de um Banana',
    genero: ['Comedia, romance'],
    dataLancamento: '2012',
    autor: 'Halisson',
    statusLeitura: 'Finalizado',
    paginas:'200',
    idioma:['Inglês, Português'],

//     mostrarCaracteristicas: function(){
//         return `${this.nome} foi escrito por ${this.autor}`
//     }
 }

for(let key in livro){
    console.log(livro[key])
}
// console.log(livro.mostrarCaracteristicas())

// let carro = {
//     nome: 'Corolla',
//     marca: 'Toyota',
//     velMax: 210,
//     ano: 2019,

//     acelerar: function(){
//         return `${this.nome} é da marca ${this.marca} e atinge ${this.velMax}KM por hora` 
//     }

// }
// console.log(carro)
// console.log(carro.acelerar())

// let obj1 ={
//     nome: 'Bruce',
//     profissao: 'Batman'
// }

// let obj2 = obj1 // adicionando um obj dentro do outro
// obj2.companheiro = 'Robin'

// console.log(obj1)
// console.log(obj2)

// function computador(processador, gpu, ram, armazenamento){
//     this.processador = processador
//     this.gpu = gpu
//     this.ram = ram
//     this.armazenamento = armazenamento

//     this.ligar = function(){
//         console.log(`O ${this.processador} está funcionando`)
//     }

//     this.mostrarEspecificacoes = function() {
//         return`
//         processador: ${this.processador}
//         gpu: ${this.gpu}
//         ram: ${this.ram}
//         armazenamento? ${this.armazenamento}
//             `
//     }
// }
// let pc = new computador("I9", "RTX 3060", "32gb", "1TB SSD")
// console.log(pc.mostrarEspecificacoes())

// function jogos(titulo, genero, anoLancamento, empresa){
//     return{
//         titulo,
//         genero,
//         anoLancamento,
//         empresa
//     }
// }

// let jogo1 = jogos("GTA V", "AÇAO", "2015", "ROCKSTAR")
// // console.log(jogo1)

// // 3 estruturas de repetição for in, for of, forEach - São mais especificas para interar sobre arrays e objetos.

// for(let key in jogo1){ //FOR IN utiliza a estrutura "chave-valor, consigo acesar determinada posição dentro de um segundo array, sendo um objeto"
//     // console.log(`${key}: ${jogo1[key]}`)
// }

// const jogadores = ['Pelé', 'CR7', 'MESSI'] //FOR OF acesso a posição em si. - 

// for(let jogador of jogadores){
//     // console.log(jogador)
// }

// for(let key in jogadores){
//     // console.log(jogadores[key])
// }