const express = require('express');
const mongoose = require('mongoose');
const Funcionario = require('./models/Funcionario');
const app = express();

app.use(express.json());
app.use(express.static('public'));

// CONECTA O SERVIDOR NODE.JS AO BANCO DE DADOS MONGODB
// SE ELE NÃO EXISTIR AINDA, O MONGODB CRIA AUTOMATICAMENTE QUANDO O USUÁRIO SALVAR O PRIMEIRO DADO.
mongoose.connect('mongodb://localhost:27017/Empresa')
  .then(() => console.log('MongoDB conectado!'))
  .catch(err => console.error('Erro na conexão:', err));


  

// INICIA O SERVIDOR EXPRESS DENTRO DO NODE.JS
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});




// FUNÇÃO QUE GERA UM ID  CRESCENTE PARA CADA NOVO REGISTRO
async function gerarCustomId() {
  const ultima = await Funcionario.findOne().sort({ customId: -1 });
  return ultima ? ultima.customId + 1 : 1;
}
