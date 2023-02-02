//Arquivo criado para aprender os comandos básicos do módulo "Sequelize"
const Sequelize = require("sequelize");
const sequelize = new Sequelize("test", "root", "@Vgcg1397", {
    host: "localhost",
    dialect: "mysql"
});

sequelize.authenticate()
.then(function(){
    console.log("Conectado com sucesso!");
})
.catch(function(error){
    console.log("Falha ao se conectar: " + error);
});

//criando models
//tipo STRING tem um número limitado de caracteres, enquanto o tipo TEXT é ilimitado.
const Postagem = sequelize.define("postagens", {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
});

//inserir dados na tabela recém criada, postagens
Postagem.create({
    titulo: "primeira postagem",
    conteudo: "ashjnciuoashj cpuHUhihIDC"
});

const Usuario = sequelize.define("usuarios", {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
});

Usuario.create({
    nome: "Victor Gabriel",
    sobrenome: "Camargo Guedes",
    idade: 22,
    email: "vgcg@email.teste.com"
});
// Usuario.sync({force: true});
//Postagem.sync({force: true});