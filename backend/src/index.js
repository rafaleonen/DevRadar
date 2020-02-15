//Express auxilia na criação de rotas
//Nodemon assim que o código é alterado ele reinicia a aplicação
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')

const app = express()

mongoose.connect('mongodb+srv://rafahsclt:vhr241@cluster0-gq1wr.mongodb.net/week?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors())
app.use(express.json()) //Cadastra requisições de tipo JSON
app.use(routes)

app.listen(3333) //Referencia a porta 3333 em localhost/3333


