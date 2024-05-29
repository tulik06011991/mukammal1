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






const createImageUploadMiddleware = (destinationFolder, maxSizeMB) => {
    // Fayllarni saqlash uchun konfiguratsiya
    const storage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, destinationFolder);
      },
      filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
      }
    });
  
    // Fayl filtri
    const fileFilter = (req, file, cb) => {
      const allowedMimeTypes = ['image/jpg', 'image/jpeg', 'image/png', 'image/webp', 'image/gif'];
      if (allowedMimeTypes.includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb(new Error('Yuklanadigan fayl rasm bo\'lishi kerak!'), false);
      }
    };
  
    // Multer sozlamalari
    return multer({
      storage: storage,
      limits: {
        fileSize: maxSizeMB * 1024 * 1024 // MB dan byte ga o'girish
      },
      fileFilter: fileFilter
    });
  };
  

// Rasmlarni yuklash uchun middleware
const upload = createImageUploadMiddleware('uploads/', 5);




module.exports = { verifyToken, checkAdmin, upload };
