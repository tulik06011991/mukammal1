const pool = require('../db');


const purchases = async (req, res) =>{
    try {
        const result = await pool.query(`
        SELECT user_id, product_name, SUM(quantity) as total_quantity
        FROM sales
        GROUP BY user_id, product_name
      `);
      res.json(result.rows);
        
    } catch (error) {
       console.log(error);
       res.status(500).json({msg: error}) 
    }

};



module.export = purchases

