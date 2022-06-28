const productModel = require('../models/productModel');

module.exports = {
  async list() {
    const products = await productModel.getAll();
    return products;
  },

  async get(id) {
    const product = await productModel.getById(id);
    return product;
  },

  async add({ name, brand }) {
    const product = await productModel.add(name, brand);
    return product;
  },

  async delete(id) {
    await productModel.exclude(id);
  },

  async update(id, { name, brand }) {
    const product = await productModel.update(id, name, brand);
    return product;
  },
};
