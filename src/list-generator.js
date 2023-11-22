function gerarLista(tam) {
  const result = [];

  for (let i = 0; i < tam; i++) {
    result[i] = parseInt(Math.floor(Math.random() * 1000));
  }

  return result;
}

module.exports = {
  gerarLista,
};
