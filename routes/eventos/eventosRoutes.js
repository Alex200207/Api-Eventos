import { Router } from 'express';// Importamos el router de express para poder crear rutas para la API REST de eventos

import {
    listarTodosEventos,
    listarEventosPorId,
    crearEventos,
    actualizarEventos,
    eliminarEventos
} from '../../controllers/eventos/eventosController.js';

const eventosRouter = Router();//creamos una constante eventosRouter que es igual a Router que es una funcion de express

eventosRouter.get('/', listarTodosEventos);//cuando se haga una peticion get a la ruta / entonces se ejecuta la funcion listarTodosEventos
eventosRouter.get('/:id', listarEventosPorId);

eventosRouter.post('/', crearEventos);
eventosRouter.put('/:id', actualizarEventos);
eventosRouter.delete('/:id', eliminarEventos);

export default eventosRouter;//exportamos la constante eventosRouter para que pueda ser utilizada en otros archivos