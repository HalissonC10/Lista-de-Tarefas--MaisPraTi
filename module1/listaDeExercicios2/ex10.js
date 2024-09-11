// 10. Criando Relatórios com Objetos e Arrays
// ○ Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
// quantidade e valor. Use forEach para calcular o valor total de vendas de
// todos os produtos.

let sales = [
    { product: "Laptop", quantity: 5, value: 1200 },
    { product: "Smartphone", quantity: 10, value: 800 },
    { product: "Headphones", quantity: 15, value: 150 }
  ];
  
  let totalSales = 0;
  
  sales.forEach(sale => {
    totalSales += sale.quantity * sale.value;
  });
  
  console.log(`Total de vendas: $${totalSales.toFixed(2)}`);
  