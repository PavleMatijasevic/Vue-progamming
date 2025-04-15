const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Korisnik = sequelize.define('Korisnik', {
  ime: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  lozinka: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  uloga: {
    type: DataTypes.STRING,
    defaultValue: 'user', // može biti "user" ili "admin"
  }
}, {
  tableName: 'korisnici',
  timestamps: false,
});

module.exports = Korisnik;
