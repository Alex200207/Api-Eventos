import {//importamos las funciones listarTodosEventosQuery, listarEventoPorIdQuery, crearEventoQuery, actualizarEventoQuery y eliminarEventoQuery
  listarTodosEventosQuery,
  listarEventoPorIdQuery,
  crearEventoQuery,
  actualizarEventoQuery,
  eliminarEventoQuery
} from "../../db/eventos/eventosQueries.js";

/**
 * Obtener todos los eventos de la base de datos
 */
const listarTodosEventos = async (req, res) => {//creamos una funcion llamada listarTodosEventos y esta es una funcion asincrona
  //resive dos parametros req y res que son la peticion y la respuesta

  try {//try es un bloque de codigo que intenta ejecutar un bloque de codigo y si hay un error entonces se ejecuta el bloque de codigo de catch
    //  Ejecutar la consulta en la base de datos
    const eventos = await listarTodosEventosQuery();//creamos una constante eventos que es igual a la funcion listarTodosEventosQuery
    //await es una palabra clave que se utiliza para esperar a que una promesa se resuelva y devuelva un valor
    res.json(eventos);//enviamos la respuesta en formato json
  } catch (error) {//catch es un bloque de codigo que se ejecuta si hay un error en el bloque de codigo de try
    res.status(500).send(error);//enviamos un mensaje de error con el codigo de estado 500
  }
};

/**
 * Obtener el evento con el ID especificado en la query / url
 * @param {*} req 
 * @param {*} res 
 */

const listarEventosPorId = async (req, res) => { 
  try {
    //  Ejecutar la consulta en la base de datos
    const evento = await listarEventoPorIdQuery(req.params.id);
    res.json(evento);
  } catch (error) {
    res.status(500).send(error);
  }
};

/**
 * Crear un evento
 */
const crearEventos = async (req, res) => {
  console.log(req.body)
  try {
      const datosProducto = req.body;
      const resultado = await crearEventoQuery(datosProducto);
      res.json({ mensaje: 'Producto creado con éxito', id: resultado.insertId });
  } catch (error) {
      res.status(500).send(error);
  }
};

/**
 * Actualizar los datos de un evento
 */
const actualizarEventos = async (req, res) => {
  try {
      const id = req.params.id;
      const datosProducto = req.body;
      const resultado = await actualizarEventoQuery(id, datosProducto);
      if (resultado.affectedRows > 0) {
          res.json({ mensaje: 'Producto actualizado con éxito', id: id });
      } else {
          res.status(404).json({ mensaje: 'Producto no encontrado' });
      }
  } catch (error) {
      res.status(500).send(error);
  }
};

/**
 * Eliminar un evento
 */
const eliminarEventos = async (req, res) => {
  try {
      const id = req.params.id;
      const resultado = await eliminarEventoQuery(id);
      if (resultado.affectedRows > 0) {
          res.json({ mensaje: 'Producto eliminado con éxito' });
      } else {
          res.status(404).json({ mensaje: 'Producto no encontrado' });
      }
  } catch (error) {
      res.status(500).json({ mensaje: 'Error al eliminar el evento', error: error.message });
  }
};

export {
  listarTodosEventos,
  listarEventosPorId,
  crearEventos,
  actualizarEventos,
  eliminarEventos,
};
