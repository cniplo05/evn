'user strict';
var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'watchdog_service'
})
connection.connect((err) =>{
    if(err){
        return console.log(`Connection failed lol : ${err}`);
    }
    return console.log('MySQL database Connected...');
})

// connection.query('SELECT * from reports', function (err, rows, fields) {
//     if (err) throw err

//     console.log('The solution is: ', rows[0].message)
// })

module.exports = connection;