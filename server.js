const express = require('express');
const morgan = require('morgan');
const productRoutes = require('./routes/products');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(morgan('dev'));

app.use('/products', productRoutes);

app.get('/', (_, res) => {
  res.json({ status: 'OK', message: 'Product API is running' });
});

app.use((_, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
