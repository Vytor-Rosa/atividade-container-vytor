const express = require("express");
const router = express.Router();

const usuarioHandler = require("./usuario.handler");

router.post("/produto", (req, res)=>{
    usuarioHandler.cadastrar(req, res).then(dados => res.send(dados));
});

router.get("/produto", (req, res)=>{
    usuarioHandler.pegar(req, res).then(dados => res.send(dados));
})

module.exports = router;