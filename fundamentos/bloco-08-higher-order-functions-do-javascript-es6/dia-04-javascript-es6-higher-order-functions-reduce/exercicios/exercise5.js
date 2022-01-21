const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function countLettersA(string) {
  return string.split('').reduce((lettersA, letter) =>
    (letter === 'A' || letter === 'a') ? lettersA + 1 : lettersA
    , 0);
}

function containsA(names) {
  return names.reduce((lettersA, name) => lettersA + countLettersA(name), 0);
}

console.log(containsA(names));
