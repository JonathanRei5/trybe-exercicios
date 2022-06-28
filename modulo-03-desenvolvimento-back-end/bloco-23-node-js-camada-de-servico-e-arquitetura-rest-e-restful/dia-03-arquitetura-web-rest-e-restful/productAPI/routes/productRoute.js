const { Router } = require('express');
const productController = require('../controllers/productController');

const productRouter = Router();

productRouter.get('/', productController.listProducts);
productRouter.get('/:id', productController.getProduct);
productRouter.post('/', productController.addProduct);
productRouter.delete('/:id', productController.deleteProduct);
productRouter.put('/:id', productController.updateProduct);

module.exports = productRouter;
