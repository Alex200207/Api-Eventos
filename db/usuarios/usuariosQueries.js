import config from '../../config.js';//importamos la constante config que contiene la configuracion de la base de datos

/**
 * Carga la lista de evento (en este ejemplo solo 10 evento)
 */
const listarTodosUsuariosQuery = () => {//creamos una funcion llamada listarTodosUsuariosQuery
    // Una promesa es una forma de que siempre se devuelva un resultado al quien llama (sea error o éxito)
    // Si la consulta no genera error, entonces resuelve/cumple la promesa con el resultado
    // Si hay algun error entonces rechaza la consulta e informa la razón 
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM usuario', (err, filas) => {/*config.query es una funcion que recibe dos parametros,
             el primero es la consulta a la base de datos y el segundo es un callback que recibe dos parametros err y filas*/
            // Si genera error, mostramos en la consola que es lo que falla
            if (err) {
                console.log(err);//si hay un error entonces lo mostramos en la consola
                reject(err);
            } else {
                // Si no hay error, devolvemos los datos de la tabla 
                resolve(filas);
            }
        });
    });
};



// Exportar todas las funciones definidas en este archivo
export {
    listarTodosUsuariosQuery,

}
/*config.query es una funcion que recibe dos parametros, el primero es 
la consulta a la base de datos y el segundo es un callback que recibe dos parametros err y filas */
