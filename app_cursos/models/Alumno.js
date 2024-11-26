const { db, Sequelize } = require('../data/cursosDb.js');

const Alumno = db.define('alumnos', {
    id_alumno: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    apellido: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: Sequelize.STRING,
    },

});

module.exports = Alumno;
