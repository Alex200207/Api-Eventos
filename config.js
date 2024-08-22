import {createPool} from 'mysql2';//funcion createPool para crear una piscina de conexiones a la base de datos

// Crear una conexión a la base de datos
const config = createPool({//creamos una constante config que es igual a createPool que es una funcion que recibe un objeto con las configuraciones de la base de datos
    host: 'localhost', // Dirección del servidor de la base de datos
    user: 'root', // Usuario de la base de datos
    password: 'alex2002', // Contraseña de la base de datos
    database: 'gestion_de_eventos', // Nombre de la base de datos
    port: 3307, // Puerto de la base de datos
})

// Obtener una conexión de la piscina
config.getConnection((err, connection) => {//getConnection es una funcion que recibe un callback con dos parametros err y connection y config es la constante
    // que creamos anteriormente y esta invoca la funcion getConnection
    if (err) {//si hay un error entonces se ejecuta el siguiente bloque de codigo
        console.error('ERROR: ', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {//si el error es igual a PROTOCOL_CONNECTION_LOST entonces se ejecuta el siguiente bloque de codigo
            console.error('La conexión a la base de datos fue cerrada.');
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {//si el error es igual a ER_CON_COUNT_ERROR entonces se ejecuta el siguiente bloque de codigo
            console.error('La base de datos tiene muchas conexiones.');
        }
        if (err.code === 'ECONNREFUSED') {//si el error es igual a ECONNREFUSED entonces se ejecuta el siguiente bloque de codigo
            console.error('La conexión a la base de datos fue rechazada.');
        }
    }
    
    // Release the connection
    if (connection) {//si la conexion existe entonces la liberamos con la funcion release que es una funcion de la conexion a la base de datos 
        connection.release();//liberamos la conexion a la base de datos para que pueda ser utilizada por otro usuario o proceso.
    }
    
    return;
})
export default config;//exportamos la constante config para que pueda ser utilizada en otros archivos