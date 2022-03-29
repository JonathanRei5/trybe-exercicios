global.fetch = require('node-fetch');

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

async function getDogPicture() {
  try {
    const URL = 'https://dog.ceo/api/breeds/image/random';
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
}

module.exports = {
  randomNumber,
  toUpperCase,
  firstLetter,
  concat,
  getDogPicture
};
