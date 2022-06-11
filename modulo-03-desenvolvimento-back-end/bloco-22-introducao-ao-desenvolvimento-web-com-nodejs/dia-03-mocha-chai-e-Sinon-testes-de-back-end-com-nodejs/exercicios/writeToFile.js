const fs = require('fs/promises');

const writeToFile = async (path, data) => {
  try {
    return await fs.writeFile(path, data);
  } catch (error) {
    return error.message;
  }
}

module.exports = writeToFile;
