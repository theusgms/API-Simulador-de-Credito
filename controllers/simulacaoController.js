const Simulacao = require('../models/Simulacao');

exports.createSimulacao = (req, res) => {
  const { pessoaId, imovelId, rendaBruta, pontuacao } = req.body;
  const resultado = calcularSimulacao(rendaBruta, pontuacao, imovelId);
  const novaSimulacao = new Simulacao(Date.now(), pessoaId, imovelId, rendaBruta, pontuacao, resultado);
  // Salvar a simulação no banco de dados
  res.status(201).json(novaSimulacao);
};

function calcularSimulacao(rendaBruta, pontuacao, imovelId) {
  // Lógica para calcular a simulação baseada nos parâmetros
  return { valorAprovado: 150000, parcelas: 240, taxaJuros: 0.05 };
}
