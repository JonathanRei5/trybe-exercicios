const productModel = require('../models/productModel');

module.exports = {
  async listProducts() {
    const products = await productModel.listProducts();
    return products;
  },

  async getProduct(id) {
    const product = await productModel.getProduct(id);
    return product;
  },

  async addProduct({ name, brand }) {
    const product = await productModel.addProduct(name, brand);
    return product;
  },

  async deleteProduct(id) {
    await productModel.deleteProduct(id);
  },

  async updateProduct(id, { name, brand }) {
    const product = await productModel.updateProduct(id, name, brand);
    return product;
  },
};
