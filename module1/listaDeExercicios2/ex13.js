// 13. Implementando um Carrinho de Compras
// ○ Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um
// array de objetos. Cada objeto dentro de itens deve representar um
// produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
// para calcular o valor total do carrinho.

let cart = {
    items: [
      { name: "Apple", quantity: 5, unitPrice: 0.5 },
      { name: "Bread", quantity: 2, unitPrice: 2.0 },
      { name: "Milk", quantity: 1, unitPrice: 1.5 },
      { name: "Cheese", quantity: 3, unitPrice: 4.0 },
      { name: "Eggs", quantity: 12, unitPrice: 0.2 }
    ]
  };
  
  let totalAmount = 0;
  
  cart.items.forEach(item => {
    totalAmount += item.quantity * item.unitPrice;
  });
  
  console.log(`Total cart value: $${totalAmount.toFixed(2)}`);
  
  