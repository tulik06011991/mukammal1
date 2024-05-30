const jwt = require('jsonwebtoken');
const multer = require('multer')

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1];
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



const stroge = multer.diskStorage({

  destination:(req, file, cb) =>{
    cb(null, './uploads')
  },
  filename: (req, file, cb) =>{
    cb(null, `${Date.now()}-${file.originalname}`)
  }
})

const fileFilter = (req, file, cb) =>{
  const allow = ['image/jpeg', "image/jpg", "image/webp", "image/gif", ];
  if(allow.includes(file.mimtype)){
    cb(null, true)
  }else{
    cb(new Error (`Rasm yuklashda xatolik bo'ldi`), false)
  }
}

const upload = multer({storage: stroge,
  limits: {
    fileSize: 5*1024*1024
  },
  fileFilter: fileFilter
});





module.exports = { verifyToken, checkAdmin, upload  };
