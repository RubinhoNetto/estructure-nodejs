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
 * @global
 * @type {Object}
 * @constant
 */
const modules = {
    utils: require('../module/Utils/config/routes.module.config'),
};

/**
 * 
 * @global
 * @param {Object.express}
 * @export Modules
 */
module.exports = (server) => {
    server.use('/', modules.utils);
};