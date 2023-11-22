class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

const listaPessoas = [
  new Pessoa("Joao", 20),
  new Pessoa("Maria", 25),
  new Pessoa("Pedro", 17),
  new Pessoa("Ana", 29),
  new Pessoa("Tiago", 35),
  new Pessoa("Beatriz", 19),
];

console.log("Pessoas - Não Ordenadas: ", listaPessoas);

listaPessoas.sort((a, b) => {
  return a.idade - b.idade;
});

console.log("Pessoas - Ordenadas por Idade: ", listaPessoas);

listaPessoas.sort((a, b) => {
  return a.nome.localeCompare(b.nome);
});

console.log("Pessoas - Ordenadas por Nome: ", listaPessoas);
