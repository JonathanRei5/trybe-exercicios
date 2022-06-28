const productModel = require('../models/productModel');
const joi = require('joi');
const customError = require('../errors/customError');
const validateSchema = require('./validateSchema');

module.exports = {
  validadeProduct(product) {
    const productSchema = joi.object({
      name: joi.string().required().not().empty(),
      brand: joi.string().required().not().empty(),
    });
    validateSchema(productSchema, product);
  },

  async checkIfExists(id) {
    const product = await productModel.getProduct(id);
    if (!product) throw new customError(404, 'notFound', 'Produto não encontrado');
  },

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
