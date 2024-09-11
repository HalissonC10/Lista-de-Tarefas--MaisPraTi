// const professor = {
// name:"Halisson",
// subject: 'physics',
// grades: {
//     aluno1: 9.0,
//     aluno2: 5.0,
//     aluno3: 5.8,
//     aluno4: 8.0,
//     aluno5: 7.5,
//     aluno6: 0.0,
// },
// }

// let totalNotas = 0;
// let totalAlunos = 0;

// for(let aluno in professor.grades){
//     totalNotas += professor.grades[aluno]
//     totalAlunos++
// }

// let media = totalNotas/totalAlunos
// console.log(`A media dos alunos é: ${media.toFixed(2)}`)
// console.log(media >= 6 ?
//      `${professor.name} está acima da media` 
//     : `${professor.name} está abaixo da média`
// )

// const library = [
//     {title: "Diario", autor: "Halisson", year: 1999 }, 
//     {title: "banana", autor: "jk", year: 2001 }, 
//     {title: "cronica", autor: "jose", year: 1850 } 
// ]

// for(let livro of library){
//     if(livro.year < 2000)
//     console.log(livro)
// }

const movies = [
    {title: "tropa de elite", genre: "açao"},
    {title: "velozes", genre: "açao"},
    {title: "batman", genre: "suspense"},
    {title: "amor", genre: "romance"},
    {title: "interestelar", genre: "sci-fi"},
    {title: "xingilingui", genre: "romance"},

]

let genreCount = {}
movies.forEach(movie => {
    if(genreCount[movie.genre]){
        genreCount[movie.genre]++
    } else {
        genreCount[movie.genre] = 1
    }
})

for(let genre in genreCount){
    console.log(`Existem ${genreCount[genre]} filmes do gênero ${genre}`)
}