var express = require('express');
var routing = express();
routing.get('/home',function(req,res){
   res.send('<h1>HelloWord</h1>');
});
routing.listen(3000);