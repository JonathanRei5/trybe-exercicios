const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

// escreva filterPeople abaixo

function filterPeople(people) {
  return people.filter((person) => {
    const { bornIn, nationality } = person;
    if (nationality !== 'Australian') {
      return false;
    }
    if (bornIn > 1900 && bornIn < 2001) {
      return true;
    }
    return false;
  });
}

console.log(filterPeople(people));
