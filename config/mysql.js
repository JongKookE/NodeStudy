var mysql = require('mysql2')

var connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '1234',
    database: 'nodejs'
  });

connection.connect();

connection.query('SELECT * FROM board', function(err, rows, fields) {
    if (err) throw err;
    console.log(`Board Info is : ${rows}`);
    console.log('Board Info is : ', rows);
  });
  
module.exports = {
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: '1234',
  database: 'nodejs'
}

  connection.end();
