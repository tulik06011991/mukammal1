const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',      // Correct key
  host: 'localhost',
  port: 5432,
  password: 'baliq',     // Remove 'username' and ensure the other keys are correct
  database: 'postgres' // Add the database name if necessary
});

// Pool ulanishini tekshirish
pool.connect((err, client, release) => {
    if (err) {
      return console.log('Databazaga ulanmadi', err.stack);
    }
    console.log('Databaza ishladi');
    release();
  });

module.exports = pool;
