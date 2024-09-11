// 15. Filtrando e Somando Valores
// ○ Objetivo: Crie um array de objetos transacoes, onde cada transação tem
// tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final,
// somando as entradas e subtraindo as saídas.

let transactions = [
    { type: "entrada", value: 1000 },
    { type: "saída", value: 200 },
    { type: "entrada", value: 300 },
    { type: "saída", value: 150 },
    { type: "entrada", value: 500 }
  ];
  
  let balance = 0;
  
  transactions.forEach(transaction => {
    if (transaction.type === "entrada") {
      balance += transaction.value;
    } else if (transaction.type === "saída") {
      balance -= transaction.value;
    }
  });
  
  console.log(`Final balance: $${balance.toFixed(2)}`);
  