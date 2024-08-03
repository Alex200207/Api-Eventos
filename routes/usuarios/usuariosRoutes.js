import { Router } from "express";

import { listarTodosUsuarios } from "../../controllers/usuarios/usuariosController.js";

const usuariosRouter = Router();

usuariosRouter.get("/", listarTodosUsuarios);

export default usuariosRouter;
