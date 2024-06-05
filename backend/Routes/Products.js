const express = require('express'); // to'g'ri nomlangan
const { AllProducts } = require('../Controller/Products');
const { upload } = require('../middleware.js/middleware');
const pool = require("../db");
const router = express.Router(); // to'g'ri nomlangan

// GET request for fetching all products
router.get('/products', AllProducts);

// POST request for adding a new product
router.post('/postProducts', upload.single("productImage"), async (req, res) => {
  try {
    const { productName, productDescription, productPrice } = req.body;
    const productImage = req.file ? req.file.filename : null; // fayl nomini saqlash

    const newProduct = await pool.query(
      'INSERT INTO products (productName, productDescription, productPrice, productImage) VALUES ($1, $2, $3, $4) RETURNING *',
      [productName, productDescription, productPrice, productImage]
    );

    res.json(newProduct.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
