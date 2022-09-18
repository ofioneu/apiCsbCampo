const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
const host = "0.0.0.0";
app.use(bodyParser.json());
app.use(bodyParser.text());



app.post("/data", (req, res) => {
  // faz o parse para objeto js do json recebido
  const data = JSON.parse(req.body);
  db.task.save(data)

  //imprime o objeto na tela
  Object.keys(data).forEach((item) => {
    console.log(item + " : " + data[item]);
  });
  // envia um ok para o cliente
  res.send("ok");
});

app.listen(port, host, () => {
  console.log(`Example app listening on port ${port}`);
});
