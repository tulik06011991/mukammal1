const jwt = require("jsonwebtoken");

const middleware = (req, res, next) =>{
    const auth = req.headers('Authorization');
    if(!auth) throw new Error('no token');
    try {
        const token = jwt.sign(auth, process.env.JWT_SECRET);
        req.user = token;
        next()
    } catch (error) {
        throw new Error (`xato token`)
        
    }
}