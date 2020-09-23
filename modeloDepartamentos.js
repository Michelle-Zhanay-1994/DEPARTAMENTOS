var mongoose=require ("mongoose"),
Schemas=mongoose.Schema;
var atributos= Schemas({
idDepartamento:{type:Number,trim:true},
dimension:{type:Number,trim:true},
barrio:{type:String,trim:true},
calleprincipal:{type:String,trim:true},
planta:{type:String,trim:true},
propietario:{type:String,trim:true}
});
var departamentos=mongoose.model('departamentos',atributos);
module.exports=departamentos;