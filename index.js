//Crear la instancia de express
import express from 'express';//importamos express para poder crear la aplicacion de express y poder crear el servidor web  
import cors from 'cors'//importamos cors para poder habilitar las llamadas de otro servidor distinto a este (localhost:3000). 

// Importar las rutas
import usuariosRouter from './routes/usuarios/usuariosRoutes.js';
import eventosRouter from './routes/eventos/eventosRoutes.js';  

//Crear la app de express
const app = express();//creamos una constante app que es igual a express que es una funcion que crea la aplicacion de express

//Habilitar la captura de datos mediante post / formularios
app.use(express.json())//usamos la funcion json de express para poder capturar los datos en formato json
app.use(express.urlencoded({ extended: true }));//usamos la funcion urlencoded de express para poder capturar los datos en formato urlencoded

// Habilitar CORS para permitir las llamadas de otro servidor
// distinto a este (localhost:3000).
app.use(cors())//usamos la funcion cors de express para habilitar las llamadas de otro servidor distinto a este (localhost:3000).

//Configurar el puerto
const port = 3000;//creamos una constante port que es igual a 3000

//Usar las rutas
app.use('/eventos', eventosRouter); // EVENTOS
app.use('/usuarios', usuariosRouter); // PRODUCTOS

//Levantar el servidor en el puerto 3000
app.listen(port, () => {//usamos la funcion listen de app para levantar el servidor en el puerto 3000
    console.log(`Servidor corriendo en el puerto ${port}`);
});
/*CORS (Cross-Origin Resource Sharing): CORS es un mecanismo de seguridad implementado en los navegadores 
web para controlar las solicitudes de recursos entre diferentes dominios. Cuando un navegador realiza una 
solicitud a un dominio diferente al del origen de la página actual, se aplica la política de CORS para determinar
 si la solicitud debe ser permitida o bloqueada. Esto ayuda a prevenir ataques de seguridad y protege la integridad de los datos.

Express: Express es un framework web de Node.js que simplifica el proceso de creación de aplicaciones web. 
Proporciona una capa de abstracción sobre el servidor HTTP incorporado en Node.js, lo que facilita la creación de rutas, 
el manejo de solicitudes y respuestas, y la implementación de middleware.

app.use(express.urlencoded({ extended: true })): Esta línea de código es parte de la configuración de Express
 y se utiliza para analizar los datos enviados en una solicitud HTTP con el tipo de contenido application/x-www-form-urlencoded. 
 Este tipo de contenido se utiliza comúnmente en formularios HTML. El método urlencoded de Express analiza los datos y los 
 convierte en un objeto JavaScript que se puede acceder en el controlador de ruta correspondiente.

app.use(express.json()): Esta línea de código también es parte de la configuración de Express y se utiliza para analizar
 los datos enviados en una solicitud HTTP con el tipo de contenido application/json. Este tipo de contenido se utiliza 
 comúnmente para enviar datos estructurados en formato JSON. El método json de Express analiza los datos y los convierte 
 en un objeto JavaScript que se puede acceder en el controlador de ruta correspondiente. */