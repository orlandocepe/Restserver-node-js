
const {response, request}=require('express')

const usuariosGet= (req=request, res=response) => {
    const query=req.query
    res.json({
         msg: 'Get API',
         query
     });
}
const usuariosPut= (req, res=response) => {
    const {id}=req.params;
    res.json({
        msg: 'put API',
        id
     });
}

const usuariosPots= (req, res=response) => {
    const {nombre,edad}=req.body;
    res.json({
        msg: 'post API',
        nombre,
        edad   
     });
}

const usuariosDelete= (req, res=response) => {
    res.json({
        msg: 'delete API'
     });
}


module.exports={
    usuariosGet,
    usuariosPut,
    usuariosPots,
    usuariosDelete
}