const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',  // foydalanuvchi nomi
  host: 'localhost' , // server manzili
  database: 'postgres', // ma'lumotlar bazasi nomi
  password: 'baliq', // foydalanuvchi paroli
  port: 5432, // port raqami, odatda 5432
});

// Ba'zi SQL so'rovlarni bajaring
pool.connect((error, client, release) => {
  if (error) {
    console.error('Databazaga ulanmadi', error.stack);
  } else {
    console.log('Databazaga ulandi');
    
    // SQL so'rovlarni bajaring
    client.query('SELECT NOW()', (err, res) => {
      release();
      
      if (err) {
        console.error('So\'rov bajarishda xatolik', err.stack);
      } else {
        console.log('So\'rov natijasi:', res.rows);
      }
    });
  }
});

module.exports = pool
// ... qolgan kodlar
