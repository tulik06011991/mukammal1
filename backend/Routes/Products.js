const expres = require('express')
const AllProducts = require('../Controller/Products')
const PostProducts = require('../Controller/postProducts')
const router = expres.Router();

router.get('/products', AllProducts);
router.post('/postProducts', PostProducts)



module.exports = router