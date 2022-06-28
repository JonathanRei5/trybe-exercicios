const ProductModel = require('../models/productModel');

module.exports = {
  async listProducts(_req, res) {
    const products = await ProductModel.getAll();

    res.status(200).json(products);
  },

  async getProduct(req, res) {
    const product = await ProductModel.getById(req.params.id);

    res.status(200).json(product);
  },

  async addProduct(req, res) {
    const { name, brand } = req.body;

    const newProduct = await ProductModel.add(name, brand);

    res.status(201).json(newProduct);
  },

  async deleteProduct(req, res) {
    const products = await ProductModel.exclude(req.params.id);

    res.status(204).json(products);
  },

  async updateProduct(req, res) {
    const { name, brand } = req.body;

    const products = await ProductModel.update(req.params.id, name, brand);

    res.status(200).json(products);
  },
};
