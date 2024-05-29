const express = require('express')
const app = express();
const path = require('path')

require('dotenv').config();
const { Pool } = require('pg');
const cors= require('cors')
const  pool = require('./db')
const AllProducts = require('./Routes/Products');
const PostUsers = require('./Routes/Users');
const Auth = require('./Routes/Auth')



app.get('/', (req, res) =>{
    res.send('hello worlds')
})


app.use(express.json());
app.use(cors());
app.use('/', express.static(path.join(__dirname, 'uploads')));

app.use(express.json())
app.use(cors());
app.use('/', AllProducts);
app.use('/', PostUsers)
app.use('/', Auth)



PORT = process.env.PORT || 3000; // yoki boshqa yuqori raqam
app.listen(PORT, () => {
    console.log(`Server portda ishlayapti: ${PORT}`);
});
