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
    const id = await productModel.addProduct({ name, brand });
    return { id, name, brand };
  },

  async deleteProduct(id) {
    await productModel.deleteProduct(id);
  },

  async updateProduct(id, { name, brand }) {
    await productModel.updateProduct(id, { name, brand });
    return { id: Number(id), name, brand };
  },
};
