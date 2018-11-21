/******
 * 2018-11-21
 * zlyheut
 * create a server by node
 *  */
let http = require('http');
let start = ()=>{
    let onRequest = ( requset, response)=>{
        console.log('server start');
        response.writeHead(200,{'Conten-Type':'text/plain'});
        response.write('Hello World');
        response.end();
    }
    http.createServer( onRequest ).listen(8888);
    console.log('now, the serve is running at loacalhost:8888');
}
module.exports.start=start;

