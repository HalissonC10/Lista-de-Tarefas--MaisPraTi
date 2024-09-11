// 4. Iterando Sobre Arrays de Objetos
// ○ Objetivo: Crie um array de objetos pessoas, onde cada objeto representa
// uma pessoa com nome, idade, e cidade. Use for of para exibir as
// informações de cada pessoa no console.

let pessoas = [
    { nome: "John", idade: 25, cidade: "New York" },
    { nome: "Anna", idade: 30, cidade: "London" },
    { nome: "Carlos", idade: 28, cidade: "São Paulo" }
  ];
  
  for (let pessoa of pessoas) {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`);
  }
  