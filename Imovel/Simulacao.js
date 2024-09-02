const mongoose = require('mongoose');

const SimulacaoSchema = new mongoose.Schema({
  pessoaId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pessoa',
    required: true
  },
  imovelId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Imovel',
    required: true
  },
  rendaBruta: {
    type: Number,
    required: true
  },
  pontuacao: {
    type: Number,
    required: true
  },
  resultado: {
    valorAprovado: Number,
    parcelas: Number,
    taxaJuros: Number
  }
});

module.exports = mongoose.model('Simulacao', SimulacaoSchema);
