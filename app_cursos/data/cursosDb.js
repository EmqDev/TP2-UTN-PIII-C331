const { Sequelize } = require('sequelize');

/* nombre de la db- user - contraseña - {donde esta alojada, lenguaje, puerto} */
const db = new Sequelize ("cursos_db","root","asd",{
    host : "127.0.0.1",
    dialect:"mysql",
    port: 33060
})


module.exports = { db, Sequelize };



