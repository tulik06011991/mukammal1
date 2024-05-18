const express = require('express')
const app = express();
require('dotenv').config()


app.get('/', (req, res) =>{
    res.send('hello worlds')
})

PORT = process.env.PORT || 3000; // yoki boshqa yuqori raqam
app.listen(PORT, () => {
    console.log(`Server portda ishlayapti: ${PORT}`);
});
