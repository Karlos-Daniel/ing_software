import express from 'express'
import { conectar } from './src/mysql_conexion.js';


const app = express()

app.listen('8000',function(){
    console.log('aplicacion inciada en el puerto 8000');
});
// Configuracion de pug
app.set('views', './vistas');
app.set('view engine','pug');

// configuracion de archivos estaticos
app.use(express.static('./vistas'));
app.use(express.static('./src'));
app.use(express.static('./css'));

app.get('/', function(req,res){
    // res.send('aplicacion iniciada');
    conectar()
    res.render('index.html');
    
});
