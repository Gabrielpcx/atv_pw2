// IMPORTANDO MÓDULO DO ESPRESS //
const express = require('express');

// CRIA UMA INSTANCIA EXECUTAVEL DO EXPRESS 
const app = express();

const connection = require ('./DATABASE/database');

const categoriaController = require("./CONTROLLER/CategoriaController");
app.use("/", categoriaController);

const produtoController = require("./CONTROLLER/Produtocontroller");
app.use("/", produtoController);   

console.log(connection);
//SERVIDOR REQUISIÇÃO / RESPOSTA
app.listen(3000, (req, res)=>{
    console.log('SERVIRDOR RODANDO')
})