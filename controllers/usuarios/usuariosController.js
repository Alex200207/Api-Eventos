import {
    listarTodosUsuariosQuery,
 
  } from "../../db/usuarios/usuariosQueries.js";
  
  /**
   * Obtener todos los usuarios de la base de datos
   */
  const listarTodosUsuarios = async (req, res) => {
    // Un bloque try-catch  sirve para validar si la peticion se obtiene o se devuelve un error
    // Try -> intentar
    // Catch -> capturar el error
    try {
      //  Ejecutar la consulta en la base de datos
      const usuarios = await listarTodosUsuariosQuery();
      res.json(usuarios);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  

  
  export {
    listarTodosUsuarios,
  
  };
  