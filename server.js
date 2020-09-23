const express=require('express');
const body_parser=require('body-parser');
const app=express();
var conection=require('./conexionbase-datos');
const rutas=require('./rutas');
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended:true}));
app.use('/',rutas);
//var http=require("http");
//var server=http.createServer();

//app.on('request',mensajejson);
var port = process.env.PORT || 3000
app.listen(port,function(){
    console.log("El servidor se inicio correctamente")
});