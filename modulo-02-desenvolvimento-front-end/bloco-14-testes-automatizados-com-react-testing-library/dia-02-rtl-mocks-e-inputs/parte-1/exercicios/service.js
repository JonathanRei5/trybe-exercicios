function randomNumber() {
  return Math.round(Math.random() * 100);
}

function toUpperCase(text) {
  return text.toUpperCase();
}

function firstLetter(text) {
  return text.length > 0 ? text[0] : '';
}

function concat(textA, textB) {
  return textA.concat(textB);
}

module.exports = { randomNumber, toUpperCase, firstLetter, concat };
