const mysql = require('mysql');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '4712',
  database: 'qt_example'
});
module.exports = connection;