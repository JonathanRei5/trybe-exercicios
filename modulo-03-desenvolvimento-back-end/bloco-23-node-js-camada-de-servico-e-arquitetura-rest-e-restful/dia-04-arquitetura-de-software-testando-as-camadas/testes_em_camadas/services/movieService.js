const MoviesModel = require('../models/movieModel');

const validateId = (id) => (typeof id === 'number' && id > 0);

const validateTitle = (title) => (title && typeof title === 'string');

const validateReleaseYear = (releaseYear) => (releaseYear && typeof releaseYear === 'number');

const validateDirectedBy = (directedBy) => (directedBy && typeof directedBy === 'string');

const isValid = (title, directedBy, releaseYear) => {
  const isValidTitle = validateTitle(title);
  const isValidReleaseYear = validateReleaseYear(releaseYear);
  const isValidDirectedBy = validateDirectedBy(directedBy);
  if (!isValidTitle || !isValidReleaseYear || !isValidDirectedBy) return false;
  return true;
};

const create = async ({ title, directedBy, releaseYear }) => {
  const isMovieValid = isValid(title, directedBy, releaseYear);
  if (!isMovieValid) return false;
  const { id } = await MoviesModel.create({ title, directedBy, releaseYear });
  return { id };
};

const get = async (id) => {
  if (!validateId(id)) return undefined;
  return await MoviesModel.get(id);
};

module.exports = {
  create,
  get,
};
