let titulo = document.getElementById('titulo')
    
titulo.textContent = "Aula de JS Básico"

titulo.innerHTML = "Mudei o conteúdo do titulo novamente"

titulo.style.color = "blue"

let botao = document.getElementById('botao')

botao.addEventListener('click', () =>{
    alert('Você clicou no botão')
})

let novoParagrafo = document.createElement('p')

novoParagrafo.innerHTML = "Este é um paragrafo criado pelo JS"

document.body.appendChild(novoParagrafo)