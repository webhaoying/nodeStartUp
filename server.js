/******
 * 2018-11-21
 * zlyheut
 * create a server by node
 *  */
let http = require('http');
let server =  http.createServer( (request, response)=>{
    console.log('server start');
    response.writeHead(200,{'Conten-Type':'text/plain'});
    response.write('Hello World');
    response.end();
} ).listen(8888);
console.log('now, the serve ois running at loacalhost:8888');