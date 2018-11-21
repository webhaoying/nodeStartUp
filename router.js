/***
 * date:2018-11-21
 * author:zlyheut
 * usage: the router module of the demo
 *  */
let route = (handle,pathname='',response, request)=>{
    console.log(`About to route a request for ${request}`);
    if( typeof handle[pathname] == 'function' ){
        handle[pathname](response,request);
    }else{
        console.log( `No request handler found for ${request}`);
        response.writeHead(404,{'Conten-Type':'text/plain'});
        response.write('404 Not found');
        response.end();
    }
}
module.exports.route =route;