const { request,response } = require('express');
var departamentos=require('./modeloDepartamentos'),
    express=require('express');
    rutas=express.Router();
rutas.post('/obtenerTodos',(request,response)=>{
    departamentos.find({},(err,res)=>{
        if(err){
            console.log(err);
            throw err;
        }
        response.status(200).json(res);
        
    })
})
rutas.post('/crear',(request,response)=>{
    var body = request.body;
    departamentos.insertMany({
        idDepartamento:body.idDepartamento,
        dimension:body.dimension,
        barrio:body.barrio,
        calleprincipal:body.calleprincipal,
        planta:body.planta,
        propietario:body.propietario
    },(err,res)=>{
        if(err){
            console.log(err);
            throw err;
        }
        response.status(200).json(res);
    })

})
rutas.post('/editar',(request,response)=>{
    var body=request.body;
    departamentos.updateOne(
        {
            idDepartmento:body.idDepartmento,
    },{
        dimension:body.dimension,
        barrio:body.barrio,
        calleprincipal:body.calleprincipal,
        planta:body.planta,
        propietario:body.propietario
    },(err,res)=>{
        if(err){
            console.log(err);
            throw err;
        }
        response.status(200).json(res);
    })
})
rutas.post('/eliminar',(request,response)=>{
    var body = request.body;
    departamentos.deleteOne({
        idDepartmento:body.idDepartmento,
    },(err,res)=> {
        if(err){
            console.log(err);
            throw err;
        }
        response.status(200).json(res);
    })
})

module.exports=rutas;