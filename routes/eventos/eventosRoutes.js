import { Router } from 'express';

import {
    listarTodosEventos,
    listarEventosPorId,
    crearEventos,
    actualizarEventos,
    eliminarEventos
} from '../../controllers/eventos/eventosController.js';

const eventosRouter = Router();

eventosRouter.get('/', listarTodosEventos);
eventosRouter.get('/:id', listarEventosPorId);

eventosRouter.post('/', crearEventos);
eventosRouter.put('/:id', actualizarEventos);
eventosRouter.delete('/:id', eliminarEventos);

export default eventosRouter;