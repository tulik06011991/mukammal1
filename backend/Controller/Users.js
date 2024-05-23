const pool = require('../db')



const PostUsers = async (req, res) =>{
    const{username, email, password} = req.body;
    try {
        const user = await pool.query(`INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *`,
    [username, email, password])
    res.status(201).json(user.rows[0])
        
    } catch (error) {
        res.status(500).json(error)
        console.log(error)
        
    }
};

const getUsers = async (req, res) =>{
    try {
        const users = await pool.query(`SELECT * FROM users`);
        res.status(200).json(users.rows)
    } catch (error) {
        res.status(500).json({msg: error})
    }
}


module.exports = {
    PostUsers,
    getUsers
};