const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',  // foydalanuvchi nomi
  host: 'localhost', // server manzili
  database: 'mydatabase', // ma'lumotlar bazasi nomi
  password: 'password', // foydalanuvchi paroli
  port: 5432, // port raqami, odatda 5432
});

// Ba'zi SQL so'rovlarni bajaring
async function getUsers() {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM users');
    return result.rows;
  } finally {
    client.release();
  }
}

// ... qolgan kodlar
