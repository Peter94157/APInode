const express = require('express');
const controllerProduto = require('../scr/Controllers/ProdutoController');

const routes = express.Router();

routes.get('/List', controllerProduto.List)

routes.post('/Create', controllerProduto.Create);

routes.post('/Update', controllerProduto.Update);

routes.get('/GetOne', controllerProduto.GetOne);

routes.post('/Delete', controllerProduto.Delete);


module.exports = routes;