/******
 * 2018-11-21
 * zlyheut
 * create a server by node
 *  */
let http = require('http');
let url = require('url'),
formidable = require('formidable'),
util = require('util');
// let start = (route,handle)=>{
//     let onRequest = ( request, response)=>{
//         console.log('server start');
//         let pathname = url.parse(request.url).pathname, postData ='';
//         // route(handle,pathName);
//         request.setEncoding('utf8');
//         request.addListener('data',( postdataChunk )=>{
//             postData+=postdataChunk;
//             console.log(`Received Post data chunk ${postdataChunk}` );
//             }
//         );
//         request.addListener('end',()=>{
//             route( handle, pathname,response,postData);
//         });
//         // var content = route(handle, pathname, response)
        
//     }
//     http.createServer( onRequest ).listen(8888);
//     console.log('now, the serve is running at loacalhost:8888');
// }
//  上传文件
let start = (route,handle)=>{
    let onRequest = ( request, response)=>{
        // if(request.url =='/upload' && request.method.toLowerCase() =='post'){
        //     // parse a file upload
        //     let form =new formidable.IncomingForm();
        //     form.parse(request,(err, fields,files)=>{
        //         response.writeHead(200, {'Content-Type':'text/plain'});
        //         response.write(`you have upload: \n\n`);
        //         response.end(util.inspect({fields,files}));
        //     });
        //     return ;
        // }
        let pathname = url.parse(request.url).pathname, postData ='';
        console.log('server start');
        return route( handle, pathname,response,request);
        // 默认  显示文件上传的表单
        response.writeHead(200 , {'Content-Type':'text/html'});
        response.end( '<form action="/upload" enctype="multipart/form-data" '+
        'method="post">'+
        '<input type="text" name="title"><br>'+
        '<input type="file" name="upload" multiple="multiple"><br>'+
        '<input type="submit" value="Upload">'+
        '</form>');
        
    }
    http.createServer( onRequest ).listen(8888);
    console.log('now, the serve is running at loacalhost:8888');
}
module.exports.start=start;

