var buf = new Buffer("Devn Info");
var buf1 = new Buffer(" Tutorial");
var buf2 = Buffer.concat([buf,buf1]);
console.log(buf2.toString());
