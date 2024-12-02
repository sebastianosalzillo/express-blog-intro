const express = require('express');
const app = express();
const port = 3000;

// Importa i post dal file esterno
const posts = require('./posts');

// Rotta principale "/"
app.get('/', (req, res) => {
  res.send('Server del mio blog');
});

// Rotta "/bacheca"
app.get('/bacheca', (req, res) => {
  res.json({
    conteggio: posts.length,
    posts: posts
  });
});

// Configurazione degli asset statici
app.use(express.static('public'));

// Avvio del server
app.listen(port, () => {
  console.log(`Server avviato su http://localhost:${port}`);
});
