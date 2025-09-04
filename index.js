```js
const express = require("express");
const app = express();

app.use(express.json());

app.post("/webhook", (req, res) => {
  const message = req.body.message;
  const reply = `Tu as dit : ${message}`;
  res.json({ reply });
});

app.get("/", (req, res) => {
  res.send("Bot IA WhatsApp actif !");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Serveur lancé sur le port " + PORT);
});
```
