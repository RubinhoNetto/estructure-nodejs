/**
 * index.js
 * Initialize server
 * 
 * @author      Rubens Neto | Rubens@zelopet.com.br
 * @description Initializes the application server.
 * @see         https://github.com/weiberlan/zelopet
 * @copyright   Copyright (c) 2017 ZeloPet. (http://www.zelopet.com.br)
 * @since       1.0.0
 * @version     1.0.0
 */

/**
 * Server
 * 
 * @global
 * @type {Object.express}
 * @constant
 */
const oServer = require('express')();

/**
 * 
 * @type {function}
 * @constant
 */
const fBodyParser = require('body-parser');

/**
 * 
 * @type {function}
 * @constant
 */
const fExpressQuery = require('express-query-int');

/**
 * 
 * @type {Integer}
 * @constant
 */
const iPort = process.env.PORT || 80;

/**
 * Setting server
 */
oServer.use(fBodyParser.urlencoded({ extended: true }));
oServer.use(fBodyParser.json());
oServer.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization');
  next();
});
oServer.use(fExpressQuery());

/**
 * Initialize server
 */
oServer.listen(iPort, () => {
  console.log(`Servidor rodando em http://localhost:${iPort}`);
});
require('../config/module.config')(oServer);

/**
 * 
 * @global
 * @param {Object.express}
 * @export Server
 */
module.exports = oServer;