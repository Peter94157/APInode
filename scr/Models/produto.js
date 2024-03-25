const sequelize = require('sequelize');
const database = require('../db');
const shema ="";

class Produto extends sequelize.Model{}

Produto.init({
    id:{
        type:sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    barcode:
    {
        type:sequelize.STRING,
        allowNull:false
    },
    rota:
    {
        type:sequelize.STRING,
        allowNull:false
    },
    romaneio:{
        type:sequelize.STRING,
        allowNull:false
    }
},{
    sequelize: database, modelName: 'tabPiso',shema
    }
)

module.exports = Produto;