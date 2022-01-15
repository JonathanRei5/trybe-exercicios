function techList(listTech, namePerson) {
  if (listTech.length === 0) {
    return 'Vazio!';
  }
  let retorno = [];
  listTech.sort();
  listTech.forEach(tech => {
    let obj = {
      tech: tech,
      name: namePerson,
    };
    retorno.push(obj);
  });
  return retorno;
}

module.exports = techList;
