const express = require('express')
const PostUsers = require('../Controller/Users')
const router = express.Router();

router.post('/postUsers', PostUsers )

module.exports = router;