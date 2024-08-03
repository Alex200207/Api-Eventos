import {createConnection, createPool} from 'mysql2';

// Create a pool to avoid the overhead of creating a new connection every time one is needed


const config = createPool({
    host: 'localhost', // localhost en cada PC
    user: 'root',
    password: 'alex2002',
    database: 'gestion_de_eventos',
    port: 3307,

})

// Validate the connection

config.getConnection((err, connection) => {
    if (err) {
        console.error('ERROR: ', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('La conexión a la base de datos fue cerrada.');
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('La base de datos tiene muchas conexiones.');
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('La conexión a la base de datos fue rechazada.');
        }
    }
    if (connection) {
        connection.release();
    }
    return;
})


export default config;
