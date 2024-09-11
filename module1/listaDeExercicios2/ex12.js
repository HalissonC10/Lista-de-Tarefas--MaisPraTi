// 12. Atualizando um Array de Objetos
// ○ Objetivo: Crie um array de objetos estoque, onde cada objeto tem
// produto, quantidade e minimo. Use forEach para atualizar a quantidade
// dos produtos que estão abaixo do mínimo, duplicando suas quantidades.

let inventory = [
    { product: "Mouse", quantity: 4, minimum: 10 },
    { product: "Keyboard", quantity: 6, minimum: 12 },
    { product: "Monitor", quantity: 15, minimum: 8 }
  ];
  
  inventory.forEach(item => {
    if (item.quantity < item.minimum) {
      item.quantity *= 2;
    }
  });
  
  console.log(inventory);
  