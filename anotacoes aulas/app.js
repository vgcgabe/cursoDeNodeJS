//código criado para aprender a criar rotas básicas com "Express"
const express = require("express");
const app = express();

app.get("/", function(req, res){
    //res.send("Seja bem-vindo ao meu App!");
    res.sendFile(__dirname + "/html/index.html");   
});

app.get("/sobre", function(req, res){
    res.send("Minha página sobre");
});

app.get("/blog", function(req, res){
    res.send("Meu Blog");
});

//Rotas com parâmetros
app.get("/ola/:nome/:cargo", function(req, res){
    res.send("<h1>Olá " + req.params.nome + "</h1>"+"<h2>Seu cargo é: " + req.params.cargo + "</h2>");
});

app.listen(8081, function(){
    console.log("Servidor Rodando na URL http://localhost:8081");
}); //essa precisa ser sempre a última linha de código