const expres = require('express')
const {AllProducts} = require('../Controller/Products')
const {upload} = require('../middleware.js/middleware')

const router = expres.Router();

router.get('/products', AllProducts);


router.post('/postProducts', upload.single('image'), async (req, res) =>{
    const { name, description, price } = req.body;
    const filePath = req.file.path;
    const fileName = req.file.filename;
    
    if (!name || !description || typeof price !== 'number') {
        return res.status(400).send('Invalid input');
    }

    try {
        const product = await pool.query(
            'INSERT INTO products(name, description, price,  image_name, image_path) VALUES ($1, $2, $3) RETURNING *',
            [name, description, price, fileName, filePath]
        );
        res.status(201).json(product.rows[0]);
    } catch (error) {
        console.error('Error adding product:', error);
        res.status(500).send('Error adding product');
    }

})



module.exports = router