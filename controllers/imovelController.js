const Imovel = require('../models/Imovel');

exports.createImovel = (req, res) => {
  const { tipo, valor, localizacao } = req.body;
  const novoImovel = new Imovel(Date.now(), tipo, valor, localizacao);
  // Salvar o imóvel no banco de dados
  res.status(201).json(novoImovel);
};

exports.getImovel = (req, res) => {
  const { id } = req.params;
  // Buscar o imóvel no banco de dados pelo ID
  res.status(200).json({ id, tipo: "Apartamento", valor: 300000, localizacao: "Centro" });
};
