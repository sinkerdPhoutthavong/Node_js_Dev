var express = require('express');
var app = express();
var body = require('body-parser');
app.use(body());
app.set('view engine','ejs');

app.get('/showForm',function(req,res){
    res.sendFile(__dirname+"/"+"showForm.html");
});

app.post('/showData',function(req,res){ // for post get  first install body-parser
    data={
        fname:req.body.fname,
        lname:req.body.lname
    }
    console.log(data);
    res.end("<h1>"+data.fname+"</h1>");
});

// app.get('/showData',function(req,res){ // for method get
//     data={
//         fname:req.query.fname,
//         lname:req.query.lname
//     }
//     console.log(data);
//     res.end(JSON.stringify(data));
// });



// app.get('/',function(req,res){
//     var data ={name:"Devn Infor ",age: 20,job: "Programer",}
//     res.render('profile',{user:data});
// });
// app.get('/contact',function(req,res){
//     res.render('contact');
// });
// app.get('/database',function(req,res){
//     res.render('database');
// });
app.listen(8081);


