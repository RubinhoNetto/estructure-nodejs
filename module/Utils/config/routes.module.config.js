/**
 * module.config.js
 * Configuration System Modules
 * 
 * @author      Rubens Neto | Rubens@zelopet.com.br
 * @description Contains all required configurations modules.
 * @see         https://github.com/weiberlan/zelopet
 * @copyright   Copyright (c) 2017 ZeloPet. (http://www.zelopet.com.br)
 * @since       1.0.0
 * @version     1.0.0
 */

/**
 * Routers Modules
 * 
 * @constant
 */
const oRouter = require('express').Router();

/**
 * Config de rotas da das controllers
 * 
 * @constant
 */
const controllers ={
    index: require('../Controller/index'), 
} 

/**
 * ==================================================================
 * ROUTES - EX: (controller.{controller}.{action})
 * ==================================================================
 */ 
oRouter.get('/', controllers.index.index);


/**
 * 
 * @module Utils
 * @export Routers
 */
module.exports = oRouter;