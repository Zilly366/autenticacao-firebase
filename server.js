const express = require('express');
const bodyParser = require('body-parser');
const getAccessToken = require('./getAccessToken');
const PORT = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.json());
app.post('/token', async (req, res) => {
  try {
    
    if (!req.body || !req.body.serviceAccount) {
      throw new Error('serviceAccount não foi enviado no body da requisição');
    }
    const serviceAccountJson = JSON.parse(req.body.serviceAccount);

    const token = await getAccessToken(serviceAccountJson);
    res.json({ access_token: token });

  } catch (err) {
    
    res.status(500).json({ error: 'Falha ao obter token', details: err.message });
  }
});


/*const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});*/


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
