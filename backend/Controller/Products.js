const pool = require('../db');


const AllProducts = async (req, res) => {
    try {
        const products = await pool.query('SELECT * FROM products');
        res.status(200).json(products.rows);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).send('Error fetching products');
    }
};

const PostProducts = async  (req, res) => {
    const { name, description, price } = req.body;
    const filePath = req.file.path;
    const fileName = req.file.filename;
    
    if (!name || !description || typeof price !== 'number') {
        return res.status(400).send('Invalid input');
    }

    try {
        const product = await pool.query(
            'INSERT INTO products(name, description, price) VALUES ($1, $2, $3) RETURNING *',
            [name, description, price]
        );
        res.status(201).json(product.rows[0]);
    } catch (error) {
        console.error('Error adding product:', error);
        res.status(500).send('Error adding product');
    }
};

const DeleteProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await pool.query('DELETE FROM products WHERE id = $1 RETURNING *', [id]);
        
        if (result.rowCount === 0) {
            return res.status(404).send('Product not found');
        }

        res.status(200).json({ message: 'Product deleted successfully', product: result.rows[0] });
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).send('Error deleting product');
    }
};

const UpdateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, description, price } = req.body;

    if (!name || !description || typeof price !== 'number') {
        return res.status(400).send('Invalid input');
    }

    try {
        const result = await pool.query(
            'UPDATE products SET name = $1, description = $2, price = $3 WHERE id = $4 RETURNING *',
            [name, description, price, id]
        );

        if (result.rowCount === 0) {
            return res.status(404).send('Product not found');
        }

        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).send('Error updating product');
    }
};

module.exports = {
    AllProducts,
    PostProducts,
    DeleteProduct,
    UpdateProduct
};
