const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const token = req.headers['access-token'];
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(400).json({ message: 'Invalid token' });
    }
};

const checkAdmin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next();
    } else {
        return res.status(403).json({ message: 'Access forbidden: You are not an admin' });
    }
};

module.exports = { checkAdmin, verifyToken };
