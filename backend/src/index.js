const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/* Exemplo de Cors caso fossemos colocar a aplicação em Produção

  app.use(cors({
    origin: "http://meuapp.com"
  }))
*/

/*
Rotas está relacionada ao caminho do banco de dados
Recurso é o que queremos acessar que está no .get '/' por exemplo.
*/

/**
 * Tipos de parâmetros:
 *
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * Banco de Dados:
 *
 * SQL
 * NoSQL
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where(...)
 */
