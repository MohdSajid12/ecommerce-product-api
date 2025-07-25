const fs = require('fs');
const path = require('path');
const { v4: uuid } = require('uuid');

const dataPath = path.join(__dirname, '..', 'data', 'products.json');
const readProducts = () => JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
const writeProducts = (data) => fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));

// GET /products
exports.getAllProducts = (req, res) => {
  const products = readProducts();
  const { category } = req.query;
  if (category) {
    const filtered = products.filter(p => p.category.toLowerCase() === category.toLowerCase());
    return res.json(filtered);
  }
  res.json(products);
};

// GET /products/:id
exports.getProductById = (req, res) => {
  const products = readProducts();
  const product = products.find(p => p.id === req.params.id);
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  res.json(product);
};

// POST /products
exports.createProduct = (req, res) => {
  const products = readProducts();
  const { name, category, price } = req.body;
  const newProduct = {
    id: uuid(),
    name,
    category,
    price: Number(price)
  };
  products.push(newProduct);
  writeProducts(products);
  res.status(201).json(newProduct);
};
