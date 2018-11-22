/***
 * date:2018-11-21
 * author:zlyheut
 * usage: the request handler of the demo
 *  */
let exec = require("child_process").exec;
let querystring = require("querystring");

let formidable = require('formidable'),fs = require("fs");
let start = (response)=>{
    console.log("Request handler 'start' was called.");
    // let sleep=(delayMillinSeconds)=>{
    //     let currentTime =  new Date().getTime();
    //     while ( new Date().getTime() < currentTime +delayMillinSeconds);
    // };
    // sleep(10000);
    // return "Hello Start";
  
    // exec("ls -lah", function (error, stdout, stderr) {
    //     response.writeHead(200, {"Content-Type": "text/plain"});
    //     response.write(stdout);
    //     response.end();
      
    // });
    let  body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" '+
    'content="text/html; charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" enctype="multipart/form-data" '+
    'method="post">'+
    '<input type="file" name="upload">'+
    '<input type="submit" value="Upload file" />'+
    '</form>'+
    '</body>'+
    '</html>';
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}
let upload = (response,request)=>{
    console.log("Request handler 'upload' was called.");
    var form = new formidable.IncomingForm();
    console.log("about to parse");
    form.parse(request, function(error, fields, files) {
      console.log("parsing done");
      fs.renameSync(files.upload.path, "/tmp/test.png");
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write("received image:<br/>");
      response.write("<img src='/show' />");
      response.end();
    });
}
function show(response, postData) {
    console.log("Request handler 'show' was called.");
    //  formidable会将上传的组件默认的放到／tmp路径下
    fs.readFile("/tmp/test.png", "binary", function(error, file) {
      if(error) {
        response.writeHead(500, {"Content-Type": "text/plain"});
        response.write(error + "\n");
        response.end();
      } else {
        response.writeHead(200, {"Content-Type": "image/png"});
        response.write(file, "binary");
        response.end();
      }
    });
  }
module.exports.start = start;
module.exports.upload = upload;
module.exports.show = show;