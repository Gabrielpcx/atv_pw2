const express = require('express'); 

const categoriaModel = require("../MODEL/categoria");

const router = express.Router();

// ROTA DE INSCRIÇÃO DE CATEGORIA 

router.post("/categoria/cadastrarCategoria", (req, res) =>{

    res.send("Categoria cadastrado com sucesso"); 
});

router.get("/categoria/listarCategoria", (req, res) =>{

    res.send("Categoria Listada com sucesso");
});

router.put("/categoria/alterarCategoria", (req, res) =>{

    res.send("Categoria alterada com sucesso"); 
});

router.delete("/categoria/deletarCategoria", (req, res) =>{
    
    res.send("Categoria deletada com sucesso");
});

module.exports = router;