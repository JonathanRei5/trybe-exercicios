function hydrate(bebidas) {
  let quantidade = bebidas.replace(/[^0-9]/g, '');
  let coposDeAgua = 0;
  quantidade.split('').forEach(copo => { coposDeAgua += Number(copo) });
  return (coposDeAgua <= 1) ? `${coposDeAgua} copo de água` : `${coposDeAgua} copos de água`;
}

module.exports = hydrate;
