//importamos mysql
import mysql from 'mysql'

//Creamos la coneccion
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'sdad'
  });
 
  var conectar =connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log("monda conectada, creo");
  });
  export{conectar}