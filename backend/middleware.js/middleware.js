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
};

const checkAdmin = (req, res, next) =>{
    try {
        if(req.user && req.user.isAdmin){
            next()
        }
    } catch (error) {
        throw new Error('siz admin emassiz')
        
    }
}


module.exports = {checkAdmin, middleware}