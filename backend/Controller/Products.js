const pool = require('../db')


const AllProducts = async (req, res) =>{
    try {
        const products = await pool.query('SELECT * FROM products');
        res.status(200).json(products.rows)
    } catch (error) {
        res.status(500).send(` ishlamadi`)
        
    }
}


module.exports =AllProducts