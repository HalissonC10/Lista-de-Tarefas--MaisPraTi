// 6. Filtrando Arrays de Objetos
// ○ Objetivo: Crie um array de objetos funcionarios, onde cada objeto
// contém informações como nome, cargo, e salario. Use for of para filtrar
// e exibir apenas os funcionários cujo salário seja maior que um valor
// específico


let employees = [
    { name: "Maria", position: "Manager", salary: 5000 },
    { name: "Jose", position: "Analyst", salary: 3000 },
    { name: "Ana", position: "Developer", salary: 7000 },
    { name: "Paulo", position: "Designer", salary: 4500 },
    { name: "Linda", position: "Sales", salary: 3500 },
    { name: "Gabriel", position: "Support", salary: 2900 },
    { name: "Emily", position: "HR", salary: 4000 }
  ];
  
  let minimumSalary = 4000;
  
  for (let employee of employees) {
    if (employee.salary > minimumSalary) {
      console.log(`Nome: ${employee.name}, Cargo: ${employee.position}, Salario: ${employee.salary}`);
    }
  }
  
  