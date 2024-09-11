// 11.Agrupando Elementos com forEach
// ○ Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
// cliente, produto, e quantidade. Use forEach para criar um objeto que
// agrupa a quantidade total de produtos por cliente.

let orders = [
    { client: "Alice", product: "Laptop", quantity: 2 },
    { client: "Bob", product: "Smartphone", quantity: 1 },
    { client: "Alice", product: "Headphones", quantity: 3 },
    { client: "Bob", product: "Laptop", quantity: 1 },
    { client: "Charlie", product: "Smartphone", quantity: 2 }
  ];
  
  let clientTotals = {};
  
  orders.forEach(order => {
    if (!clientTotals[order.client]) {
      clientTotals[order.client] = 0;
    }
    clientTotals[order.client] += order.quantity;
  });
  
  console.log(clientTotals);
  