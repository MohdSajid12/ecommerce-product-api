# Ecommerce Product API

A simple RESTful API for managing product data, built with **Node.js** and **Express**. This API supports CRUD operations and filtering by category. Designed for quick testing and demo purposes.

---

## Tech Stack

- **Node.js** (v20+)
- **Express.js** (v4)
- **express-validator** – for validating request bodies
- **uuid** – for generating unique product IDs
- **morgan** – for HTTP request logging

---

## 📦 Features

- ✅ Get all products  
- ✅ Get product by ID  
- ✅ Filter products by category  
- ✅ Add new product with validation (name, price, category)

---

## ▶Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/MohdSajid12/ecommerce-product-api

# 2. Navigate into the folder
cd ecommerce-product-api

# 3. Install dependencies
npm install

# 4. Start the server
npm start             # or: nodemon server.js



#Postman Testing Guide
#Follow these steps to test the Ecommerce Product API using Postman:

# Get all products
GET /products
    URL: http://localhost:3000/products
    Description: Returns the full list of products.

#Get product by ID
GET /products/:id
URL: http://localhost:3000/products/<product-id>
Description: Returns a product with the matching ID.
Example: http://localhost:3000/products/81cde3d1-a2d9-4872-9db2-a4f16eb14a1d

# Filter products by category
GET /products?category=<category-name>
URL: http://localhost:3000/products?category=Apparel
Description: Filters products by the specified category.


#Create new product
POST /products
URL: http://localhost:3000/products
Description: Adds a new product to the database.

Validation Rules
    name: required, must be a string
    price: required, must be a number
    category: required, must be a string
