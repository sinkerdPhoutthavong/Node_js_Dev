var fs = require('fs');
var data = 'Devn info study nodejs express mongodb';
var writeStream = fs.createWriteStream('./output.txt');
writeStream.write(data,'UTF-8');
writeStream.end();
writeStream.on('finish',function(){
    console.log("Output Finish");
    
});