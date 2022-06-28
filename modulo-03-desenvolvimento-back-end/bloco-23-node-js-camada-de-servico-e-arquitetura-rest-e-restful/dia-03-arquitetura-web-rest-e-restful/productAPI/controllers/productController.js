const productService = require('../services/productService');

module.exports = {
  async listProducts(_req, res) {
    const products = await productService.listProducts();
    res.status(200).json(products);
  },

  async getProduct(req, res) {
    const product = await productService.getProduct(req.params.id);
    res.status(200).json(product);
  },

  async addProduct(req, res) {
    const product = await productService.addProduct(req.body);
    res.status(201).json(product);
  },

  async deleteProduct(req, res) {
    await productService.deleteProduct(req.params.id);
    res.status(204).end();
  },

  async updateProduct(req, res) {
    const product = await productService.updateProduct(req.params.id, req.body);
    res.status(200).json(product);
  },
};
