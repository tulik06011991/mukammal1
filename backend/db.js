const { Pool, Client } = require('pg');

const pool = new Pool({
  user: process.env.DB_USERNAME,  // foydalanuvchi nomi
  host: process.env.DB_HOST, // server manzili
  database: process.env.DB_NAME, // ma'lumotlar bazasi nomi
  password: process.env.DB_PASSWORD, // foydalanuvchi paroli
  port: 5432, // port raqami, odatda 5432
});

// Ba'zi SQL so'rovlarni bajaring
pool.connect((error, client, release) => {
  if (error) {
    console.log(`Databazaga ulanmadi`);
  } else {
    console.log(`Databazaga ulandi`);
    release();
  }
});


module.exports = pool
// ... qolgan kodlar
