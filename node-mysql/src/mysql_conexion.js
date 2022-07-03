//importamos mysql
import mysql from 'mysql'

//Creamos la coneccion
const conector = mysql.createConnection(
    {
        host:'localhost',
        database: 'sdad',
        user: 'root',
        password: ''
       
    })

    const conectar = ()=>{
        console.log('BASE DE DATOS MICHAEN')
        conector.connect(err =>{
            console.log('BASE DE DATOS MICHAEN')
            if(err) throw err
            
           
            console.log('base de datosssssssssss')
        
        })
        console.log('BASE DE DATOS MICHAEN')
    }

  export{conectar}
  conector.end();