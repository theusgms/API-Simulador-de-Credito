const mongoose = require('mongoose');

// Substitua pela sua string de conexão do MongoDB
const mongoURI = 'mongodb+srv://mateus:a10010225b@cluster0.xrgsi.mongodb.net/mateus?retryWrites=true&w=majority&appName=Cluster0';

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('MongoDB conectado!');
  } catch (err) {
    console.error('Erro ao conectar ao MongoDB:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;

