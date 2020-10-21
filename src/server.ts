import express from 'express';
import 'express-async-errors';
import './database/connections';
import path from 'path';
import cors from 'cors';
import routes from './routes';
import errorHandler from './errors/handle';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

// Rota = conjunto
// Recurso = usuario

//Métodos HTTP = GET, POST, PUT, DELETE
//Parametros: Query, Route, Body
//Query Params: http://localhost:3333/users?search=diego
//Route Params: http://localhost:3333/users/1 (Identificar um recurso)
//Body: http://localhost:3333/users (JSON com os campos para salvar um recurso, atualizar)

const server = app.listen(3333, () => {
    console.log("API started");
});

