const crud = require("../../crud/index");

async function login(req, res) {
    await fetch('http://localhost:8080/api/usuario/login', 
    {
    method: 'GET', 
    headers: {'Content-Type': 'application/json'}
    })

}

async function cadastrar(req, res) {
    const produto = req.body;
    return await crud.salvar("Produtos", "", produto);
}

async function pegar(req, res) {
    return await crud.pegar("Produtos");
}

module.exports = {
    cadastrar,
    pegar,
    login
}