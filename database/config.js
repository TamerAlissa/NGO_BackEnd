const mysql = require('mysql');
const DB_NAME = 'ngos_courses';

function createDatabaseConnection(callback) {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'a1234',
        database: DB_NAME,
    });

    connection.connect(error => {
        if (callback) {
            callback(error, connection)
        }
    });
}

module.exports = {
    createDatabaseConnection,
    DB_NAME
};

