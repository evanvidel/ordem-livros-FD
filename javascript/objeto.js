const autor = {
    id: "j-k-rowling",
    nome: "j. K. rowling",
    idade: 65,
    imagem: "https://s2.glbimg.com/XsbfFRDdcLdvQyLaQPsvHvbAYvs=/e.glbimg.com/og/ed/f/original/2020/11/10/50414449_1979923558782917_748461144397578240_o.jpg",
    biografia: "...",
}

console.log(autor.id);
console.log(autor.imagem);
console.log(autor.idade);

let livro = {
    id: "harry-potter-e-a-pedra-filosofal",
    nome: "Harry Potter e a Pedra Filosofal",
    autor: autor,
    ano: 1997,
    ordem: 1,
    imagem:"https://m.media-amazon.com/images/I/81pB+joKL4L._SL1500_.jpg"
}

console.log(livro.nome);
console.log(livro.autor.nome);

