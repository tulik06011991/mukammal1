const express = require('express')
const {PostUsers, getUsers,deleteUsers, updateUsers} = require('../Controller/Users')
const router = express.Router();

router.post('/postUsers', PostUsers );
router.get('/getUsers', getUsers);
router.put('/updateUsers', updateUsers)

module.exports = router;