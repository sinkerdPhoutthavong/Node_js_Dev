var fs = require('fs');
var Readme = fs.readFileSync('./code.txt','UTF-8');
fs.mkdir('Project',function(){
    fs.writeFileSync('./Project/Readme.txt',Readme);
    var a = "Success";
    console.log(a);
});





