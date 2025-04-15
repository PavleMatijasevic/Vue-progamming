const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Projekcija = require('./projekcija');

const Karta = sequelize.define('Karta', {
  brojSedista: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  tableName: 'karte',
  timestamps: false,
});

// Karta pripada jednoj projekciji
Karta.belongsTo(Projekcija, { foreignKey: 'projekcijaId' });
Projekcija.hasMany(Karta, { foreignKey: 'projekcijaId' });


const Korisnik = require('./korisnik');

Karta.belongsTo(Korisnik, { foreignKey: 'korisnikId' });
Korisnik.hasMany(Karta, { foreignKey: 'korisnikId' });


module.exports = Karta;
