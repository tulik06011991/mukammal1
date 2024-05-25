const { Pool } = require('pg');

const pool = new Pool({

  user: 'postgres',  // foydalanuvchi nomi
  host: 'localhost' , // server manzili
  database: 'postgres', // ma'lumotlar bazasi nomi
  password: 'baliq', // foydalanuvchi paroli
  port: 5432, // port raqami, odatda 5432
});

// Ba'zi SQL so'rovlarni bajaring


// Pool ulanishini tekshirish
pool.connect((err, client, release) => {
    if (err) {
      return console.log('Databazaga ulanmadi', err.stack);
    }
    console.log('Databaza ishladi');
    release();
  });

module.exports = pool;

