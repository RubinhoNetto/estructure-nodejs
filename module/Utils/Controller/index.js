/**
 * Controller - index.js
 * 
 * @author      Rubens Neto | Rubens@zelopet.com.br
 * @description Controller Index.
 * @see         https://github.com/weiberlan/zelopet
 * @copyright   Copyright (c) 2017 ZeloPet. (http://www.zelopet.com.br)
 * @since       1.0.0
 * @version     1.0.0
 */

/**
 * 
 * @module Utils
 * @export Controller.action
 */
module.exports = {
    /**
     * Action: Index.
     * 
     * @return {json}
     * @author Rubens Neto | Rubens@zelopet.com.br
     * @since       1.0.0
     * @version     1.0.0
     */
    index: (req, res) => {
        return res.json({
            result:  true,
            status:  200,
            message: '',
            data:    {}
        });
    },
};