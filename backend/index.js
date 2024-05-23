const express = require('express')
const app = express();
require('dotenv').config()
const cors =require('cors')
const AllProducts = require('./Routes/Products')


app.get('/', (req, res) =>{
    res.send('hello worlds')
})

app.use(express.json())
app.use(cors());
app.use('/', AllProducts)



PORT = process.env.PORT || 3000; // yoki boshqa yuqori raqam
app.listen(PORT, () => {
    console.log(`Server portda ishlayapti: ${PORT}`);
});
