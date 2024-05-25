const express = require('express')
const app = express();

require('dotenv').config();
const { Pool } = require('pg');
const cors= require('cors')
const  pool = require('./db')
const AllProducts = require('./Routes/Products');
const PostUsers = require('./Routes/Users')



app.get('/', (req, res) =>{
    res.send('hello worlds')
})


app.use(express.json());
app.use(cors());

app.use(express.json())
app.use(cors());
app.use('/', AllProducts);
app.use('/', PostUsers)




PORT = process.env.PORT || 3000; // yoki boshqa yuqori raqam
app.listen(PORT, () => {
    console.log(`Server portda ishlayapti: ${PORT}`);
});
