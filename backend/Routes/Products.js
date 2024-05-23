const expres = require('express')
const {AllProducts, postProducts} = require('../Controller/Products')

const router = expres.Router();

router.get('/products', AllProducts);
router.post('/postProducts', postProducts)



module.exports = router