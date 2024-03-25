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
                id: req.body.id,
                barcode: req.body.barcode,
                rota:req.body.rota,
                romaneio:req.body.romaneio
            });
            
            return resp.json(produtos)
        } catch (error) {
            return console.error('Erros no Create : ',error);
        }
    },
    
    async Update(req, resp) {
        try {
            const prod = await ModelProduto.findByPk(req.body.id);
            if (prod){
                prod.barcode = req.body.barcode;
                prod.rota=req.body.rota;
                prod.romaneio=req.body.romaneio;
                await prod.save();
            }

            return resp.json(prod)
        } catch (error) {
            return console.error('Erros no Create : ',error);
        }
    },

    async GetOne(req, resp) {
        try {
            const prod = await ModelProduto.findByPk(req.body.id);

            return resp.json(prod)
        } catch (error) {
            return console.error('Erros no Create : ',error);
        }
    },

    async Delete(req, resp) {
        try {
            const prod = await ModelProduto.findByPk(req.body.id);
            await prod.destroy();
            return resp.json(prod)
        } catch (error) {
            return console.error('Erros no Delete : ',error);
        }
    },


}