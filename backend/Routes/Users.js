const express = require('express')
const {PostUsers, getUsers} = require('../Controller/Users')
const router = express.Router();

router.post('/postUsers', PostUsers );
router.get('/getUsers', getUsers)

module.exports = router;