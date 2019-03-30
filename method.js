var pi =3.14;
var obj = {};
obj.updateData = function(){
    console.log("Updata DATA");
    
}
obj.deleteUser= function(){
    console.log("Delete USER");
    
}
var update = function(){
    return "Update Serve";
}
var add = function(a,b){
    return a+b;
}

exports.pi = pi;
exports.add = add;
exports.update = update;
exports.data = obj;