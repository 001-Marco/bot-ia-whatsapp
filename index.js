```js
const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bot IA WhatsApp actif !");
});

app.post("/webhook", (req, res) => {
  const message = req.body.message || "Aucun message reçu";
  const reply = `Tu as dit : message`;
  res.json( reply );
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => 
  console.log(`Serveur en ligne sur le port{PORT}`);
});
```
