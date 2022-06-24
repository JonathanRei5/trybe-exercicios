const findEmptyKey = (object, ...keys) => {
  for (let index = 0; index < keys.length; index += 1) {
    if (object[keys[index]] === undefined) return keys[index];
  }
  return undefined;
};

module.exports = findEmptyKey;
