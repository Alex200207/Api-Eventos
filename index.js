//Crear la instancia de express
import express from 'express';
import cors from 'cors'

// Importar las rutas
import usuariosRouter from './routes/usuarios/usuariosRoutes.js';
import eventosRouter from './routes/eventos/eventosRoutes.js';  

//Crear la app de express
const app = express();

//Habilitar la captura de datos mediante post / formularios
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// Habilitar CORS para permitir las llamadas de otro servidor
// distinto a este (localhost:3000).
app.use(cors())

//Configurar el puerto
const port = 3000;

//Usar las rutas
app.use('/eventos', eventosRouter); 
app.use('/usuarios', usuariosRouter); // PRODUCTOS

//Levantar el servidor en el puerto 3000
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
