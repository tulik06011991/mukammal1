const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const users = require('../models/userModel');

const register = async (req, res) => {
    const { username, password, isAdmin } = req.body;

    // Bo'sh inputlarni tekshirish
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    const userExists = users.find(user => user.username === username);
    if (userExists) {
        return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { id: users.length + 1, username, password: hashedPassword, isAdmin: isAdmin || false };
    users.push(newUser);
    const token = jwt.sign({ id: newUser.id, isAdmin: newUser.isAdmin }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(201).json({ token });
};

const login = async (req, res) => {
    const { username, password } = req.body;

    // Bo'sh inputlarni tekshirish
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    const user = users.find(user => user.username === username);
    if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: '1h' });
    
    // Cookie sifatida tokenni yuborish
    res.cookie('access-token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
    res.status(200).json({ message: 'Login successful', isAdmin: user.isAdmin });
};

module.exports = { register, login };
