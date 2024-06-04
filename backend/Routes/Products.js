const expres = require('express')
const {AllProducts} = require('../Controller/Products')
const {upload} = require('../middleware.js/middleware')
const pool = require("../db")
const router = expres.Router();

router.get('/products', AllProducts);

router.post('/postProducts', upload.single('productImage'), async (req, res) => {
    try {
    formData.append('productName', productName);
        const {  productName, productDescription, productPrice, productImage, productCategory } = req.body;
        const newProduct = await pool.query(
            'INSERT INTO products (productName, productDescription, productPrice, productImage, productCategory) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [productName, productDescription, productPrice, productImage, productCategory]
        );
        res.json(newProduct.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});




module.exports = router