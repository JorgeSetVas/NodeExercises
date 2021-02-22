const express = require('express');
const productController = require('../controllers/Product');

const router = express.Router();

router.get('/products', productController.getProducts);

router.get('/:productId', productController.getProduct);

module.exports = router;