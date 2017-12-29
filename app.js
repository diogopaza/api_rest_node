var express = require('express')
var app = express()

app.get('/', function(req, res){

    res.send('RESTIFUL API - Diogo Paza')
})

var users =[
    {id:1, username:'Diogo Paza',email:'diogopaza@diogo'},
    {id:2, username:'Pedro Paulo',email:'diogopaza@diogo'},
    {id:3, username:'Robson Augusto',email:'diogopaza@diogo'}
]

app.get('/api/listaUsers', function(req, res, next){

    res.send(users)
})

app.listen(8888, function(){
    console.log('Servidor Rodando')
});