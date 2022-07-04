import express from 'express'
import { conectar } from './src/mysql_conexion.js';

const app = express();

app.listen('8000',function(){
    console.log('aplicacion inciada en el puerto 8000');
});


// Configuracion de vistas
app.set('views', './vistas');




// configuracion de archivos estaticos
app.use(express.static('./vistas'));
app.use(express.static('./src'));
app.use(express.static('./css'));

app.get('/', function(req,res){
    // res.send('aplicacion iniciada');
   
    res.render('index.html'); 
});

app.get('agregarSorteo/:nombre/:descripcionSorteo',function(req,res){

    let nombre = req.params.nombre;
    let descripcionSorteo = req.params.descripcionSorteo;
    console.log(nombre,descripcionSorteo);
})
