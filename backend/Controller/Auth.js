const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../db');

const register = async (req, res) => {
    const { username, email, password } = req.body;
    
    // Bo'sh inputlarni tekshirish
    if (!username || !password || !email) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    try {
        // Foydalanuvchi allaqachon mavjudmi tekshiramiz
        const existingUser = await pool.query('SELECT * FROM users WHERE username = $1', [email]);
        if (existingUser.rows.length !== 0) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Parolni hash qilamiz
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Foydalanuvchini bazaga qo'shamiz
        const newUser = await pool.query('INSERT INTO users (username, password, email) VALUES ($1, $2, $3) RETURNING *', [username, hashedPassword, isAdmin || false]);
        
        // Token yaratish va qaytarish
        const token = jwt.sign({ id: newUser.rows[0].id, isAdmin: newUser.rows[0].is_admin }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(201).json({ token });
    } catch (error) {
        console.error('Error registering user: ', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const login = async (req, res) => {
    const { username, password } = req.body;
    
    // Bo'sh inputlarni tekshirish
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    try {
        // Foydalanuvchi ma'lumotlarini bazadan olish
        const user = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
        if (user.rows.length === 0) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        
        // Parolni tekshirish
        const validPassword = await bcrypt.compare(password, user.rows[0].password);
        if (!validPassword) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Token yaratish va qaytarish
        const token = jwt.sign({ id: user.rows[0].id, isAdmin: user.rows[0].is_admin }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (error) {
        console.error('Error logging in: ', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { register, login };
