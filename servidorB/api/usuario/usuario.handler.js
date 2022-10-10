const crud = require("../../crud/index");

async function cadastrar(req, res){
    const usuario = req.body;
    return await crud.salvar("Usuarios", "", usuario);
}

async function pegar(req, res){
    return await crud.pegar("Usuarios");
}

async function login(req, res){
    const usuarios = await crud.pegar("Usuarios");
    const email = req.body.email;
    const senha = req.body.senha;
    if(usuarios.findIndex(u => u.email == email) != -1 && usuarios.findIndex(u => u.senha == senha) != -1){
        res.send("true");
    }else{
        res.send("false");
    }
}

module.exports = {
    cadastrar,
    pegar,
    login
}