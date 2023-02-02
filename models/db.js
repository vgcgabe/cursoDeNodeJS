const Sequelize = require("sequelize");

//Connect to MySql
    const sequelize = new Sequelize("postapp", "root", "@Vgcg1397", {
        host: "localhost",
        dialect: "mysql"
    });

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}