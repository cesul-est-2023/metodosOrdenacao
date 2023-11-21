const { gerarLista } = require("./list-generator");

function insertionSort(lista) {
  for (let i = 1; i < lista.length; i++) {
    let atual = lista[i];
    let j = i - 1;

    while (j > -1 && atual < lista[j]) {
      lista[j + 1] = lista[j];
      j--;
    }

    lista[j + 1] = atual;
  }

  return lista;
}

const lista = gerarLista(10);
console.log("Lista Inicial: ", lista);

insertionSort(lista);
console.log("Lista Ordenada: ", lista);
