const express = require('express')
const cors = require('cors')
class Server{

    constructor(){
        this.app=express();
        this.port=process.env.PORT;
        this.usuariosPath='/api/usuario'
        this.middware();
        this.routes();
      
    }
    middware(){
        this.app.use(cors())

        //Lectura tipo post
        this.app.use(express.json());

        this.app.use(express.static('publico'))
    }
    routes(){
        this.app.use(this.usuariosPath,require('../routes/user'));
    }

    listem(){
        this.app.listen(this.port,()=>{
            console.log("Servidor funcionando en el puerto",this.port);
        })
    }

}


module.exports=Server;