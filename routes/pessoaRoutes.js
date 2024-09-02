const express = require('express');
const router = express.Router();
const pessoaController = require('../controllers/pessoaController');

router.post('/', pessoaController.criarPessoa);
router.get('/', pessoaController.obterPessoas);

module.exports = router;
