const { gerarLista } = require("./list-generator");

function quickSort(lista, esquerda = 0, direita = lista.length - 1) {
  if (esquerda < direita) {
    let pivotIndex = partition(lista, esquerda, direita);
    quickSort(lista, esquerda, pivotIndex - 1);
    quickSort(lista, pivotIndex + 1, direita);
  }
  return lista;
}

function partition(lista, esquerda, direita) {
  let pivot = lista[direita];
  let i = esquerda - 1;

  for (let j = esquerda; j < direita; j++) {
    if (lista[j] < pivot) {
      i++;
      let temp = lista[i];
      lista[i] = lista[j];
      lista[j] = temp;
    }
  }

  let temp = lista[i + 1];
  lista[i + 1] = lista[direita];
  lista[direita] = temp;

  return i + 1;
}

const lista = gerarLista(10);
console.log("Lista Inicial: ", lista);

quickSort(lista);
console.log("Lista Ordenada: ", lista);
