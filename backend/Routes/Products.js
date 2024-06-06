const express = require('express'); // to'g'ri nomlangan
const { AllProducts } = require('../Controller/Products');
const { upload } = require('../middleware.js/middleware');
const pool = require("../db");
const router = express.Router(); // to'g'ri nomlangan

// GET request for fetching all products
router.get('/products', AllProducts);

// POST request for adding a new product
router.post('/postProducts', upload.single('productImage'), async (req, res) => {
  const { productName, productDescription, productPrice } = req.body;
  const productImage = req.file ? req.file.filename : null;

  try {
    const query = 'INSERT INTO products (name, description, price, image) VALUES ($1, $2, $3, $4) RETURNING *';
    const values = [productName, productDescription, productPrice, productImage];
    const result = await pool.query(query, values);

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error saving product', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/submitCart', async (req, res) => {
  try {
    const { firstName, lastName, phone, email, cardNumber, expiryDate, productId, quantity } = req.body;

    const client = await pool.connect();
    const queryText = 'INSERT INTO cart (first_name, last_name, phone, email, card_number, expiry_date, product_id, quantity) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)';
    const values = [firstName, lastName, phone, email, cardNumber, expiryDate, productId, quantity];
    await client.query(queryText, values);
    client.release();
    
    res.json({ message: 'Cart submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});




module.exports = router;
