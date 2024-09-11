// 2. Verificando Propriedades
// ○ Objetivo: Crie um objeto livro com propriedades titulo, autor,
// anoPublicacao e genero. Verifique se a propriedade editora existe no
// objeto usando for in. Se não existir, adicione essa propriedade ao objeto.

let book = {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    publicationYear: 1997,
    genre: "Fantasy"
  };
  
  let hasPublisher = false;
  
  for (let property in book) {
    if (property === "publisher") {
      hasPublisher = true;
      break;
    }
  }
  
  if (!hasPublisher) {
    book.publisher = "Bloomsbury";
  }
  
  console.log(book);
  