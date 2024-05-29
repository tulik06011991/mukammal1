const expres = require('express')
const {AllProducts, PostProducts} = require('../Controller/Products')
const {upload} = require('../middleware.js/middleware')

const router = expres.Router();

router.get('/products', AllProducts);
router.post('/postProducts', upload.single('image'), PostProducts)



module.exports = router