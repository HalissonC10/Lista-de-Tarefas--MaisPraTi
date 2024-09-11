// 3. Filtrando Propriedades de Objetos
// ○ Objetivo: Dado um objeto produto com várias propriedades, crie uma
// função que retorna um novo objeto contendo apenas as propriedades cujo
// valor seja maior que um valor específico. Use for in para filtrar as
// propriedades.

let product = {
    name: "Laptop",
    price: 1200,
    stock: 30,
    weight: 2,
    discount: 10
  };
  
  function filterPropertiesByValue(obj, minValue) {
    let filteredProduct = {};
  
    for (let property in obj) {
      if (obj[property] > minValue) {
        filteredProduct[property] = obj[property];
      }
    }
  
    return filteredProduct;
  }
  
  let result = filterPropertiesByValue(product, 20);
  console.log(result);
  