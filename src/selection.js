const { gerarLista } = require("./list-generator");

function obterMenor(lista, pos) {
  let min = pos;
  for (let j = pos + 1; j < lista.length; j++) {
    if (lista[j] < lista[min]) {
      min = j;
    }
  }

  return min;
}

function selectionSort(lista) {
  for (let i = 0; i < lista.length; i++) {
    let min = obterMenor(lista, i);

    if (min != i) {
      let tmp = lista[i];
      lista[i] = lista[min];
      lista[min] = tmp;
    }
  }

  return lista;
}

const lista = gerarLista(10);
console.log("Lista Inicial: ", lista);

selectionSort(lista);
console.log("Lista Ordenada: ", lista);
