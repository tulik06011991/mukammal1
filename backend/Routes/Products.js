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
  const { firstName, lastName, phone, email, cardNumber, expiryDate, cartItems } = req.body;

  try {
    const client = await pool.connect();

    try {
      await client.query('BEGIN');

      // Save customer details
      const customerQuery = `
        INSERT INTO customers (first_name, last_name, phone, email, card_number, expiry_date)
        VALUES ($1, $2, $3, $4, $5, $6) RETURNING id
      `;
      const customerValues = [firstName, lastName, phone, email, cardNumber, expiryDate];
      const customerResult = await client.query(customerQuery, customerValues);
      const customerId = customerResult.rows[0].id;

      // Save cart items
      const cartQuery = `
        INSERT INTO cart_items (customer_id, product_id, quantity)
        VALUES ($1, $2, $3)
      `;
      for (const item of cartItems) {
        const cartValues = [customerId, item.productId, item.quantity];
        await client.query(cartQuery, cartValues);
      }

      await client.query('COMMIT');
      res.status(201).json({ message: 'Cart submitted successfully' });
    } catch (error) {
      await client.query('ROLLBACK');
      console.error('Error saving cart', error);
      res.status(500).json({ error: 'Internal server error' });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Database connection error', error);
    res.status(500).json({ error: 'Database connection error' });
  }
});

module.exports = router;
