var mongoose= require('mongoose');
var connection=mongoose.connect('mongodb+srv://michelle:michelle123@cluster0.ilqvv.mongodb.net/clase1?retryWrites=true&w=majority');

mongoose.connection.on('open',(ref)=>{
console.log("Conectado a mongo cloud");
}
);
module.exports=connection;