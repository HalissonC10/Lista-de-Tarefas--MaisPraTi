// 9.Contabilizando Elementos com uma Condição
// ○ Objetivo: Crie um array de objetos clientes, cada um com propriedades
// nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
// de 30 anos.

let clients = [
    { name: "Alice", age: 28, city: "Fortaleza" },
    { name: "Bob", age: 35, city: "Natal" },
    { name: "Charlie", age: 42, city: "Santa Catarina" },
    { name: "Diana", age: 25, city: "São Paulo" }
  ];
  
  let countOver30 = 0;
  
  clients.forEach(client => {
    if (client.age > 30) {
      countOver30++;
    }
  });
  
  console.log(`Numero de clientes com mais de 30 anos: ${countOver30}`);
  