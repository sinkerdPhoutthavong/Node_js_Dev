var fs = require('fs');
var reader = fs.createReadStream('./code.txt');
var write = fs.createWriteStream('./file1.txt');
reader.pipe(write);