var fs = require('fs')
var readMe = fs.readFileSync('./code.txt','UTF-8'); ສໍາລັບການອ່ານຟາຍ
console.log(readMe);
fs.writeFileSync('./write.txt',readMe); //ສຳລັບຂຽນຟາຍ
