const router = require('express').Router()
const rpa = require('../rpa')

router.get('/', async (req, res) => {
    rpa.pegaTodos(res);
})

router.get('/:name', async (req, res) => {
    rpa.pesquisa(res, req.params.name);
})

module.exports = router