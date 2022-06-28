const productService = require('../services/productService');

module.exports = {
  async listProducts(_req, res) {
    const products = await productService.list();
    res.status(200).json(products);
  },

  async getProduct(req, res) {
    const product = await productService.get(req.params.id);
    res.status(200).json(product);
  },

  async addProduct(req, res) {
    const product = await productService.add(req.body);
    res.status(201).json(product);
  },

  async deleteProduct(req, res) {
    await productService.delete(req.params.id);
    res.status(204).end();
  },

  async updateProduct(req, res) {
    const product = await productService.update(req.params.id, req.body);
    res.status(200).json(product);
  },
};
