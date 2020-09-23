const express=require('express'),
rutas=express.Router(),

equipo=require('./controladorterreno');
departamentos=require('./controladorDepartamentos');

rutas.use('/equipo',equipo);
rutas.use('/departamentos',departamentos);

module.exports=rutas;