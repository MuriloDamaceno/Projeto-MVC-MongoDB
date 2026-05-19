require('dotenv').config(); // carrega o .env PRIMEIRO
const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const logger = require('./middlewares/logger');

const app = express();

// Conecta ao banco de dados
connectDB();

// Middlewares globais
app.use(express.json()); // interpreta JSON no body
app.use(logger);         // log de todas as requisições

// Rotas
app.use('/api', userRoutes);

// Middleware de tratamento de erros (sempre por último)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Erro interno no servidor' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));