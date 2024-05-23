const expres = require('express')
const AllProducts = require('../Controller/Products')
const router = expres.Router();

router.get('/products', AllProducts)


module.exports = router