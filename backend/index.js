const express = require('express')
const app = express();
require('dotenv').config();
const { Pool } = require('pg');
const cors= require('cors')
const  pool = require('./db')


app.get('/', (req, res) =>{
    res.send('hello worlds')
})

app.use(express.json());
app.use(cors());




PORT = process.env.PORT || 3000; // yoki boshqa yuqori raqam
app.listen(PORT, () => {
    console.log(`Server portda ishlayapti: ${PORT}`);
});
