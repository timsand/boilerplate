const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: ''
});

db.connect(() => console.log('Connected to MySQL'));
