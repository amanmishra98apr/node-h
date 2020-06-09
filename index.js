var expres = require('express')
var app = expres()

app.get('/',function(req,res){
    res.send("hello world and welcome to node.js")
})

app.listen(3000, function(){
    console.log("app listening on port 3000")
})