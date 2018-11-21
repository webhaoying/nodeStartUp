/***
 * date:2018-11-21
 * author:zlyheut
 * usage: the main index of the demo
 *  */
let server = require('./server');
let router = require('./router');
let requestHandlers = require('./requestHandlers');
let handle = {};
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;
handle['/show'] = requestHandlers.show;
server.start(router.route,handle);