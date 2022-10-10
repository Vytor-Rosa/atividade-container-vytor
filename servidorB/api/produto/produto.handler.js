const crud = require("../../crud/index");

async function cadastrar(req, res){
    const produto = req.body;
    return await crud.salvar("Produtos", "", produto);
}

async function pegar(req, res){
    return await crud.pegar("Produtos");
}

module.exports = {
    cadastrar,
    pegar,
}