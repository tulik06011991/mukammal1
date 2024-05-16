const express = require('express')
const app = express();
require('dotenv').config()


app.get('/', (req, res) =>{
    res.send('hello worlds')
})

PORT = process.env.PORT || 8000

app.listen(PORT, console.log(`server running on port : ${PORT}`))