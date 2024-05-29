const jwt =require('jsonwebtoken')
const bcrypt = require('bcrypt');
const pool = require('../db');
const { SELECT } = require('sequelize/lib/query-types');

const sendErrorResponse = (res, statusCode, message) => {
    return res.status(statusCode).json({ message });
};



const register = async(req,res) =>{
    const {username, email , password} = req.body
    try {
        if(!username || !email || !password){
            return sendErrorResponse(res, 400, `Iltimos username , email yoki parolni bo'sh yubormang` );
        }
        const user = await pool.query(  `SELECT * FROM users WHERE email = $1 `, [email]);
        if(user.rows.length !== 0){
            return sendErrorResponse(res, 401, `Bu emaildan avval ro'yxatdan o'tilgan`);
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await pool.query(`INSERT INTO users (username, email, password) VALUES ($1, $2,$3) RETURNING *`, [username, email, hashedPassword]);
        res.status(201).json({msg: `Muvaffaqiyatli ro'yxatdan o'tildi`})

    } catch (error) {
        console.log(error)
        return sendErrorResponse(res, 500, ` Server xatosi 502`)
        
    };

}


const login =  async(req, res) =>{
    const {email, password} = req.body;
    if(!email || !password){
        return sendErrorResponse(res, 401, `Iltimos email va parolni bo'sh jo'natmang`)
    }
    try {
        const user  = await pool.query(`SELECT * FROM users WHERE email =$1 `, [email]);
        if(!user){
            return sendErrorResponse(res, 400, `login yoki parol xato`);
        };
        const parol = bcrypt.compare(password, user.rows[0].password);
        if(!parol){
            return sendErrorResponse(res, 400, `login yoki parol xato`)
        };
       const token  = jwt.sign({id: user.rows[0].id, is_admin: user.rows[0].is_admin} , process.env.JWT_SECRET, {expiresIn: `1h`}) 
       res.cookie('access-token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production', expires: new Date(Date.now() + 3600000) }); // 1 soat
       res.status(200).json({ message: 'Login successful', token, isAdmin: user.rows[0].is_admin });
 
    } catch (error) {
        console.log(error);
        sendErrorResponse(res, 500, ` server xatosi 502`)
        
    }
}

module.exports = {register, login}

































































// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const pool = require('../db');

// // Helper function to send consistent error messages
// const sendErrorResponse = (res, statusCode, message) => {
//     return res.status(statusCode).json({ message });
// };

// const register = async (req, res) => {
//     const { username, email, password  } = req.body;

//     // Bo'sh inputlarni tekshirish
//     if (!username || !password) {
//         return sendErrorResponse(res, 400, 'Username and password are required');
//     }

//     try {
//         // Foydalanuvchi allaqachon mavjudmi tekshiramiz
//         const existingUser = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
//         if (existingUser.rows.length !== 0) {
//             return sendErrorResponse(res, 400, 'User already exists');
//         }

//         // Parolni hash qilamiz
//         const hashedPassword = await bcrypt.hash(password, 10);

//         // Foydalanuvchini bazaga qo'shamiz
//         const newUser = await pool.query(
//             'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
//             [username, email, hashedPassword]
//         );

//         res.status(201).json({ message: 'User registered successfully' });
//     } catch (error) {
//         console.error('Error registering user:', error);
//         sendErrorResponse(res, 500, 'Internal server error');
//     }
// };

// const login = async (req, res) => {
//     const { email, password } = req.body;

//     // Bo'sh inputlarni tekshirish
//     if (!email || !password) {
//         return sendErrorResponse(res, 400, 'Username and password are required');
//     }

//     try {
//         // Foydalanuvchi ma'lumotlarini bazadan olish
//         const user = await pool.query('SELECT * FROM users WHERe email = $1', [email]);
//         if (user.rows.length === 0) {
//             return sendErrorResponse(res, 400, 'Invalid credentials');
//         }

//         // Parolni tekshirish
//         const validPassword = await bcrypt.compare(password, user.rows[0].password);
//         if (!validPassword) {
//             return sendErrorResponse(res, 400, 'Invalid credentials');
//         }

//         // Token yaratish
//         const token = jwt.sign(
//             { id: user.rows[0].id, isAdmin: user.rows[0].is_admin },
//             process.env.JWT_SECRET,
//             { expiresIn: '1h' }
//         );

//         // Tokenni JSON formatida yuborish
//         res.status(200).json({ token, isAdmin: user.rows[0].is_admin });
//     } catch (error) {
//         console.error('Error logging in:', error);
//         sendErrorResponse(res, 500, 'Internal server error');
//     }
// };

// module.exports = { register, login };
