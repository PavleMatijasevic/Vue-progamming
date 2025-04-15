const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Film = sequelize.define('Film', {
  naziv: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  opis: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  trajanje: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  zanr: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  godina: {
    type: DataTypes.INTEGER,
    allowNull: true,
  }
}, {
  tableName: 'filmovi',
  timestamps: false,
});

module.exports = Film;
