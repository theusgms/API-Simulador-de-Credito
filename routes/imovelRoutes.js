const express = require('express');
const router = express.Router();
const imovelController = require('../controllers/imovelController');

router.post('/', imovelController.createImovel);
router.get('/:id', imovelController.getImovel);

module.exports = router;
