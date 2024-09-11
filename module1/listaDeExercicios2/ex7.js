// 7. Modificando Objetos em um Array
// ○ Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
// preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
// os produtos e exibir o novo preço.

let products = [
    { name: "Laptop", price: 1200, discount: 0 },
    { name: "Smartphone", price: 800, discount: 0 },
    { name: "Headphones", price: 150, discount: 0 }
  ];
  
  products.forEach(product => {
    let discountAmount = product.price * 0.10;
    product.price -= discountAmount;
    console.log(`Nome: ${product.name}, Novo preço: ${product.price.toFixed(2)}`);
  });
  