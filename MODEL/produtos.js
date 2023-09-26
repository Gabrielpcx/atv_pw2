const sequelize = require ("sequelize")

const connection = require ("../DATABASE/database")

const produto = connection.define(
    'tbl_produto',
    {
        codigo_produto:{
            type:sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },

        codigo_categoria:{
            type: sequelize.INTEGER.UNSIGNED,
            allowNull: false,
        },

        nome_produto: {
            type: sequelize.CHAR(255),
            allowNull: false,
        },
        
        valor_produto: {
            type: sequelize.DECIMAL(10.2),
            allowNull: false,
        },

        imagem_produto: {
            type: sequelize.DataTypes.CHAR(500),
            allowNull: false,
        },
        descricao_produto:{
            type: sequelize.TEXT,
            allowNull: false,
        },
    });

    produto.sync({force:false});

    module.exports.produto;
    