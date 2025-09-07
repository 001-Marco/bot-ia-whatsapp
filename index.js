```js
// index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Route principale
app.get('/', (req, res) => {
  res.send('Bot IA WhatsApp en ligne 🚀');
});

// Exemple de point de test
app.get('/test', (req, res) => {
  res.json({ message: 'Test réussi !' });
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur en ligne sur le port ${PORT}`);
});
```
