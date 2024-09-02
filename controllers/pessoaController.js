const Pessoa = require('../models/Pessoa');

// Exemplo de rota para criar uma nova Pessoa
const criarPessoa = async (req, res) => {
  const { nome, tipo } = req.body;

  try {
    const novaPessoa = new Pessoa({ nome, tipo });
    await novaPessoa.save();
    res.status(201).json(novaPessoa);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Exemplo de rota para obter todas as Pessoas
const obterPessoas = async (req, res) => {
  try {
    const pessoas = await Pessoa.find();
    res.json(pessoas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { criarPessoa, obterPessoas };
