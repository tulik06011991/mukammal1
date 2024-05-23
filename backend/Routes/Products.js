const expres = require('express')
const {AllProducts, PostProducts} = require('../Controller/Products')

const router = expres.Router();

router.get('/products', AllProducts);
router.post('/postProducts', PostProducts)



module.exports = router