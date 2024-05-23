const pool = require('../db')



const PostUsers = async (req, res) =>{
    const{username, email, password} = req.body;
    try {
        const user = await pool.query(`INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *`,
    [username, email, password])
    return res.status(201).json(user.rows[0])
        
    } catch (error) {
        res.status(500).json(error)
        console.log(error)
        
    }
};

const getUsers = async (req, res) =>{
    try {
        const users = await pool.query(`SELECT * FROM users`);
        if(!users){
            res.status(404).json(`'ma'lumot topilmadi`)
        }
        return res.status(200).json(users.rows)
    } catch (error) {
        res.status(500).json({msg: error})
    }
}


const updateUsers = async (req, res) =>{
    const {id} = req.params
    try {
        const updateUser = await pool.query(`UPDATE products SET username =$1, email =$2, password = $3 WHERE id=$4  RETURNING *`,
            [username, email, password, id]
        );
        return res.status(201).json(updateUser.rows);
        if(updateUser.rowCount ===0){
            res.status(404).json(` ma'lumot sozlanmadi`)
        }
        
    } catch (error) {
        res.status(200).json({msg: error})
        console.log(error)
        
    }
};


const deleteUsers = async (req, res) =>{
    const {id}= req.params
    try {
        const deleteUser = await pool.query(` DELETE FROM   users WHERE ID=$1 RETURNING *`,[id]);
        return res.status(200).send('ma"lumot o"chirildi')
        if (deleteUser.rowCount === 0) {
            return res.status(404).send('Product not found');
        }
    } catch (error) {
        
    }
}


module.exports = {
    PostUsers,
    getUsers,
    updateUsers
};