const mongoose = require('mongoose');

const ImovelSchema = new mongoose.Schema({
  tipo: {
    type: String,
    required: true
  },
  valor: {
    type: Number,
    required: true
  },
  localizacao: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Imovel', ImovelSchema);
