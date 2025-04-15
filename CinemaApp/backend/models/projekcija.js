const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Film = require('./film'); // potrebno za asocijaciju

const Projekcija = sequelize.define('Projekcija', {
  datumVreme: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  tip: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  slobodnaMesta: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  tableName: 'projekcije',
  timestamps: false,
});

// Veza: Projekcija pripada filmu
Projekcija.belongsTo(Film, { foreignKey: 'filmId' });
Film.hasMany(Projekcija, { foreignKey: 'filmId' });

module.exports = Projekcija;


