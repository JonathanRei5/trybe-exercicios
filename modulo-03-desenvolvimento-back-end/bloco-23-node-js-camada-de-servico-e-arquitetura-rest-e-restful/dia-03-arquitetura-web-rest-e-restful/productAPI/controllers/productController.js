const ProductModel = require('../models/productModel');

module.exports = {
  async listProducts(_req, res) {
    const products = await ProductModel.getAll();

    res.send(products);
  },

  async getProduct(req, res) {
    const product = await ProductModel.getById(req.params.id);

    res.send(product);
  },

  async addProduct(req, res) {
    const { name, brand } = req.body;

    const newProduct = await ProductModel.add(name, brand);

    res.send(newProduct);
  },

  async deleteProduct(req, res) {
    const products = await ProductModel.exclude(req.params.id);

    res.send(products);
  },

  async updateProduct(req, res) {
    const { name, brand } = req.body;

    const products = await ProductModel.update(req.params.id, name, brand);

    res.send(products);
  },
};
