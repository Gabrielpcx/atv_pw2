    //IMPORTACÃO DO MODULO DO SEQUELIZE
    const sequelize = require ("sequelize");

    //IMPORTE DA CONEXAO DO BANCO DE DADOS
    const connection = require ("../DATABASE/database");
    
    const categoria = connection.define(
        'tbl_categoria',
        {
            codigo_categoria:{
                type: sequelize.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true,   
            },
            nome_categoria:{
                type:sequelize.STRING(255),
                allowNull: false,
            },
            observacoes_catetgoria: {
                type:sequelize.TEXT,
                allowNull: true,            },
        });
    /*
    SINCRONIZAÇÃO COM O BANCO DE DADOS - CRIA A TABELA CASO ELA NAO EXISTA 
    */
    
    categoria.sync({force:false}); 
    
    
    module.exports.categoria;