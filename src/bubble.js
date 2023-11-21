const { gerarLista } = require("./list-generator");

function bubbleSort(lista) {
  let trocou = false;
  let tam = lista.length;

  do {
    trocou = false;

    for (let i = 0; i < tam - 1; i++) {
      if (lista[i] > lista[i + 1]) {
        const temp = lista[i];
        lista[i] = lista[i + 1];
        lista[i + 1] = temp;

        trocou = true;
      }
    }

    tam--;
  } while (trocou);
}

const lista = gerarLista(10);
console.log("Lista Inicial: ", lista);

bubbleSort(lista);
console.log("Lista Ordenada: ", lista);
