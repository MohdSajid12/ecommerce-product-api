const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { validateProduct } = require('../middleware/validateProduct');

// GET /products
router.get('/', productController.getAllProducts);

// GET /products/:id
router.get('/:id', productController.getProductById);

// POST /products
router.post('/', validateProduct, productController.createProduct);

module.exports = router;
