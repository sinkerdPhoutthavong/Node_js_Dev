var http = require('http');
var fs = require('fs');
// var myuser = {
//     "name":"Sinkerd",
//     "job":"Programer",
//     "age":20,
// }
http.createServer(function(req,res){
   if(req.url=='/home' || req.url=='/'){
       res.writeHead(200,{'Content-Type':'text/html'});
       var myStream = fs.createReadStream(__dirname+"/"+'index.html','utf8');
       myStream.pipe(res);
   }
   else if(req.url=='/facebook'){
       res.writeHead(200,{'Content-Type':'text/html'});
       var myStream = fs.createReadStream(__dirname+"/"+'facebook.html','utf8');
       myStream.pipe(res);
   }
   else if(req.url=='/youtube'){
    res.writeHead(200,{'Content-Type':'text/html'});
       var myStream = fs.createReadStream(__dirname+"/"+'youtube.html','utf8');
       myStream.pipe(res);
   }
   else{
       res.writeHead(404,{'Content-Type':'text/html'});
       var myStream = fs.createReadStream(__dirname+"/"+'notFound.html','utf8');
       myStream.pipe(res);
   }
}).listen(8081,'127.0.0.1');

