const ModelProduto = require('../Models/produto');


//
module.exports = {
    
    async List(req, resp) {
        try {
            const produtos = await ModelProduto.findAll();
            return resp.json(produtos);
        } catch (error) {
            return console.error('Erros na List : ',error);
        }
    },

    async Create(req, resp) {
        try {
            const produtos = await ModelProduto.create({
                Codigo: req.body.Codigo,
                Descricao: req.body.Descricao
            });
            
            return resp.json(produtos)
        } catch (error) {
            return console.error('Erros no Create : ',error);
        }
    },
    
    async Update(req, resp) {
        try {
            const prod = await ModelProduto.findByPk(req.body.Codigo);
            if (prod){
                prod.Descricao = req.body.Descricao;
                await prod.save();
            }

            return resp.json(prod)
        } catch (error) {
            return console.error('Erros no Create : ',error);
        }
    },

    async GetOne(req, resp) {
        try {
            const prod = await ModelProduto.findByPk(req.body.Codigo);

            return resp.json(prod)
        } catch (error) {
            return console.error('Erros no Create : ',error);
        }
    },

    async Delete(req, resp) {
        try {
            const prod = await ModelProduto.findByPk(req.body.Codigo);
            await prod.destroy();
            return resp.json(prod)
        } catch (error) {
            return console.error('Erros no Delete : ',error);
        }
    },


}