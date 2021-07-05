const express = require('express');
const router = require('./routes')
const api = express();

const port = 3000;

api.use(express.json())

api.use(function (req, res, next) {
    res.contentType('application/json');
    next();
});

api.use(router)

api.listen(port, ()=> {
    console.log(`Api está rodando na porta ${port}`)
})