const { Router } = require('express')
const DevController = require('./models/controllers/DevController')
const SearchController = require('./models/controllers/SearchController')


const routes = Router()

// Métodos HTTP: Get, Post, Put, Delete

//Tipos de parâmetros :
// Query Params : req.query (Filtros, ordenação, paginação...)
// Rout Params : req.params (identificar um recurso na alteração ou remoção)
// Body:

routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store)

routes.get('/search', SearchController.index)

module.exports = routes