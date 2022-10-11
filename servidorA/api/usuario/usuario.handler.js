const crud = require("../../crud/index");

async function cadastrar(req, res){
    const usuario = req.body;
    return await crud.salvar("Usuarios", "", usuario);
}

async function pegar(req, res){
    return await crud.pegar("Usuarios");
}

async function login(req, res){
    const email = req.body.email;
    const senha = req.body.senha;
    return email, senha;
}

module.exports = {
    cadastrar,
    pegar,
    login
}