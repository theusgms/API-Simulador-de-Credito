const express = require('express');
const router = express.Router();
const simulacaoController = require('../controllers/simulacaoController');

router.post('/', simulacaoController.createSimulacao);

module.exports = router;
