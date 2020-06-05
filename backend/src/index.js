const express = require("express");
const cors = require('cors');
//cors determina quem vai poder acessar a aplicação
const routes = require('./routes')
//./ referencia a mesma pasta do arquivo em questão (index.js)
//se não passar o ./ ele pensa que o routes é um pacote assim como express 

const app = express();

//Permite que as aplicações front-end acessem o nosso back-end
app.use(cors());
//Antes da requisição, a função informa para o app que usaremos json para interpretar as requisições 
app.use(express.json());
//Módulo de rotas será acessado através da variável routes
app.use(routes);

/**
 * Rota e Recursos:
 * 
 * Levando em conta um exemplo de rota: http://localhost:3333/users
 * O caminho users precisa estar na declaração da rota: '/users'
 * Rota: rota é o conjunto completo
 * Recurso: é o /users, ou seja, o recurso que queremos acessar. Vem depois da / na url
 */


// Request: guarda todos os dados que vem através da requisição do usuário
// Responde: responsável por retornar uma resposta para o usuário

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar/listar uma informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
  *     Ex:http://localhost:3333/users?name=Sérgio
  * Route Params: Parâmetros utilizados para identificar recursos (um único recurso)
  *     Ex:http://localhost:3333/users/1
  * Body Request: Corpo da requisição, utilizado para criar ou alterar recursos
  *     Ex:http://localhost:3333/users | Criação ou alteração feita com JSON no corpo da requisição
  */

  /**
   * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, Couch DB etc
   * 
   * Driver: Instalar pacote oficial de banco de dados para node
   *    Ex: SELECT * FROM users
   * Query Builder: Escreve query usando JS. Pronto para aceitar qualquer banco SQL
   *    Ex:table('users').select('*').where()
   */

//Acessar aplicação via porta 3333
app.listen(3333);