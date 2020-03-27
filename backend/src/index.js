const express = require ('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);


/**
 * Rota / Recurso
 * 
 * Métodos HTTP:
 * 
 * GET: Buscar / Listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informção no back-end
 * DELETE: Deletar uma informação no back-end
 * 
 * 
 * Tipo de Parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtro, Paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo de requisição, utilizando para criar ou alterar recursos 
 * 
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB
 * 
 * 
 * -- SQLite
 * Driver: Select * From users
 * Query Builder: table('users').select(' * ').where()
 * 
 */