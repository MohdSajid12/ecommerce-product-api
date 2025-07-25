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
git clone https://github.com/your-username/ecommerce-product-api.git

# 2. Navigate into the folder
cd ecommerce-product-api

# 3. Install dependencies
npm install

# 4. Start the server
npm start             # or: nodemon server.js
