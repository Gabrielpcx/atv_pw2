const express = require('express'); 

const categoriaModel = require("../MODEL/categoria");

const router = express.Router();

// ROTA DE INSCRIÇÃO DE CATEGORIA 

router.post("/produto/cadastrarProduto", (req, res) =>{
    res.send("Produto cadastrado com Sucesso"); 
});

router.get("/produto/ListarProduto", (req, res) =>{
    res.send("Produto listado com sucesso");
});

router.put("/produto/alterarProduto", (req, res) =>{
    res.send("Produto alterado com Sucesso");
});

router.delete("/produto/deletarProduto", (req, res) =>{
    res.send("Produto deletado com sucesso");
});

module.exports = router;