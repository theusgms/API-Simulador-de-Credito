const express = require('express'); // Declare express apenas uma vez no início
const connectDB = require('./database');

const app = express();

// Conectar ao MongoDB
connectDB();

// Middleware para parse de JSON
app.use(express.json());

// Importando as rotas
const pessoaRoutes = require('./routes/pessoaRoutes');
const imovelRoutes = require('./routes/imovelRoutes');
const simulacaoRoutes = require('./routes/simulacaoRoutes');

// Usando as rotas
app.use('/api/pessoa', pessoaRoutes);
app.use('/api/imovel', imovelRoutes);
app.use('/api/simulacao', simulacaoRoutes);

// Porta do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;
