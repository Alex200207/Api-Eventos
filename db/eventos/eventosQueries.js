import config from '../../config.js';

/**
 * Carga la lista de evento 
 */
const listarTodosEventosQuery = () => {
    // Una promesa es una forma de que siempre se devuelva un resultado al quien llama (sea error o éxito)
    // Si la consulta no genera error, entonces resuelve/cumple la promesa con el resultado
    // Si hay algun error entonces rechaza la consulta e informa la razón 
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM evento', (err, filas) => {
            // Si genera error, mostramos en la consola que es lo que falla
            if (err) {
                console.log(err);
                reject(err);
            } else {
                // Si no hay error, devolvemos los datos de la tabla 
                resolve(filas);
            }
        });
    });
};

/**
 * Buscar un producto por su ID (llave primaria)
 */
const listarEventoPorIdQuery = (id) => {
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM evento WHERE id = ? LIMIT 1', [id], (err, filas) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                resolve(filas);
            }
        });
    });
};


/**
 * Guardar un nuevo producto
 */
const crearEventoQuery = async (producto) => {
    const { titulo,Descripción, Fecha, Hora } = producto;
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO evento (titulo,Descripción, Fecha, Hora) VALUES (?, ?, ?, ?)';
        config.query(sql, [titulo,Descripción, Fecha, Hora], (err, resultado) => {
            if (err) {
                reject(err);
            } else {
                resolve(resultado);
            }
        });
    });
};

/**
 * Actualizar un producto por su ID
 */
const actualizarEventoQuery = (id, producto) => {
    const { titulo,Descripción, Fecha, Hora } = producto;
    return new Promise((resolve, reject) => {
        const sql = 'UPDATE evento SET titulo = ?,Descripción = ?, Fecha = ?, Hora = ? WHERE id = ?';
        config.query(sql, [titulo,Descripción, Fecha, Hora, id], (err, resultado) => {
            if (err) {
                reject(err);
            } else {
                resolve(resultado);
            }
        });
    });
};

/**
 * Eliminar un producto por su ID
 */
const eliminarEventoQuery = (id_evento) => {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM evento WHERE id_evento = ?';
        config.query(sql, [id_evento], (err, resultado) => {
            if (err) {
                reject(err);
            } else {
                resolve(resultado);
            }
        });
    });
};

// Exportar todas las funciones definidas en este archivo
export {
    listarTodosEventosQuery,
    listarEventoPorIdQuery,
    crearEventoQuery,
    actualizarEventoQuery,
    eliminarEventoQuery   
}
