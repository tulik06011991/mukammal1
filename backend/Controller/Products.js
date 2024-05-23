const pool = require('../db')


const AllProducts = async (req, res) =>{
    try {
        const products = await pool.query('SELECT * FROM products');
        res.status(200).json(products.rows)
    } catch (error) {
        res.status(500).send(` ishlamadi`)
        
    }
}



const postProducts = async (req, res) =>{
    const {name, description, price } = req.body;
    if (!name || !description || typeof price !== 'number') {
        return res.status(400).send('Invalid input');
    }
    try {
        const products = await pool.query('INSERT INTO products(name, description, price) VALUES ($1, $2 ,$3) RETURNING * ',
        [name, description, price]);
        res.status(200).json(products.rows[0])
    } catch (error) {
        res.status(500).send(` ishlamadi`)
        
    }
}


module.exports = {
    AllProducts,
    postProducts
}
   