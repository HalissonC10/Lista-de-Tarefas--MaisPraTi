// 1. Acessando Propriedades de Objetos. ○ Objetivo: Crie um objeto carro com propriedades como marca, modelo,
// ano, e cor. Use for in para iterar sobre as propriedades e exibir seus
// valores no console.

let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "Silver"
  };
  
  for (let property in car) {
    console.log(property + ": " + car[property]);
  }
  