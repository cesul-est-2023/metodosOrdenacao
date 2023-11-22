const { gerarLista } = require("./list-generator");

const lista = gerarLista(10);
console.log("Lista não ordenada: ", lista);

lista.sort((a, b) => {
  return a - b;
});

console.log("Lista ordenada: ", lista);
